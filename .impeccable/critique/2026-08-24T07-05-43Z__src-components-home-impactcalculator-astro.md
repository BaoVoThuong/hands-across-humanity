---
target: src/components/home/ImpactCalculator.astro
total_score: 25
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
timestamp: 2026-08-24T07-05-43Z
slug: src-components-home-impactcalculator-astro
---
#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Dynamic numbers change, but output container background lacks visual emphasis/contrast transition. |
| 2 | Match System / Real World | 4 | Human-centric outcomes (days of clean water, farming kits, school supplies). |
| 3 | User Control and Freedom | 3 | Easy preset/frequency toggle, but custom input field lacks reset button. |
| 4 | Consistency and Standards | 3 | Follows site palette, but preset buttons feel a bit squished and dark/sand output box feels disconnected. |
| 5 | Error Prevention | 3 | Good min/max bounds check ($5-$50,000), but validation text causes layout shift below custom input. |
| 6 | Recognition Rather Than Recall | 4 | Presets and calculated outcomes explicitly listed side-by-side. |
| 7 | Flexibility and Efficiency | n/a | Persuade / interactive calculator surface. |
| 8 | Aesthetic and Minimalist Design | 2 | Card container feels flat and rigid, lacks depth hierarchy, micro-interactions, or interactive outcome graphics. |
| 9 | Error Recovery | 3 | Clear inline validation message for out-of-bound inputs. |
| 10 | Help and Documentation | n/a | Persuade surface. |
| **Total** | | **25/32** | **Good (78%)** |

#### Design Specificity Verdict

**LLM assessment**: The `ImpactCalculator` card container is functional and clean, but currently lacks visual "wow" factor, editorial depth, and commercial non-profit authority. It relies on standard light surface boxes without rich visual framing, dynamic data visualizer accents, or interactive progress/tier feedback that would immediately convince major donors.

**Deterministic scan**: `detect.mjs` returned 0 static lint errors on `src/components/home/ImpactCalculator.astro` and `src/pages/index.astro`.

#### Overall Impression
The calculator functions well logically, but the container design feels standard and flat. With elevated visual depth, glassmorphism/gradient accents, card framing, interactive impact visualization meters, and refined micro-typography, this section can become a centerpiece conversion engine.

#### What's Working
1. Clear side-by-side split between donor selection and direct outcome output.
2. Smooth JavaScript state transitions updating metrics and CTAs dynamically.
3. High transparency messaging ("94% directly funds ground materials").

#### Priority Issues

- **[P1] Container Visual Flatness & Lack of Depth**: The `.calculator-card` container uses a generic white box with flat border, missing high-trust editorial framing, subtle background glow, or dynamic container hierarchy.
  - *Why it matters*: Fails to draw the user's focus as the central conversion tool on the homepage.
  - *Fix*: Introduce warm elevated layers, subtle ambient gradients, high-contrast outcome container, and refined border treatments.
  - *Suggested command*: `$impeccable layout` / `$impeccable polish`

- **[P1] Output Container Visual Hierarchy**: The right output panel (`.calc-output`) feels muted and doesn't visually celebrate the impact result when a donor toggles amounts or frequency.
  - *Why it matters*: Impact figures should feel rewarding and impressive to encourage larger contributions.
  - *Fix*: Redesign the output card into a high-trust field audit card with subtle background tinting, hero metric typography, and animated impact progress bar/indicators.
  - *Suggested command*: `$impeccable colorize` / `$impeccable animate`

- **[P2] Preset & Custom Input Ergonomics**: Preset buttons stretch linearly and custom input placement feels secondary with tight spacing.
  - *Why it matters*: Users comparing amounts ($25 vs $100 vs $500) need seamless visual feedback and clear active indicators.
  - *Fix*: Refine button grid layout, add subtle micro-badges (e.g. "Most Popular" on $50/$100), and integrate input field smoothly.
  - *Suggested command*: `$impeccable polish`

#### Persona Red Flags

**Jordan (First-Timer Donor)**: Needs instant reassurance that their $25 or $50 makes a real difference. Current output box text is small and neutral, so the outcome doesn't feel emotional or high-impact.

**Alex (Power Donor / Corporate Foundation)**: Wants to quickly enter $1,000+ custom amounts. Input field is buried under presets and looks like an auxiliary text box rather than a prominent option.

#### Minor Observations
- The frequency toggle ("Monthly Partner" vs "One-Time Gift") uses dark slate, which competes with primary CTA buttons.
- The annual impact total tag (`~ $600 / year total`) is subtle and easily overlooked.

#### Questions to Consider
- What if the impact output panel transformed dynamically into an interactive impact card with visual icon graphics and progress indicators?
- What if custom donation inputs had quick incremental buttons or a smoother slider indicator?
