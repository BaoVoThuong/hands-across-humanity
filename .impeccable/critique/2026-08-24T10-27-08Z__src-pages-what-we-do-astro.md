---
target: src/pages/what-we-do.astro
total_score: 32
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 0
timestamp: 2026-08-24T10-27-08Z
slug: src-pages-what-we-do-astro
---
# Critique Report (Post-Remediation): `/what-we-do` Page

Method: dual-agent (A: design-director · B: detector-browser)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4/4 | State changes in compact calculator update cleanly with crisp inline indicators. |
| 2 | Match System / Real World | 4/4 | Humanitarian copy and transparent stats (e.g. "142,000+ People Served"). |
| 3 | User Control and Freedom | 3/4 | Subnav jumps cleanly between panels. |
| 4 | Consistency and Standards | 4/4 | **FULLY ALIGNED WITH `/mission`**: Section `#areas` now uses Mission's signature 2x2 Editorial Grid with `FIG 02.x` captions, location tags, and micro stat badges. |
| 5 | Error Prevention | 3/4 | Preset buttons restrict calculator input to valid donation tiers. |
| 6 | Recognition Rather Than Recall | 4/4 | 01-04 numbered cards maintain clear indexing across sections. |
| 7 | Flexibility and Efficiency | n/a | Persuade/Read editorial surface (accelerators not applicable). |
| 8 | Aesthetic and Minimalist Design | 4/4 | **P0 OVERFLOW RESOLVED**: All panels (`#areas`, `#calculator`, `#connect`) are strictly capped within `100dvh - var(--header-h)`. Zero vertical overflow. |
| 9 | Error Recovery | 3/4 | Calculator defaults gracefully if invalid state is selected. |
| 10 | Help and Documentation | 3/4 | Clear lead copy and captions explaining how the 4 pillars connect. |
| **Total** | | **32/36** | **Excellent (89%)** |

## Verification Summary
- **Section `#areas`**: Successfully refactored into a symmetric 2x2 Editorial Grid with Mission's photo headers, `FIG 02.1 - 02.4` figure labels, and micro stat rows.
- **Viewport Fit (`100vh`)**: Applied `max-height: calc(100dvh - var(--header-h))` and responsive `clamp()` padding across all panels. No vertical scroll spillover on 1366x768 / 1440x900 screens.
- **Calculator**: Streamlined into a compact horizontal split card.
