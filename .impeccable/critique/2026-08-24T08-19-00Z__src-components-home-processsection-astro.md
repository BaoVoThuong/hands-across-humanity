---
target: src/components/home/ProcessSection.astro
total_score: 26
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
timestamp: 2026-08-24T08-19-00Z
slug: src-components-home-processsection-astro
---
#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Static step cards offer scroll reveal animation but lack hover/focus states or active step tracking. |
| 2 | Match System / Real World | 3 | Process titles align with domain terms but feel slightly institutional rather than human-centered. |
| 3 | User Control and Freedom | 3 | Clean static section with no user traps, but lacks interactive expansion to inspect details. |
| 4 | Consistency and Standards | 4 | Strictly follows design tokens, color palette, and Newsreader serif optical typography. |
| 5 | Error Prevention | 4 | Purely informational static component; no input error surface. |
| 6 | Recognition Rather Than Recall | 3 | Grid layout shows all 4 steps at once, but lacks directional flow arrows or line connectors. |
| 7 | Flexibility and Efficiency | n/a | Persuade surface; marketing section does not require power-user shortcuts. |
| 8 | Aesthetic and Minimalist Design | 2 | Uses inline styles for typography and feels like a generic 4-card grid template without visual process indicators or depth. |
| 9 | Error Recovery | 4 | Informational content; error recovery is not applicable. |
| 10 | Help and Documentation | n/a | Persuade surface; inline contextual help is not applicable. |
| **Total** | | **26/32** | **Good (81.25%)** |

#### Design Specificity Verdict

**LLM assessment**: The section currently renders as a generic 4-column grid of boxed cards (`.process-step`) with primary-colored numbers (`01`–`04`), titles, and plain text descriptions. While neat and clean, it lacks brand personality, field realism, or tactile process representation (e.g. flow connectors, monetary routing graphics, or audit proof badges). It could belong to any generic corporate or SaaS website.

**Deterministic scan**: Detector scan clean (`detect.mjs` returned 0 findings).

**Visual overlays**: Browser injection fallback to static/CLI analysis signal.

#### Overall Impression
The "Our Direct Funding Model" section communicates its core 4-step mission clearly and uses good typography tokens, but visually presents as a flat, disconnected set of text boxes. The single biggest opportunity is transforming this static grid into an interactive visual pipeline with continuous process connectors and tangible audit proof affordances.

#### What's Working
1. **Clear Typographic Hierarchy**: Headings use optical variable serif styling with distinct monospaced number callouts (`01`–`04`).
2. **Scannable Structure**: 4-column responsive grid allows desktop visitors to comprehend the entire direct-funding story in one scan.
3. **Staggered Motion Entrance**: CSS variable-based scroll reveal animation introduces steps sequentially.

#### Priority Issues
- **[P1] Visual Genericness & Lack of Process Flow Indicators**:
  - *Why it matters*: The 4 steps look like standalone isolated cards rather than a connected end-to-end funding pipeline. Users don't feel the movement of capital from donor to field partner.
  - *Fix*: Add horizontal connecting lines / directional node tracks between step cards on desktop (and vertical timeline rail on mobile), plus subtle step icons or tactile visual markers.
  - *Suggested command*: `$impeccable layout`
- **[P1] Lack of Proof & Interactive Depth on Transparency Step**:
  - *Why it matters*: Step 04 ("Audited Impact Proof") claims verified financial receipts and metric logs, but is completely static. Skeptical donors leave unpersuaded without proof artifact affordance.
  - *Fix*: Add a micro-interaction or modal trigger on Step 04 (e.g., "View Audit Standards" or an inline badge previewing 94% direct allocation).
  - *Suggested command*: `$impeccable clarify`
- **[P2] Inconsistent Design System Styling (Inline CSS & Micro-typography)**:
  - *Why it matters*: `ProcessSection.astro` uses hardcoded inline styles (`style="font-size: 0.875rem; color: var(--slate-600);"`), violating design system maintainability and typographic consistency.
  - *Fix*: Refactor inline styles into `global.css` or component `<style>` block, using formal font tokens and spacing utilities.
  - *Suggested command*: `$impeccable typeset`
- **[P2] Mobile Stack Layout Lacks Process Rhythm**:
  - *Why it matters*: On small screens, cards stack vertically with standard gaps, losing the visual narrative of a 4-step pipeline and creating visual monotony.
  - *Fix*: Implement a vertical step indicator (timeline connector rail) with numbered node badges for mobile viewports.
  - *Suggested command*: `$impeccable adapt`

#### Persona Red Flags
- **Jordan (First-Timer / Donor seeking trust)**: Reads "Audited Impact Proof" in step 04, but sees no visual evidence or links to inspect actual receipts, audit reports, or financial breakdowns. The claim of zero middleman friction feels like an unverified marketing assertion.
- **Riley (Deliberate Stress Tester / Transparency Skeptic)**: Tries to click on step 04 to inspect audit documentation or financial ratio breakdowns, but the step is a static non-interactive box.
- **Casey (Distracted Mobile User)**: On mobile (<640px), the 4 cards stack vertically into a single column. Without vertical connecting lines or step progress indicators, the 4 cards look like a list of plain boxes rather than a connected process.

#### Minor Observations
- Cards lack hover/focus elevation effects (`translateY` or subtle border glow).
- The section title "Our Direct Funding Model" has centered header alignment while the cards inside have left-aligned content.
- Step numbers (`01`–`04`) use `var(--primary)` color, which is bright terracotta, but could be accented with subtle step icons or node dots.

#### Questions to Consider
- What if step 04 opened an interactive "Audit & Receipt Inspector" modal or preview drawer?
- What if the 4-step pipeline visually animated capital flow from donor input to field project output as the user scrolled?
- Could each step feature a tiny icon or visual badge symbolizing the action (e.g. magnifying glass, direct transfer arrow, building tools, audit shield)?
