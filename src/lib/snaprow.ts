/** Wires every [data-snaprow]: arrows scroll one card, disabled at the ends. */
export function initSnapRows() {
  document.querySelectorAll<HTMLElement>('[data-snaprow]').forEach((row) => {
    const track = row.querySelector<HTMLElement>('.snaprow__track');
    const prev = row.querySelector<HTMLButtonElement>('[data-snap-prev]');
    const next = row.querySelector<HTMLButtonElement>('[data-snap-next]');
    if (!track) return;
    const step = () => (track.firstElementChild as HTMLElement | null)?.getBoundingClientRect().width ?? 300;
    const update = () => {
      const max = track.scrollWidth - track.clientWidth - 2;
      if (prev) prev.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = track.scrollLeft >= max;
    };
    prev?.addEventListener('click', () => track.scrollBy({ left: -(step() + 12), behavior: 'smooth' }));
    next?.addEventListener('click', () => track.scrollBy({ left: step() + 12, behavior: 'smooth' }));
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    // drag with mouse
    let down = false, x0 = 0, s0 = 0;
    track.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') return; down = true; x0 = e.clientX; s0 = track.scrollLeft; track.style.scrollSnapType = 'none'; });
    track.addEventListener('pointermove', (e) => { if (down) track.scrollLeft = s0 - (e.clientX - x0); });
    const up = () => { if (!down) return; down = false; track.style.scrollSnapType = ''; };
    track.addEventListener('pointerup', up);
    track.addEventListener('pointerleave', up);
    update();
  });
}
