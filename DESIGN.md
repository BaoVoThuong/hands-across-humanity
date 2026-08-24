# Design System — Hands Across Humanity

<!-- impeccable:design-schema 1 -->

## Design Philosophy & Tone

Commercial, High-Trust, Modern Non-Profit, Clean & Elevated.
Hands Across Humanity combines documentary authenticity with enterprise-grade commercial non-profit authority. The design prioritizes visual hierarchy, financial transparency, real field metrics, and interactive donor engagement.

## Color Palette

- **Ground & Backgrounds**:
  - Main Ground (`--paper`): `#FAF8F5` (Warm alabaster / sand)
  - Card & Surface (`--surface`): `#FFFFFF` (Crisp white)
  - Section Alt Surface (`--surface-alt`): `#F4EFE6` (Warm cream sand)
  - Dark Accent Surface (`--slate-900`): `#0F172A` (Deep midnight slate)

- **Primary Action Colors**:
  - Primary CTA (`--primary`): `#C84B2C` (Warm Terracotta / Ember)
  - Primary Hover (`--primary-hover`): `#B03E22`
  - Emerald Trust Accent (`--emerald`): `#059669` (Impact & verification green)
  - Emerald Light (`--emerald-light`): `#ECFDF5`

- **Borders & Dividers**:
  - Standard Border (`--border`): `#E2E8F0`
  - Warm Hairline (`--border-warm`): `#E6DFD5`

## Typography

- **Headings & Display**:
  - Font Family: `'Newsreader Variable', Georgia, serif`
  - Font Variations: `opsz 36-44`, weight `600`, letter-spacing `-0.024em`
  - Text Wrap: `balance`

- **Body & Controls**:
  - Font Family: `'Public Sans Variable', system-ui, sans-serif`
  - Weight: `400` (body), `600-700` (buttons, labels, badges)
  - Text Wrap: `pretty`

## Components & Visual Patterns

1. **Sticky Glass Navigation Bar**:
   - `background: rgba(250, 248, 245, 0.88)` with `backdrop-filter: blur(16px)`
   - Scroll progress indicator line (`scaleX(var(--progress))`)

2. **Impact Cards & Project Grid**:
   - Elevated cards with 12px corner radii, subtle shadow (`0 4px 16px -2px rgba(15, 23, 42, 0.08)`), and funding progress bars.
   - Smooth hover translation (`translateY(-5px)`).

3. **Interactive Impact Calculator**:
   - Preset amount buttons ($25, $50, $100, $250, $500) paired with frequency toggle (Monthly vs One-Time).
   - Real-time impact output panel explaining direct community outcomes.

4. **Trust Badges & Status Indicators**:
   - Pill badges (`.badge`) with status dots, high contrast text, and subtle borders.
