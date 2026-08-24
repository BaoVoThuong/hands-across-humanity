---
target: src/pages/who-we-are.astro
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 1
timestamp: 2026-08-24T11-07-22Z
slug: src-pages-who-we-are-astro
---
# Critiquing Who We Are Page

## Design Health Score

Mode: **Read / Persuade** (Editorial landing page focusing on organizational identity and human proof).

Heuristics #7 (Flexibility and Efficiency of Use) and #10 (Help and Documentation) are scored `n/a` as this is an editorial narrative surface without complex workflows or software docs.

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | Active section indicator present in side subnav, but lacks explicit scroll-progress indicator across hero section. |
| 2 | Match System / Real World | 4/4 | Plain, human language ("The people closest to the work lead it", "Help reaches sideways") matching humanitarian editorial intent. |
| 3 | User Control and Freedom | 3/4 | "On this page" navigation allows jump-scrolling; next chapter CTA provides continuous narrative flow. |
| 4 | Consistency and Standards | 4/4 | Aligns strictly with warm editorial design system, typography rhythm, and Sand/Paper ground hierarchy. |
| 5 | Error Prevention | 3/4 | Navigation links are static and clear; no interactive input hazards present on this narrative surface. |
| 6 | Recognition Rather Than Recall | 3/4 | Clear numbered section markers (`01`, `02`, `03`) and visual figure callout badges (`FIG 01`). |
| 7 | Flexibility and Efficiency | n/a | Editorial reading surface; shortcuts/accelerators not applicable. |
| 8 | Aesthetic and Minimalist Design | 3/4 | Clean editorial presentation, but trust badge section feels visually isolated within paragraph flow. |
| 9 | Error Recovery | 3/4 | Clean fallback paths to main mission and support CTAs if user navigation fails. |
| 10 | Help and Documentation | n/a | Editorial storytelling surface; external help docs not applicable. |
| **Total** | | **23/32** | **Acceptable (71.8%)** |

## Design Specificity Verdict

**LLM assessment**: The page exhibits strong editorial character through authentic field imagery, direct quotes from local organizers (K’Bình), and a clear stance on local empowerment. However, it relies heavily on generic text layouts in Section 02 (`#model`) and lacks interactive depth or visual rhythm between the text-heavy sections. The guarantee bar (`process-guarantee-bar`) sits awkwardly in the middle of prose without strong structural separation.

**Deterministic scan**: The `detect.mjs` scan returned 0 rule violations across `who-we-are.astro` and `EditorialPage.astro`.

**Visual overlays**: Browser automation was not initialized; CLI static evaluation confirmed complete compliance with visual tokens.

## Overall Impression
The page establishes an authentic, human-centered tone with crisp photography and strong copy. However, the editorial flow in Section 02 (`#model`) and Section 03 (`#practice`) feels static—relying on standard 3-card grids and pull quotes without memorable micro-interactions or rich visual depth.

## What's Working
1. **Compelling Editorial Copy & Imagery**: The headline ("The people closest to the work lead it.") paired with realistic field photography creates immediate credibility.
2. **Authentic Pull Quote Component**: The pull-quote featuring local community organizer K’Bình anchors the narrative in human proof.
3. **Structured Chapter Transitions**: The dark transition footer cleanly guides readers to the next chapter (`/mission/`).

## Priority Issues

- **[P1] Visual Clutter & Formatting in Model Section**: The `process-guarantee-bar` (100% Community-Led Projects, Independent Financial Audit) is placed directly inside a text prose column (`.columns.prose`), creating awkward vertical spacing and breaking narrative reading rhythm.
  - **Why it matters**: Interrupts editorial reading flow and makes trust signals look slapped on rather than integrated.
  - **Fix**: Extract trust indicators into a dedicated visual trust strip or elevate them with distinct card framing outside the body text paragraph.
  - **Suggested command**: `$impeccable layout`

- **[P2] Static Principle Presentation**: The three core habits/principles in `#practice` use flat numbers (`01`, `02`, `03`) with minimal visual hierarchy or interactive feedback.
  - **Why it matters**: Readers tend to skim 3-column text blocks; missing visual anchor or hover focus reduces engagement.
  - **Fix**: Add subtle hover elevation, custom border accents, or progressive reveal micro-interactions to principle cards.
  - **Suggested command**: `$impeccable animate` or `$impeccable bolder`

- **[P2] Underutilized Hero Subnav**: The "On this page" hero subnav links (`02 How we work`, `03 In practice`) are plain text links that lack clear visual presence on desktop viewports.
  - **Why it matters**: Users miss the quick-jump capability on initial scroll.
  - **Fix**: Transform subnav items into pill tabs or styled index markers with active scroll highlight indicators.
  - **Suggested command**: `$impeccable layout`

## Persona Red Flags

- **Jordan (First-Timer)**: Reads narrative carefully but may get confused by the jump from abstract philosophy ("We listen before we act") to lack of tangible evidence on this specific page. Needs direct link to financial reports or field evidence near the audit badge.
- **Casey (Distracted Mobile User)**: On mobile viewports, the two-column hero media split collapses into a long scroll before reaching the core principles. The subnav links are easily overlooked.

## Minor Observations
- Section headers rely on standard `--i` staggered animation styles; ensure non-JS fallback maintains visibility.
- Hero figure caption (`FIG 01`) could benefit from monospaced badge styling consistent with project card tags.

## Questions to Consider
- *What if the 3 core principles included concrete field examples or interactive expanders instead of single-sentence descriptions?*
- *Should the trust badges ("100% Community-Led", "Independent Financial Audit") link directly to audit documents or modal inspectors?*
