/**
 * flow — the one carousel engine. A row of cards with the active one centred
 * and the neighbours visible; cards follow the finger/mouse while dragging and
 * snap fast on release. Supports arrows, wheel, keyboard, autoplay and nested
 * flows (cards are matched to their nearest [data-flow] root).
 */
export function initFlows() {
  document.querySelectorAll<HTMLElement>('[data-flow]').forEach((root) => {
    if (root.dataset.flowReady) return;
    root.dataset.flowReady = '1';
    const own = <T extends Element>(sel: string) => Array.from(root.querySelectorAll<T>(sel)).filter((el) => el.closest('[data-flow]') === root);
    const stage = own<HTMLElement>('[data-flow-stage]')[0];
    const cards = own<HTMLElement>('[data-flow-card]');
    const details = own<HTMLElement>('[data-flow-detail]');
    const counter = own<HTMLElement>('[data-flow-counter]')[0];
    const N = cards.length;
    if (!stage || N === 0) return;
    const wrap = root.dataset.flowWrap === 'true' && N > 2;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const autoplay = root.dataset.flowAuto ? Number(root.dataset.flowAuto) : 0;

    let pos = 0; // fractional index of the centred card
    let target = 0;
    let dragging = false, x0 = 0, p0 = 0, moved = false, lastX = 0, lastT = 0, vel = 0;
    let raf = 0, timer = 0;

    const gap = () => { const w = cards[0].offsetWidth || Math.min(352, window.innerWidth * 0.64); return Math.min(w * 0.86, window.innerWidth * 0.6); };
    const clamp = (v: number) => (wrap ? v : Math.max(0, Math.min(N - 1, v)));
    const norm = (i: number) => ((i % N) + N) % N;

    const render = () => {
      const g = gap();
      cards.forEach((c, i) => {
        let d = i - pos;
        if (wrap) { if (d > N / 2) d -= N; if (d < -N / 2) d += N; }
        const ad = Math.abs(d);
        const visible = ad <= 2.4;
        c.style.transform = `translateX(${d * g}px) translateZ(${-ad * 140}px) rotateY(${-d * 12}deg) scale(${Math.max(0.7, 1 - ad * 0.07)})`;
        c.style.opacity = visible ? String(Math.max(0, 1 - ad * 0.3)) : '0';
        c.style.zIndex = String(20 - Math.round(ad * 2));
        c.style.pointerEvents = visible ? 'auto' : 'none';
        c.classList.toggle('is-active', ad < 0.5);
        c.tabIndex = ad < 0.5 ? 0 : -1;
      });
      const active = norm(Math.round(pos));
      details.forEach((p, i) => (p.hidden = i !== active));
      if (counter) counter.textContent = `${String(active + 1).padStart(2, '0')} / ${String(N).padStart(2, '0')}`;
    };

    const animate = () => {
      cancelAnimationFrame(raf);
      const step = () => {
        const diff = target - pos;
        if (Math.abs(diff) < 0.002) { pos = target; render(); return; }
        pos += diff * 0.28;
        render();
        raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    const go = (i: number) => { target = clamp(i); if (still) { pos = target; render(); } else animate(); restart(); };
    const restart = () => { clearInterval(timer); if (autoplay && !still) timer = window.setInterval(() => go(wrap ? target + 1 : (target + 1 >= N ? 0 : target + 1)), autoplay); };

    own<HTMLElement>('[data-flow-prev]').forEach((b) => b.addEventListener('click', () => go(Math.round(target) - 1)));
    own<HTMLElement>('[data-flow-next]').forEach((b) => b.addEventListener('click', () => go(Math.round(target) + 1)));
    cards.forEach((c, i) => c.addEventListener('click', (e) => {
      if (moved) { e.preventDefault(); return; }
      if (norm(Math.round(pos)) !== i) {
        const href = c.getAttribute('href') || '';
        if (!details.length && href && !href.startsWith('#')) return; // let the link open its page
        e.preventDefault(); go(wrap ? nearest(i) : i); return;
      }
      if (details.length) { e.preventDefault(); details[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    }));
    const nearest = (i: number) => { let d = i - norm(Math.round(pos)); if (d > N / 2) d -= N; if (d < -N / 2) d += N; return Math.round(pos) + d; };

    stage.addEventListener('pointerdown', (e) => { dragging = true; moved = false; x0 = lastX = e.clientX; p0 = pos; lastT = performance.now(); vel = 0; cancelAnimationFrame(raf); clearInterval(timer); stage.classList.add('is-dragging'); });
    window.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const dx = e.clientX - x0;
      if (Math.abs(dx) > 6) moved = true;
      const now = performance.now();
      vel = (e.clientX - lastX) / Math.max(1, now - lastT);
      lastX = e.clientX; lastT = now;
      pos = wrap ? p0 - dx / gap() : Math.max(-0.35, Math.min(N - 1 + 0.35, p0 - dx / gap()));
      render();
    });
    const end = () => {
      if (!dragging) return;
      dragging = false;
      stage.classList.remove('is-dragging');
      // move only when the swipe clearly meant it: a third of a card, or a real flick
      const delta = pos - p0;
      const flick = Math.abs(vel) > 0.55 ? -Math.sign(vel) : 0;
      let steps = 0;
      if (flick) steps = flick;
      else if (Math.abs(delta) >= 0.34) steps = Math.sign(delta) * Math.max(1, Math.round(Math.abs(delta)));
      go(Math.round(p0) + steps);
      setTimeout(() => (moved = false), 50);
    };
    window.addEventListener('pointerup', end);
    window.addEventListener('pointercancel', end);
    stage.addEventListener('wheel', (e) => { if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) { e.preventDefault(); go(Math.round(target) + (e.deltaX > 0 ? 1 : -1)); } }, { passive: false });
    stage.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') go(Math.round(target) + 1); if (e.key === 'ArrowLeft') go(Math.round(target) - 1); });
    // deep link: #slug selects the matching card and brings the row into view
    const byHash = () => {
      const h = decodeURIComponent(location.hash.replace('#', ''));
      if (!h) return;
      const i = cards.findIndex((c) => c.dataset.hash === h);
      if (i < 0) return;
      target = pos = i; render();
      setTimeout(() => root.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
    };
    if (root.dataset.flowHash) {
      byHash();
      window.addEventListener('hashchange', byHash);
      const h0 = decodeURIComponent(location.hash.replace('#', ''));
      if (h0 && cards.some((c) => c.dataset.hash === h0)) {
        const land = () => setTimeout(() => root.scrollIntoView({ behavior: 'auto', block: 'start' }), 250);
        document.readyState === 'complete' ? land() : window.addEventListener('load', land, { once: true });
      }
    }
    window.addEventListener('resize', render);
    new ResizeObserver(() => render()).observe(stage);
    new IntersectionObserver((es) => (es[0].isIntersecting ? restart() : clearInterval(timer))).observe(root);
    render();
  });
}
