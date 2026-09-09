/**
 * Reveal-on-scroll and "in view" utilities. One observer for the page.
 * Respects prefers-reduced-motion (base.css already forces visible state).
 */
export const reducedMotion = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initReveal(root: ParentNode = document): void {
  const targets = root.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-group]');
  if (!targets.length) return;
  if (reducedMotion() || !('IntersectionObserver' in window)) {
    targets.forEach((t) => t.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
  );
  targets.forEach((t) => io.observe(t));
}

/** Toggle a class while an element is in view (used to pause loops off-screen). */
export function whileInView(el: Element, cls = 'is-active', threshold = 0.25): () => void {
  if (!('IntersectionObserver' in window)) {
    el.classList.add(cls);
    return () => {};
  }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => el.classList.toggle(cls, e.isIntersecting)),
    { threshold },
  );
  io.observe(el);
  return () => io.disconnect();
}

/** Scroll progress of an element through the viewport, 0..1, via rAF-throttled scroll. */
export function onScrollProgress(el: Element, cb: (p: number) => void): () => void {
  let ticking = false;
  const compute = () => {
    ticking = false;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = r.height + vh;
    const p = Math.min(1, Math.max(0, (vh - r.top) / total));
    cb(p);
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(compute);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  compute();
  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
  };
}
