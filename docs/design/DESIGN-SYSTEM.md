# Design System

Visual language and design tokens for **Explore India**. All values live in `css/base/variables.css`.

---

## Color Palette

### Brand

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#2563eb` | Buttons, links, active states, map highlights |
| `--color-primary-hover` | `#1d4ed8` | Button/link hover state |
| `--color-success` | `#22c55e` | Positive indicators, ratings |
| `--color-warning` | `#f59e0b` | Caution states, price tags |
| `--color-danger` | `#ef4444` | Errors, destructive actions |

### Neutral

| Token | Value | Usage |
|-------|-------|-------|
| `--color-white` | `#ffffff` | Base white (unchanged across themes) |
| `--color-black` | `#0f172a` | Base dark (unchanged across themes) |

### Light Theme

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#ffffff` | Page background |
| `--color-surface` | `#f8fafc` | Card backgrounds, secondary surfaces |
| `--color-surface-light` | `#f1f5f9` | Subtle backgrounds, hover states |
| `--color-card` | `var(--color-surface)` | Card default |
| `--color-card-hover` | `#e2e8f0` | Card hover |
| `--color-text` | `#0f172a` | Primary text |
| `--color-text-muted` | `#64748b` | Secondary text, labels |
| `--color-border` | `rgba(15,23,42,0.08)` | Borders, dividers |
| `--color-overlay` | `rgba(15,23,42,0.75)` | Modal backdrops |

### Dark Theme

Activates via `.dark-mode` class on `<body>`.

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#0f172a` | Page background |
| `--color-surface` | `#1e293b` | Card backgrounds |
| `--color-surface-light` | `#334155` | Subtle backgrounds |
| `--color-card-hover` | `#273449` | Card hover |
| `--color-text` | `#f8fafc` | Primary text |
| `--color-text-muted` | `#cbd5e1` | Secondary text |
| `--color-border` | `rgba(255,255,255,0.12)` | Borders |
| `--color-overlay` | `rgba(15,23,42,0.85)` | Modal backdrops |

---

## Typography

### Font Families

| Token | Stack | Usage |
|-------|-------|-------|
| `--font-family` | Inter, system-ui, sans-serif | Body text, UI elements |
| `--font-heading` | Playfair Display, Georgia, serif | Headings, display text |

### Font Sizes

| Token | Value | Typical Use |
|-------|-------|-------------|
| `--fs-xs` | `0.75rem` (12px) | Badges, fine print |
| `--fs-sm` | `0.875rem` (14px) | Captions, labels |
| `--fs-base` | `1rem` (16px) | Body text |
| `--fs-lg` | `1.125rem` (18px) | Lead paragraphs |
| `--fs-xl` | `1.25rem` (20px) | Small headings |
| `--fs-2xl` | `clamp(1.35rem, 2vw, 1.6rem)` | Section subheadings |
| `--fs-3xl` | `clamp(1.8rem, 4vw, 2.4rem)` | Section headings |
| `--fs-4xl` | `clamp(2.6rem, 6vw, 4rem)` | Hero/display text |

### Font Weights

| Token | Value |
|-------|-------|
| `--fw-regular` | 400 |
| `--fw-medium` | 500 |
| `--fw-semibold` | 600 |
| `--fw-bold` | 700 |
| `--fw-extrabold` | 800 |

---

## Spacing Scale

| Token | Value |
|-------|-------|
| `--space-1` | `0.25rem` (4px) |
| `--space-2` | `0.5rem` (8px) |
| `--space-3` | `0.75rem` (12px) |
| `--space-4` | `1rem` (16px) |
| `--space-5` | `1.5rem` (24px) |
| `--space-6` | `2rem` (32px) |
| `--space-7` | `3rem` (48px) |
| `--space-8` | `4rem` (64px) |
| `--space-9` | `5rem` (80px) |
| `--space-10` | `6rem` (96px) |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `0.75rem` | Small elements (chips, badges) |
| `--radius-md` | `1rem` | Cards, inputs |
| `--radius-lg` | `1.5rem` | Large cards, modals |
| `--radius-xl` | `2rem` | Hero sections, feature cards |
| `--radius-full` | `999px` | Pills, circular elements |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-xs` | `0 2px 6px rgba(0,0,0,0.05)` | Subtle lift (chips, small cards) |
| `--shadow-sm` | `0 4px 10px rgba(0,0,0,0.08)` | Cards at rest |
| `--shadow-md` | `0 10px 30px rgba(0,0,0,0.12)` | Cards on hover, dropdowns |
| `--shadow-lg` | `0 20px 50px rgba(0,0,0,0.18)` | Modals, popovers |
| `--shadow-xl` | `0 30px 70px rgba(0,0,0,0.25)` | Hero floating elements |

Dark theme automatically deepens all shadow values.

---

## Motion

### Durations

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | `0.2s` | Hover states, toggles |
| `--duration-normal` | `0.35s` | Transitions, reveals |
| `--duration-slow` | `0.5s` | Page-level transitions |

### Easing

| Token | Value | Usage |
|-------|-------|-------|
| `--ease-standard` | `ease` | General purpose |
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Entrances, reveals |

### Shorthand

| Token | Value |
|-------|-------|
| `--transition-fast` | `var(--duration-fast) var(--ease-standard)` |
| `--transition-normal` | `var(--duration-normal) var(--ease-standard)` |
| `--transition-slow` | `var(--duration-slow) var(--ease-standard)` |

---

## Layout

| Token | Value |
|-------|-------|
| `--container-width` | `1200px` |

The main container centers content with a max-width of 1200px. Sections use consistent horizontal padding.

---

## Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--z-base` | 1 | Default stacking |
| `--z-navbar` | 1000 | Sticky header |
| `--z-dropdown` | 1100 | Dropdown menus |
| `--z-modal` | 1200 | Modal dialogs |
| `--z-toast` | 1300 | Toast notifications |
| `--z-tooltip` | 1400 | Tooltips |

---

## Breakpoints

Defined in media queries (not custom properties):

| Name | Width | Target |
|------|-------|--------|
| Mobile | < 768px | Phones |
| Tablet | 768px - 1024px | Tablets, small laptops |
| Desktop | > 1024px | Desktops, large screens |

---

## Design Principles

1. **Celebrate India** — Warm, vibrant, inviting. The design should feel like a journey, not a dashboard.
2. **Content-first** — Let images and copy breathe. Generous whitespace, clear hierarchy.
3. **Accessible by default** — Sufficient contrast ratios, semantic HTML, keyboard navigable.
4. **Theme-aware** — Every component must work in both light and dark mode.
5. **Mobile-first** — Design for the smallest screen, then enhance for larger viewports.
