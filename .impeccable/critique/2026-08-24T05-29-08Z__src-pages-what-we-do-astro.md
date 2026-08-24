---
target: src/pages/what-we-do.astro
total_score: 24
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
timestamp: 2026-08-24T05-29-08Z
slug: src-pages-what-we-do-astro
---
# Impeccable Critique: What We Do (`/what-we-do/`)

Method: dual-agent (A: sub-agent-inline-simulated · B: cli-detector-deterministic)

#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | Navigation & section anchors work well, but cards lack active/expanded indicator. |
| 2 | Match System / Real World | 4/4 | Direct, human, non-jargon editorial copy describing practical aid. |
| 3 | User Control and Freedom | 3/4 | Simple vertical flow, easy scroll/anchor nav, though lacks quick return-to-top on deep scroll. |
| 4 | Consistency and Standards | 3/4 | Strict design system alignment, but repetitive card grid structure. |
| 5 | Error Prevention | 4/4 | Static editorial display page; low error vector. |
| 6 | Recognition Rather Than Recall | 3/4 | Numbered cards (01-04) aid scanning; lack of filter/tab interaction. |
| 7 | Flexibility and Efficiency | n/a | Persuade/Read editorial surface. |
| 8 | Aesthetic and Minimalist Design | 3/4 | Clean sand/paper aesthetic, but typography hierarchy is flat across card titles. |
| 9 | Error Recovery | 4/4 | Clean fallbacks and robust Astro image formats. |
| 10 | Help and Documentation | n/a | Persuade/Read editorial surface. |
| **Total** | | **24/32** | **Good (75%)** |

#### Design Specificity Verdict

**LLM assessment**: The page carries an authentic, elevated editorial tone that fits "Hands Across Humanity". However, structurally it feels like a standard 4-card grid feature layout rather than an immersive, interactive showcase of humanitarian operations. The visual hierarchy between "Emergency Response" and "Long-term recovery" is flat—both receive identical 1/4 card grid weight despite having vastly different urgency and operational scale.

**Deterministic scan**: Automated detector scan (`node .agents/skills/impeccable/scripts/detect.mjs --json src/pages/what-we-do.astro`) returned `[]` (0 structural anti-patterns detected). Code structure is clean, responsive, and uses optimized Astro `<Picture>` components.

#### Overall Impression
The page is clean, respectful, and well-written, but lacks high-impact commercial authority. It reads like an excerpt of an annual report rather than an engaging program showcase that motivates major partners or donors to take action.

#### What's Working
1. **Compelling Editorial Copy**: Natural, human framing ("Start with what people say they need") avoiding typical NGO buzzword inflation.
2. **Authentic Imagery**: High-quality documentary photography integrated into structured card media containers.
3. **Clean Design System Foundations**: Cohesive use of `--paper`, `--surface`, and `--slate-900` tokens with clear section demarcation.

#### Priority Issues

- **[P1] Visual & Structural Monotony in Program Showcase**:
  - *Why it matters*: Presenting all four work areas in an identical 2x2 grid flattens the distinction between immediate crisis relief and multi-year recovery, reducing donor engagement.
  - *Fix*: Upgrade the 4-card grid into an interactive or asymmetrical feature showcase (e.g. split hero feature for Emergency + interactive tabbed breakdown for details).
  - *Suggested command*: `$impeccable layout` or `$impeccable bolder`

- **[P1] Weak Donor Conversion Pathways (Persuade Mode Deficit)**:
  - *Why it matters*: After reading about the four work areas, the user is given only a passive "Read our vision →" link instead of direct impact commitment choices (e.g. "Fund emergency response" or interactive calculator).
  - *Fix*: Add dedicated action hooks / impact allocation snippets on each work area card linking directly to donation presets.
  - *Suggested command*: `$impeccable shape` or `$impeccable delight`

- **[P2] Lack of Interactive Depth / Proof Points**:
  - *Why it matters*: The page relies purely on short paragraph summaries without showing field metrics, verified outcomes, or location indicators for any of the 4 areas.
  - *Fix*: Add key metric badges (e.g., "12,400 meals delivered", "48 partner schools") and expandable field stories.
  - *Suggested command*: `$impeccable polish` or `$impeccable harden`

- **[P2] Generic Bottom CTA Section**:
  - *Why it matters*: The dark footer block ("Next Chapter: Read our vision") feels disconnected from the core message of active work.
  - *Fix*: Transform the bottom banner into a dual-path CTA (e.g., "Partner with us on emergency relief" vs "Explore our 10-year vision").
  - *Suggested command*: `$impeccable clarify`

#### Persona Red Flags

- **Jordan (First-Timer Donor)**: Reads the four areas but doesn't immediately see *how* their $50 contribution maps to these 4 areas; leaves without donating.
- **Alex (Power Partner / Grant Evaluator)**: Looking for quantifiable data and geographic scope for each of the 4 program pillars; finds only high-level 2-sentence summaries.

#### Minor Observations
- Section anchor "On this page" pills (`02 Four areas`, `03 How they connect`) are small and have subtle contrast against the paper background.
- Pull-quote at the bottom (`“Start with what people say they need.”`) duplicates the `<h2>` title text almost verbatim without adding extra insight.

#### Questions to Consider
- What if each of the 4 work areas featured an active field stat or live project indicator?
- Should donors be able to filter or calculate impact directly from the "What We Do" page?
