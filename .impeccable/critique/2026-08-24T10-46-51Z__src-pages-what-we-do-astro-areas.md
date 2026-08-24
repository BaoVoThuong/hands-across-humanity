---
target: "src/pages/what-we-do.astro#areas"
total_score: 13
max_score: 20
na_heuristics: 3,5,7,9,10
p0_count: 0
p1_count: 1
timestamp: 2026-08-24T10-46-51Z
slug: src-pages-what-we-do-astro-areas
---
# Critique Report for Section #areas (`src/pages/what-we-do.astro#areas`)

⚠️ DEGRADED: single-context (sub-agents unavailable in single thread execution context)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Good location indicators (`📍 Location`) and figure IDs, but subtle hover feedback on links. |
| 2 | Match System / Real World | 4 | Human-centered editorial copy, plain language without NGO jargon. |
| 3 | User Control and Freedom | n/a | Persuade/Read surface; no complex state navigation within static section. |
| 4 | Consistency and Standards | 2 | Asymmetric layout breaks structural consistency; Item 01 & 04 feel like custom heroes while 02 & 03 look like squished sub-cards. |
| 5 | Error Prevention | n/a | Read-only showcase section. |
| 6 | Recognition Rather Than Recall | 3 | Explicit visual badges (`ESSENTIALS & WATER`, `EDUCATION & SCHOOLS`), clear numerical sequence. |
| 7 | Flexibility and Efficiency | n/a | Static editorial grid. |
| 8 | Aesthetic and Minimalist Design | 1 | AI Slop alert: Overloaded structural metadata, dense 3-line layout per item, vertical text jumps, and competing hairline borders create visual friction. |
| 9 | Error Recovery | n/a | Read-only section. |
| 10 | Help and Documentation | n/a | Self-explanatory editorial content. |
| **Total** | | **13/20** | **Acceptable (65%)** |

## Design Specificity Verdict

**LLM Assessment**: The current implementation exhibits severe **AI Slop symptoms** — attempting to force an Apple-style Bento grid into an editorial documentary narrative. Placing 2 wide horizontal cards (`01` and `04`) around 2 compact vertical cards (`02` and `03`) creates awkward aspect ratio stretching, inconsistent eye scans, and redundant text density (`FIG 02.1`, `📍 East Africa`, `142,000+`, `ESSENTIALS & WATER` all jammed together).

**Deterministic Scan**: Found minor design system token warnings in `global.css` (hardcoded hex colors from previous legacy components). The `.bento-areas-grid` markup itself is valid Astro code.

## Overall Impression
The section feels cluttered and forced. Rather than letting documentary field stories breathe like a high-end publication (e.g., *The New Yorker* or *Monocle*), the grid feels like a generic SaaS feature grid wrapped in sand colors.

## Priority Issues

- **[P1] Visual Chaos & AI Slop Layout (Asymmetric Horizontals vs Verticals)**
  - *Why it matters*: Item 01 and Item 04 stretch horizontally, forcing 02 and 03 to look cramped. The user's eye jumps erratically across the screen.
  - *Fix*: Return to a clean, rhythmic Editorial Journal List or a pure 2x2 symmetrical grid with consistent visual weight and generous white space.
  - *Suggested command*: `$impeccable layout`

- **[P2] Redundant Metadata & Visual Noise**
  - *Why it matters*: Each item has a category badge, a figure ID (`FIG 02.1`), a pin icon with location, a number (`01`), a title, a body text, a stat value, a stat label, AND an action link. That's 9 visual elements in a tiny space!
  - *Fix*: Strip non-essential decorations. Keep item number, title, body, key stat, and CTA.
  - *Suggested command*: `$impeccable distill`

- **[P2] Poor Typography Hierarchy & Measure**
  - *Why it matters*: Descriptions inside 2-column cards stretch awkwardly or truncate into 2 lines (`-webkit-line-clamp: 2`), making the reading experience uncomfortable.
  - *Fix*: Improve typography scale using Newsreader display serif for titles and clean Public Sans with adequate line-height for body copy.
  - *Suggested command*: `$impeccable typeset`

## Persona Red Flags

- **Jordan (First-Timer)**: Gets overwhelmed by the competing badges (`ESSENTIALS & WATER` + `FIG 02.1` + `📍 East Africa`). Doesn't know where to look first.
- **Alex (Power User)**: Dislikes forced visual gimmicks (horizontal vs horizontal-reverse cards) that slow down scannability.

## Minor Observations
- The category badges (`ESSENTIALS & WATER`) on top of images use `backdrop-filter: blur`, which feels like an iOS UI habit inside an editorial journal world.
