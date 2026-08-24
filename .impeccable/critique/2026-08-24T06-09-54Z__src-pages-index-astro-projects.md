---
target: "src/pages/index.astro#projects"
total_score: 19
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
timestamp: 2026-08-24T06-09-54Z
slug: src-pages-index-astro-projects
---
#### Report header provenance
⚠️ DEGRADED: single-context (sub-agent tool unavailable in this session)

#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2/4 | Tab buttons are non-functional; clicking categories gives zero feedback/filter update. |
| 2 | Match System / Real World | 3/4 | Good financial metrics ($44k/$50k, 88%), but missing "remaining goal" human phrasing. |
| 3 | User Control & Freedom | 2/4 | Audit modal lacks background click-to-close or Escape key exit. |
| 4 | Consistency & Standards | 3/4 | Card footers cram buttons tightly on 4-column desktop viewports (<250px card width). |
| 5 | Error Prevention | 3/4 | Modal focus trap and key bindings are missing. |
| 6 | Recognition Rather Than Recall | 3/4 | Category tags exist, but all share monochromatic neutral styling without visual distinction. |
| 7 | Flexibility & Efficiency | n/a | Marketing showcase surface |
| 8 | Aesthetic & Minimalist Design | 3/4 | Clean card typography, but visual weight is uniform across category tags and action buttons. |
| 9 | Error Recovery | 3/4 | Smooth fallback for `#donate` anchor link if JS is disabled. |
| 10 | Help & Documentation | n/a | Marketing showcase surface |
| **Total** | | **19/32** | **Acceptable (59.4%)** |

#### Design Specificity Verdict

**LLM assessment**: The "Current Projects Seeking Support" section presents an authentic non-profit field grid with verified audit partners and funding progress metrics. However, its interaction model is currently superficial: the category tabs (`Clean Water`, `Education`, `Emergency Relief`, `Cooperatives`) are non-functional static buttons, category tags share identical gray styling without visual identity, and card CTA buttons squeeze uncomfortably inside small grid columns on desktop.

**Deterministic scan**: Automated `detect.mjs` returned **0 static rule violations** on `src/pages/index.astro`.

**Visual overlays**: Headless context run without active browser injection overlay.

#### Overall Impression
A solid foundation with authentic documentary imagery and high-trust audit metrics. However, it suffers from "interactive illusion"—tabs and modals look functional but lack full interaction design, accessibility, and visual category distinction.

#### What's Working
1. **High-Trust Audit & Location Metadata**: Displaying specific field locations (Kitui, Kenya; Rift Valley; Mindanao) and audit partners directly in cards and modals builds immediate donor confidence.
2. **Clear Progress Visualization**: Track bar with dual metric display (`Raised: $44,000` / `Goal: $50,000 (88%)`) immediately communicates project completion status.
3. **Authentic Documentary Media**: High-quality WebP images (`water-tank`, `schools-learning`, `roofing-sheets`) anchor each project in ground reality rather than stock illustration.

#### Priority Issues

- **[P1] Non-Functional Category Filter Tabs**
  - **Why it matters**: Donors trying to filter by cause (e.g. Clean Water or Education) click tabs expecting grid updates, but nothing happens, creating friction and disappointment.
  - **Fix**: Implement client-side filtering logic with smooth fade transitions for `.project-card` elements based on `data-category`.
  - **Suggested command**: `$impeccable layout` or `$impeccable clarify`

- **[P1] Monochromatic & Visually Uniform Category Tags**
  - **Why it matters**: All 4 project categories use identical generic badge styles. Users cannot scan or differentiate causes visually.
  - **Fix**: Apply color token system mapping distinct colors to causes (Azure for Clean Water, Amber for Education, Crimson for Relief, Emerald for Cooperatives).
  - **Suggested command**: `$impeccable colorize`

- **[P2] Cramped Card Actions on Desktop Grids**
  - **Why it matters**: On 4-column desktop layouts (1100px+), card width drops below 250px. Side-by-side "Audit & Info" and "Support →" buttons force awkward button text wrapping.
  - **Fix**: Restructure card footer hierarchy—make "Support →" the primary CTA button and "Audit & Info" a clean text link or icon trigger.
  - **Suggested command**: `$impeccable layout`

- **[P2] Incomplete Modal Accessibility & Dismissal**
  - **Why it matters**: `#project-modal` can only be closed by clicking the small `✕` top-right button. Keyboard users pressing `Esc` or clicking the backdrop overlay remain stuck.
  - **Fix**: Wire up backdrop click handlers, `Escape` key event listeners, and focus restoration to button triggers.
  - **Suggested command**: `$impeccable harden`

- **[P3] Static Progress Bar Entrance**
  - **Why it matters**: Funding progress bars render at full width instantly, missing an opportunity for dynamic scroll-triggered visual feedback.
  - **Fix**: Add CSS/JS scroll animation that fills progress bars from 0% to target width when scrolled into view.
  - **Suggested command**: `$impeccable animate`

#### Persona Red Flags

- **Jordan (First-Timer / New Donor)**: Clicks "Clean Water" filter tab expecting to see only water projects, but all projects remain visible. Confused whether the site is broken or if filters aren't supported.
- **Sam (Accessibility-Dependent User)**: Opens the "Audit & Info" modal using keyboard, but cannot close it with `Escape` key. Focus stays trapped or lost when modal closes.
- **Corporate Foundation Evaluator (Project Persona)**: Tries to quickly distinguish emergency relief projects from long-term infrastructure, but monochromatic tags require reading every title line-by-line.

#### Minor Observations
- Modal dialog layout uses inline CSS styles (`style="margin-top: 0.35rem;"`) instead of dedicated CSS classes in `global.css`.
- Progress percentage text `(88%)` is tiny micro text; combining it with remaining funding goal (e.g. `$6,000 needed`) would increase donation motivation.

#### Questions to Consider
- *What if category filtering used smooth layout transitions and displayed live project counts (e.g., "Clean Water (1)") on each tab?*
- *Should "Audit & Info" open a comprehensive audit drawer/modal with verifiable PDF download links and photo evidence?*
- *Would color-coded progress bars and category badges make the project grid 2x faster to scan for donors?*
