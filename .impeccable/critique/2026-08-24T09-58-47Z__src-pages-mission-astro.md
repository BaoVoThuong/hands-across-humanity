---
target: "/home/thanh/hands-across-humanity/src/pages/mission.astro#rules"
total_score: 25
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 0
timestamp: 2026-08-24T09-58-47Z
slug: src-pages-mission-astro
---
#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Smooth scroll position anchor, reveal animations indicate section loading |
| 2 | Match System / Real World | 4 | Human-centered numbers ("01", "02", "03"), clear categories (Practicality, Autonomy, Commitment), journalistic captions |
| 3 | User Control and Freedom | 3 | Deep linking via anchor #rules and clear "View Related Field Work" exit links |
| 4 | Consistency and Standards | 4 | Perfect alignment with editorial design system (Newsreader serif numbers, uppercase labels, warm borders) |
| 5 | Error Prevention | 4 | Passive content display with fallback responsive images via Astro Picture component |
| 6 | Recognition Rather Than Recall | 4 | Explicit rule numbers, badges, and contextual field captions eliminate guesswork |
| 7 | Flexibility and Efficiency | n/a | Persuade/Read surface: no power user accelerators required |
| 8 | Aesthetic and Minimalist Design | 3 | Flat editorial hair-line layout is clean, but image aspect ratios and text density create vertical visual imbalance |
| 9 | Error Recovery | n/a | Persuade/Read surface: static presentation without user input form error states |
| 10 | Help and Documentation | n/a | Persuade/Read surface: self-explanatory narrative editorial layout |
| **Total** | | **25/28** | **Good (89.2%)** |

#### Design Specificity Verdict

**LLM Assessment**: High design specificity. The section reflects a refined, Swiss-editorial/journalistic tone tailored specifically for a high-transparency NGO. Rather than generic corporate cards with rounded corners and drop shadows, it employs top-hairline borders (`border-top: 1px solid var(--border-warm)`), serif typography (`Newsreader`), real field photographs with documentary captions, and a strong pull-quote. However, the repeating CTA links under each card feel slightly redundant and pull focus from the narrative flow.

**Deterministic Scan**: Passed clean (`0 issues found`). No missing alt attributes, contrast violations, or layout bugs detected by `detect.mjs`.

#### Overall Impression
The "Three rules we hold to" section is a visually crisp, highly credible editorial feature. Its strength lies in treating organizational principles not as abstract marketing bullet points, but as concrete field commitments linked directly to real projects (Kitui, Kigali, Turkana). The single biggest opportunity is refining the vertical visual rhythm and action hierarchy to make the ending pull-quote hit with maximum emotional resonance.

#### What's Working
1. **Editorial Craft & Documentary Authenticity**: Combining rule principles with real project photos and detailed captions (`Kitui Emergency Roof Repair · 150 families sheltered`) creates high trust and narrative authenticity.
2. **Typography & Grid Structure**: Clean hairline borders with `Newsreader` numbers (`01`, `02`, `03`) give the layout an authoritative, NYT/Guardian-style magazine feel.
3. **Closing Emotional Anchor**: The pull quote *"The people affected decide what happens next."* serves as a powerful thematic anchor for the section.

#### Priority Issues
- **[P2] Redundant Micro-Actions**: Each of the 3 cards contains an identical `View Related Field Work →` link pointing to `/what-we-do/`. This creates visual clutter and dilutes action focus without offering unique destination context.
  - **Why it matters**: Repeating identical CTA labels 3 times in close proximity adds extraneous cognitive load and makes links feel like boilerplate instead of intentional paths.
  - **Fix**: Either make each link contextual (e.g. `/what-we-do/#emergency-roofing`, `/what-we-do/#cooperatives`) or remove individual card links and rely on the section-level CTA in the Panel header.
  - **Suggested command**: `$impeccable layout`

- **[P2] Image Aspect Ratio & Content Hierarchy**: The 16:10 aspect ratio on `rule-card__media` forces images into wide containers, taking up substantial vertical space before the reader reaches the core rule title and description.
  - **Why it matters**: On tablet/desktop 3-column views, the image dominates the top half of each card, pushing the textual principles (the core value proposition) further down.
  - **Fix**: Slightly reduce image height or test an asymmetrical layout where images sit beside or integrate tightly with text, giving titles stronger visual weight.
  - **Suggested command**: `$impeccable layout`

- **[P3] Pull Quote Separation**: The quote at the bottom (`margin-top: var(--space-8)`) feels somewhat disconnected from the grid above.
  - **Why it matters**: It acts as an isolated element rather than the natural climax of the rules section.
  - **Fix**: Elevate its typography size slightly and frame it with subtle vertical alignment or horizontal rules to integrate it into the editorial flow.
  - **Suggested command**: `$impeccable typeset`

#### Persona Red Flags
- **Jordan (First-Timer)**: *Confused by identical CTAs*. Jordan clicks "View Related Field Work" on Rule 01 expecting Kitui emergency roofing details, but gets sent to the generic `/what-we-do/` landing page without an anchor.
- **Alex (Power User)**: *Scans for specific impact metrics*. Alex appreciates the project captions (150 families, 85 families, 2,100 residents) but finds them rendered in subtle italic text (`rule-card__doc-caption`), which is easily overlooked when skimming.

#### Minor Observations
- The category tags (`Practicality`, `Autonomy`, `Commitment`) use a light slate color (`var(--slate-500)`) which could have slightly higher contrast against the warm background.

#### Questions to Consider
- What if the 3 rules used distinct deep links to specific initiative anchors on the `/what-we-do/` page instead of all pointing to the root route?
- Could the impact figures (e.g., `2,100 residents served`) be styled as bold callout micro-stats to increase skimmability for power users?
