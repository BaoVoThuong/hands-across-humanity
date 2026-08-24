---
name: Hands Across Humanity
description: Modern commercial humanitarian non-profit platform with high trust, radical transparency, and documentary authenticity.
colors:
  paper: "#FAF8F5"
  surface: "#FFFFFF"
  surface-alt: "#F4EFE6"
  surface-hover: "#EFE8DD"
  slate-900: "#0F172A"
  slate-800: "#1E293B"
  slate-700: "#334155"
  slate-600: "#475569"
  slate-500: "#64748B"
  slate-100: "#F1F5F9"
  primary: "#C84B2C"
  primary-hover: "#B03E22"
  primary-light: "#FDF4F0"
  emerald: "#059669"
  emerald-hover: "#047857"
  emerald-light: "#ECFDF5"
  emerald-border: "#A7F3D0"
  border: "#E2E8F0"
  border-warm: "#E6DFD5"
  border-strong: "#CBD5E1"
typography:
  display:
    fontFamily: "'Newsreader Variable', 'Newsreader', Georgia, serif"
    fontSize: "clamp(2.15rem, 1.5rem + 2.2vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Newsreader Variable', 'Newsreader', Georgia, serif"
    fontSize: "clamp(1.5rem, 1.25rem + 1.2vw, 2.35rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: "'Newsreader Variable', 'Newsreader', Georgia, serif"
    fontSize: "clamp(1.15rem, 1.02rem + 0.4vw, 1.45rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.018em"
  body:
    fontFamily: "'Public Sans Variable', 'Public Sans', system-ui, sans-serif"
    fontSize: "clamp(0.95rem, 0.92rem + 0.1vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'Public Sans Variable', 'Public Sans', system-ui, sans-serif"
    fontSize: "clamp(0.72rem, 0.7rem + 0.06vw, 0.78125rem)"
    fontWeight: 700
    letterSpacing: "0.08em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "20px"
  xl: "28px"
  full: "9999px"
spacing:
  xs: "0.4rem"
  sm: "0.875rem"
  md: "1.25rem"
  lg: "2.25rem"
  xl: "3.25rem"
  xxl: "4.5rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.slate-800}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.25rem"
  card-project:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.slate-800}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
---

# Design System: Hands Across Humanity

## Overview

**Creative North Star: "The Open Field Ledger"**

Hands Across Humanity combines documentary authenticity with enterprise-grade commercial non-profit authority. The design system rejects generic, emotional non-profit templates in favor of radical field transparency, warm tactile materials, and precise financial clarity.

Surfaces feel grounded, human, and meticulously constructed. The visual hierarchy leads visitors effortlessly from high-impact storytelling into verified metric proofs and frictionless donor action.

**Key Characteristics:**
- **Warm Editorial Tone:** Warm alabaster (`#FAF8F5`) and cream sand backgrounds paired with editorial serif typography (`Newsreader`).
- **High-Trust Action Accents:** Vibrant Terracotta Ember (`#C84B2C`) for direct action paired with Emerald Green (`#059669`) for verified impact metrics.
- **Tactile Card Architecture:** Crisp white elevated cards (`#FFFFFF`) with 12px rounded corners, precise micro-borders, interactive image carousels, and smooth lift states.
- **Radical Transparency Layouts:** Dual-action cards featuring prominent progress bars, audit partner attestations, and instant detail modal dialogs.

## Colors

The palette balances warm organic sand tones with authoritative slate ink and high-contrast impact accents.

### Primary
- **Terracotta Ember** (`#C84B2C` / `var(--primary)`): Used for primary action buttons, active navigation indicators, and key converted states. Expresses warmth, urgency, and direct field action.

### Secondary
- **Trust Emerald** (`#059669` / `var(--emerald)`): Used for metric verification badges, funding status indicators, and audit partner proof elements. Expresses growth, integrity, and operational success.

### Neutral
- **Paper Ground** (`#FAF8F5` / `var(--paper)`): Warm alabaster canvas for light mode page background.
- **Surface White** (`#FFFFFF` / `var(--surface)`): Crisp background for cards, modals, and interactive inputs.
- **Warm Cream Surface** (`#F4EFE6` / `var(--surface-alt)`): Alternate section background providing structural visual rhythm across long pages.
- **Midnight Slate** (`#0F172A` / `var(--slate-900)`): Deep high-contrast tone for primary display headings, dark cards, and footer containers.
- **Body Slate** (`#1E293B` / `var(--slate-800)`): Primary readable body text color.
- **Muted Slate** (`#475569` / `var(--slate-600)`): Supporting text color for kickers, metadata, subtitles, and captions.
- **Warm Hairline Border** (`#E6DFD5` / `var(--border-warm)`): Subtle warm divider for card headers and section rules.

### Named Rules
**The Terracotta Focus Rule.** Primary Terracotta Ember (`#C84B2C`) is reserved exclusively for interactive calls to action and primary focal points. It never covers more than 10% of any screen viewport.

**The Emerald Proof Rule.** Emerald (`#059669`) is strictly bound to factual outcomes, verified metrics, audit badges, and completed goal indicators.

## Typography

**Display Font:** `Newsreader Variable` (with `Georgia, serif` fallbacks)
**Body Font:** `Public Sans Variable` (with `system-ui, sans-serif` fallbacks)

**Character:** An authoritative serif and sans-serif pairing combining classical editorial storytelling with clean modern web interface scanability.

### Hierarchy
- **Display** (weight `600`, size `clamp(2.15rem, 1.5rem + 2.2vw, 3.75rem)`, line-height `1.08`, tracking `-0.03em`): Main hero statements and emotional campaign hooks.
- **Headline / H2** (weight `600`, size `clamp(1.5rem, 1.25rem + 1.2vw, 2.35rem)`, line-height `1.12`, tracking `-0.025em`): Section headings such as "Current Projects Seeking Support".
- **Title / H3** (weight `600`, size `clamp(1.15rem, 1.02rem + 0.4vw, 1.45rem)`, line-height `1.25`, tracking `-0.018em`): Project card titles and modal headers.
- **Body** (weight `400`, size `clamp(0.95rem, 0.92rem + 0.1vw, 1.0625rem)`, line-height `1.65`): Descriptive project paragraphs and narrative copy (max line length 65–75ch).
- **Label / Kicker** (weight `700`, size `clamp(0.72rem, 0.7rem + 0.06vw, 0.78125rem)`, uppercase, tracking `0.08em`): Category tags, section kickers, and pill badges.

### Named Rules
**The Optical Serif Rule.** All headings (`h1`-`h3`) use `Newsreader Variable` with explicit `font-variation-settings: 'opsz' 36` to ensure optimal contrast and stroke proportion at optical sizes.

## Layout

The system uses a flexible 12-column grid within a max-width container (`72rem` / `1152px`), supported by narrow (`50rem`) and wide (`82rem`) layout variants.

- **Section Padding:** Responsive vertical spacing scaling from `3.25rem` (`var(--space-8)`) on mobile to `4.5rem` (`var(--space-9)`) on desktop.
- **Card Grid Rhythm:** 3-column desktop layout (`repeat(3, 1fr)`) with `1.75rem` gap, switching to 2 columns on tablet (`768px`) and single column on mobile (`<640px`).
- **Interactive Pagination:** Smooth JavaScript page batching (3 cards per page view) with synchronous CSS grid transition handling to eliminate layout reflow jitter.

## Elevation & Depth

Surfaces use subtle, layered shadow depth paired with crisp border definitions to maintain high contrast and tactile clarity.

### Shadow Vocabulary
- **Card Rest State** (`box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.08)`): Subtle ambient lift grounding cards on sand backgrounds.
- **Card Hover State** (`box-shadow: 0 20px 40px -4px rgba(15, 23, 42, 0.12)`): Expanded structural shadow activated during card focus/hover with `translateY(-5px)`.
- **Glass Floating Navigation** (`backdrop-filter: blur(16px)`, `background: rgba(250, 248, 245, 0.88)`): Translucent floating header pinned at top.

### Named Rules
**The Responsive Lift Rule.** Elevation shadows intensify only on interactive cards and elevated modals upon hover or focus state. Static containers remain flat with warm hairline borders.

## Shapes

- **Corner Radius Scale:**
  - `sm` (`6px`): Buttons, pill tags, category badges, progress tracks.
  - `md` (`12px`): Project cards, feature blocks, modal containers, media frames.
  - `lg` / `xl` (`20px` - `28px`): Hero containers and major section callouts.
  - `full` (`9999px`): Category filter buttons, rounded CTA pills, pagination dots.
- **Borders:** Thin `1px` continuous solid borders (`var(--border-warm)` or `var(--border)`) framing cards, image carousels, and tab bars.

## Components

### Project Cards ("Current Projects Seeking Support" Reference Pattern)
- **Shape:** `12px` rounded corners (`var(--radius-md)`), 1px warm border, white surface fill (`#FFFFFF`).
- **Media Header:** Aspect-ratio `16/10` multi-photo carousel with inline SVG arrow controls and active slide dot indicators.
- **Category Badge:** Monospaced uppercase text, warm sand background (`var(--paper)`), dark text (`var(--slate-800)`), rounded `4px` tag.
- **Location Indicator:** Inline location marker icon paired with location string.
- **Title & Impact Summary:** Serif `h3` heading paired with clear quantitative impact description.
- **Progress Track:** `6px` track with high-contrast filled progress bar (`var(--primary)` or `var(--emerald)` for 90%+ goals) animating width on scroll intersection.
- **Dual Action Button Row:**
  - **Primary CTA ("Support →"):** Pill button, Terracotta Ember background, white text, smooth scale on hover.
  - **Secondary CTA ("Audit & Info"):** Ghost pill button, outline hairline, dark slate text opening modal dialog.

### Filter Tabs
- **Shape:** Full pill shape (`9999px` radius).
- **Default State:** Transparent background, muted slate text (`var(--slate-600)`), subtle hover background (`var(--surface-hover)`).
- **Active State:** Dark midnight slate background (`var(--slate-900)`), crisp white text (`#FFFFFF`), shadow lift.

### Modal Dialog ("Audit & Transparency Inspector")
- **Background:** Crisp white surface (`#FFFFFF`) framed by semi-transparent dark backdrop overlay (`rgba(15, 23, 42, 0.6)` with backdrop blur).
- **Header:** Sticky modal bar with project title, audit partner verification badge, and circular close button.

### Hero Section Field Dispatch Carousel
- **Structure:** 5-slide interactive showcase (`hero-connection.png`, `essay-03-water-tank.png`, `essay-04-roofing-sheets.png`, `essay-07-cooperative.png`, `work-schools-learning.png`).
- **Progress Track:** Clean 3px Terracotta Ember progress bar (`#E05A36`) animating smoothly from 0% to 100% over 5 seconds (`5000ms`) without artificial neon glow box-shadows.
- **Hover Arrow Controls:** Glassmorphism circle buttons (`rgba(15, 23, 42, 0.75)` with `backdrop-filter: blur(8px)`) that transition in on container hover with Terracotta Ember hover state (`#C84B2C`).
- **Pagination & Counter:** Floating translucent dot pill indicator with active Terracotta indicator (`#E05A36`) paired with monospaced counter badge (`1 / 5`).
- **Interactive Logic:** Auto-advances every 5s; pauses on hover (`mouseenter`/`mouseleave`); resets timer on prev/next/dot click; supports `ArrowLeft`/`ArrowRight` keyboard navigation.

## Do's and Don'ts

### Do:
- **Do** maintain strict color role separation: Terracotta Ember for actions, Emerald for metrics/proofs, Slate for text.
- **Do** use responsive type scales (`clamp()`) and `font-variation-settings: 'opsz'` for variable serif headings.
- **Do** pair project cards with real field photographs, location indicators, and explicit audit partner names.
- **Do** lock image caption dimensions using `min-height` (`82px`) and `min-height: 2.6rem` on caption text to prevent Cumulative Layout Shift (CLS) during carousel transitions.
- **Do** anchor top-level hero sections with `justify-content: flex-start` to avoid vertical re-centering jitter under sticky headers.

### Don't:
- **Don't** use pure stark black (`#000000`) for text or backgrounds; always use Midnight Slate (`#0F172A`) or Body Slate (`#1E293B`).
- **Don't** add `tabindex="0"` to outer carousel containers or layout frames; mouse clicks trigger native focus `scrollIntoView`, causing annoying header jump.
- **Don't** place generic non-profit placeholder icons; use documentary imagery and verified field data.
- **Don't** overcrowd card layouts; maintain generous internal padding (`1.5rem`) and clear spatial separation between image, metadata, progress, and CTAs.
- **Don't** break pagination grid bounds during filtering; hide out-of-filter cards smoothly using CSS transitions.
