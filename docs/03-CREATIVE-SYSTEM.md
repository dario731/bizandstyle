# 03 — CREATIVE SYSTEM · Visual direction, typography, colour, motion, imagery, mobile

## Concept: "THE PLATFORM IS THE PICTURE"

A black-and-white brand, a Miami company, a business system. The site is built on **two grounds** that alternate
like acts in a film: **Paper** (warm ivory, daylight, strategy, clarity) and **Onyx** (night, luxury, discretion,
capital). Sections cut between them with hard edges — no gradients, no glass. Type does the heavy lifting.
The single recurring graphic is the **ring** (∞ / circle of growth): it appears as the Investor Journey, as the
Luxury ecosystem, as the Digital Engine loop, and as a hairline motif in the header CTA and section markers.
That repetition is what makes the site recognisable after ten other sites.

## Typography

| Role | Face | Notes |
|---|---|---|
| Display | **Archivo Variable** (wdth 62–125, wght 100–900) | Set wide (`wdth 118–125`, weight 700–800) to echo the wordmark's extended grotesque; tight leading 0.92–0.98; letter-spacing −0.02em. Large statements only. |
| UI / body | **Inter Variable** | 16–19px body, 1.55 line-height, weight 400/500. Eyebrows in 11–12px, tracked +0.18em, uppercase. |
| Editorial accent | **Cormorant Garamond** italic 400/500 | Pull quotes, the Luxury act, the founder story. Ties to the B&S Luxury brand. Used sparingly. |

Scale (fluid, clamp-based): `--fs-1 clamp(3rem, 8vw, 8.5rem)` display · `--fs-2 clamp(2.2rem, 5vw, 4.75rem)` ·
`--fs-3 clamp(1.6rem, 3vw, 2.5rem)` · `--fs-4 1.375rem` · body 1.0625rem · small 0.875rem · eyebrow 0.72rem.

## Colour tokens

Brand is monochrome. Sister brand warmth is inherited so the group reads as one family.

```
--onyx    #0E0D0B   deep ground
--ink     #121110   text on paper
--paper   #FAF6EF   light ground
--ivory   #F3EDE2   secondary light surface
--sand    #E8DFCE   rules / soft surfaces on paper
--stone   #A9A196   muted text on onyx, captions
--smoke   #6F6961   muted text on paper
--rule    #D9CFBA   hairlines on paper   ·   --rule-deep #2A2825 hairlines on onyx
--brass   #B8975A   ONE accent, for the ring stroke, focus rings and active states only. Never fills. Never headings.
```

Contrast: ink on paper 15.6:1; paper on onyx 17:1; stone on onyx 7.1:1; smoke on paper 5.3:1. Brass is never used
for text smaller than 24px on paper.

## Spacing, grid, radius

- Base unit 4px; section rhythm `--space-section clamp(6rem, 12vw, 12rem)`.
- 12-column grid, gutter `clamp(1rem, 2.5vw, 2.5rem)`, container 1440 max, editorial measure 68ch.
- Radius: **0** everywhere except pills (buttons `999px`) and media (`2px`). Luxury from rules and spacing, not corners.
- Rules: 1px `--rule` / `--rule-deep`. Section markers: `01 —` numerals in Inter 500, tracked.

## Buttons & links

- Primary: pill, 1px border, transparent → fills ink/paper on hover with a 240ms ease; label tracked +0.06em uppercase 12px.
  The header CTA carries the tiny ring glyph before the label.
- Secondary: text link with a 1px underline that draws from left on hover (`background-size` transition).
- Focus: 2px brass outline, 3px offset. Always visible.

## Motion language

- Timing: `--ease-out cubic-bezier(.16,1,.3,1)`; durations 240 / 480 / 900ms. Reveals translate 24px + opacity, staggered 60ms.
- Scroll-driven typography: the "WE DON'T SELL THEORY" statement builds line by line as the section scrolls (IntersectionObserver, thresholds).
- The ring: `stroke-dashoffset` draws as the Investor Journey section enters; stage labels light in sequence; the ring keeps
  rotating slowly (60s) — the only perpetual motion on the page, and only when in view.
- Luxury ecosystem: hover/focus on a vertical highlights its edges; on touch, tap toggles; a "next" button cycles.
- Digital Engine: nodes light in sequence on a 1.6s loop while in view; the return arc shows the loop.
- Map: dotted arcs from Miami draw on entry (SVG paths, `pathLength`).
- Silence: The Platform and Relationships sections have no motion beyond the reveal.
- `prefers-reduced-motion: reduce` → all reveals instant, ring static with all stages lit, loops paused, video replaced by poster.

## Imagery rules

Monochrome-leaning photography with warm shadows, never blue-cast. Architecture, infrastructure, movement, night.
No handshakes, no laptops, no stock people. Video: 16:9 masters with 9:16 derivatives; ≤ 2.5MB per 10s on mobile,
poster frames always. Until real assets arrive, `MediaPlaceholder` renders a labelled ivory/onyx frame with the manifest
ID — never a generic stock image.

## Mobile adaptation

- Display type steps to `wdth 100` at < 640px so wide type still fits.
- Investor Journey: ring becomes a vertical stepper with the ring shown small; stages are tappable.
- Luxury ecosystem: network becomes a list with "connected to" chips; tapping expands.
- Mega-menu → full-screen drawer with the seven items, each expandable; CTA pinned at bottom.
- Sticky bottom CTA only on landing pages (`/internationalization`, `/digital-engine`, programs) after 60% scroll.
- Video autoplay only on `saveData !== true` and viewport ≥ 640; otherwise poster.
