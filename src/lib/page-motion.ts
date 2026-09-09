/**
 * page-motion — the motion layer every inner page gets for free:
 * masked line reveals on headlines, hero parallax, magnetic buttons.
 * The homepage brings its own choreography and is skipped here.
 */
import { gsap, SplitText, reduced } from './motion';

export function initPageMotion() {
  if (document.body.dataset.pageType === 'home') return;
  const heads = Array.from(document.querySelectorAll<HTMLElement>('main .eh__title, main .section-head .display-2, main .st__lines, main .cta__title, main .def__q, main .art__title, main .legal__head .display-2'));

  if (reduced()) {
    heads.forEach((h) => h.classList.add('is-in'));
    return;
  }

  document.fonts?.ready.then(() => {
    heads.forEach((el) => {
      el.classList.add('is-in');
      gsap.set(el, { autoAlpha: 1, y: 0 });
      const split = new SplitText(el, { type: 'lines', mask: 'lines', linesClass: 'pm-line' });
      gsap.from(split.lines, { yPercent: 110, duration: 1.1, stagger: 0.08, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
    });
  });

  const eh = document.querySelector<HTMLElement>('.eh');
  if (eh) {
    const media = eh.querySelector('.eh__media');
    if (media) gsap.to(media, { yPercent: -12, ease: 'none', scrollTrigger: { trigger: eh, start: 'top top', end: 'bottom top', scrub: true } });
    gsap.to(eh.querySelector('.eh__text'), { yPercent: -8, autoAlpha: 0.2, ease: 'none', scrollTrigger: { trigger: eh, start: '40% top', end: 'bottom top', scrub: true } });
  }

  // magnetic buttons
  if (matchMedia('(hover: hover)').matches) {
    document.querySelectorAll<HTMLElement>('.btn').forEach((b) => {
      b.addEventListener('pointermove', (e) => {
        const r = b.getBoundingClientRect();
        gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * 0.18, y: (e.clientY - r.top - r.height / 2) * 0.3, duration: 0.4 });
      });
      b.addEventListener('pointerleave', () => gsap.to(b, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' }));
    });
  }

  // module grids: staggered rise
  document.querySelectorAll<HTMLElement>('.mg__grid, .ihp__grid, .steps__list, .faq__list').forEach((g) => {
    gsap.from(g.children, { autoAlpha: 0, y: 30, stagger: 0.07, duration: 0.9, scrollTrigger: { trigger: g, start: 'top 85%', once: true } });
  });
}
