---
target: "src/pages/what-we-do.astro#calculator"
total_score: 19
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
timestamp: 2026-08-24T11-23-31Z
slug: src-pages-what-we-do-astro-calculator
---
# Critique: Interactive Impact Allocation Calculator (what-we-do.astro#calculator)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Dynamic total update is clear, but lacks smooth animation feedback |
| 2 | Match System / Real World | 3 | Natural translation from dollar amount to real field impact items |
| 3 | User Control and Freedom | 2 | Fixed preset buttons ($25-$500), missing custom amount input field |
| 4 | Consistency and Standards | 2 | Ad-hoc inline CSS overrides (`style="..."`) breaking project design tokens |
| 5 | Error Prevention | 3 | Selection buttons are well-bounded, but input states lack explicit focus outlines |
| 6 | Recognition Rather Than Recall | 3 | Visual checklist clearly illustrates what each dollar tier provides |
| 7 | Flexibility and Efficiency | n/a | Persuade / Campaign surface |
| 8 | Aesthetic and Minimalist Design | 2 | Compressed layout with cluttered inline styles and redundant container borders |
| 9 | Error Recovery | 3 | Non-destructive preset selection allows effortless switching |
| 10 | Help and Documentation | n/a | Persuade / Campaign surface |
| **Total** | | **19/32** | **Acceptable (59.4%)** |

## Design Specificity Verdict

**LLM Assessment**: The calculator component is functionally rich but currently suffers from structural compression and inline style drift. While the feature itself fits the product's mission of transparent local aid, its visual container uses an ad-hoc dark card inset (`var(--slate-900)`) with dense inline typography (`clamp(...)` and hardcoded pixel sizes), making it feel squeezed into the layout rather than integrated into the warm editorial aesthetic of the site.

**Deterministic Scan**: `detect.mjs` returned 0 mechanical errors for syntax or broken rules, but manual audit identified extensive inline style pollution (`style="padding: 1.25rem 1.35rem..."`) that bypasses reusable CSS classes.

**Visual Overlays**: N/A (CLI scan verified clean DOM markup; live server visualization optional).

## Overall Impression
The feature provides great interactive value, but visually feels like a compressed widget crammed into a card. Transforming it from a tight boxed widget into an open, spacious editorial interactive section will dramatically elevate user trust and engagement.

## What's Working
1. **Clear Impact Conversion**: Direct mapping of dollar values ($25, $50, $100, $250, $500) to tangible field outcomes (food kits, school enrollment, solar water piping).
2. **Instant Feedback**: Selecting frequency or dollar tiers immediately updates the summary amount and call-to-action link.

## Priority Issues

- **[P1] Visual Compression & Inline Style Drift**
  - *Why it matters*: Heavy reliance on inline `style="..."` attributes disrupts the design system's spacing rhythm and causes awkward vertical clamping on standard screens.
  - *Fix*: Extract inline styles into clean global/component CSS utility classes, utilizing spacious grid padding and editorial visual hierarchy.
  - *Suggested command*: `$impeccable layout`

- **[P1] Lack of Custom Amount Flexibility**
  - *Why it matters*: Donors who want to contribute non-preset amounts (e.g., $35 or $150) are forced into rigid presets or redirected without clarity.
  - *Fix*: Add an elegant inline "Custom Amount" input field with smooth number formatting.
  - *Suggested command*: `$impeccable harden`

- **[P2] Monochromatic Dark Box Inset**
  - *Why it matters*: The right-hand column uses a harsh dark box (`#0F172A`) with tight padding (`1.25rem`), which conflicts with the warm sand/paper background of the page.
  - *Fix*: Transition the result panel into an warm elevated editorial card with high-contrast terracotta and emerald accents.
  - *Suggested command*: `$impeccable colorize`

- **[P3] Static Impact Transitions**
  - *Why it matters*: Switching between amounts abruptly swaps text without micro-animations or smooth numeric transitions.
  - *Fix*: Add subtle fade/slide micro-animations for impact checklist item transitions.
  - *Suggested command*: `$impeccable animate`

## Persona Red Flags

- **Jordan (First-Timer)**: Finds the compact dark panel slightly overwhelming with competing button pills and small security disclaimer text.
- **Casey (Mobile User)**: Preset buttons ($25 to $500) wrap tightly on small viewports with small tap padding (`0.35rem` gaps).

## Minor Observations
- The security badge icon (`🔒 94%`) is plain text rather than a refined SVG icon badge.
- The primary CTA button inside the result column uses a cramped `min-height: 2.35rem`.

## Questions to Consider
- What if the impact calculator was styled as a spacious split editorial layout with live visual illustrations for each pillar?
- Should we allow donors to slide a range track or type custom amounts seamlessly?
