# Architecture

How **Explore India** is structured and how the pieces fit together.

---

## Overview

Single-page static website. No build tools, no frameworks, no backend. Opens directly in the browser via `index.html`.

```
index.html
  ├── css/style.css          ← imports all other CSS
  └── js/main.js             ← entry point (type="module")
        ├── sections/*.js    ← section behavior
        ├── components/*.js  ← reusable UI (future)
        ├── utils/*.js       ← helpers
        └── data/*.js        ← static data
```

---

## Entry Points

| File | Role |
|------|------|
| `index.html` | Single HTML page — all markup lives here |
| `css/style.css` | Master stylesheet — imports all CSS modules |
| `js/main.js` | JS entry point — imports and initializes all section modules |

---

## Module Graph

```
main.js
├── imports navbar.js         → manages sticky header + scrollspy
├── imports hero.js           → dark mode toggle, search, video modal
├── imports states.js         → renders state cards, handles filtering
├── imports destinations.js   → initializes slider for destination cards
├── imports explore-india.js  → initializes SVG map + info panel
└── imports slider.js         → reusable slider utility (used by destinations)
```

All JS files use native ES Modules (`import`/`export`). No bundler needed — modern browsers handle this natively.

---

## CSS Architecture

```
css/
├── style.css              ← @import all files below
├── utilities.css          ← utility classes
├── base/
│   ├── variables.css      ← design tokens (colors, spacing, type, etc.)
│   ├── reset.css          ← CSS reset/normalize
│   └── typography.css     ← font styles
├── layout/
│   ├── container.css      ← max-width wrapper
│   ├── grid.css           ← grid system
│   └── section.css        ← section spacing
├── components/
│   ├── button.css
│   ├── card.css
│   ├── chip.css
│   ├── section-header.css
│   ├── meta-card.css
│   ├── highlight-card.css
│   ├── state-card.css
│   ├── state-filters.css
│   ├── state-stats.css
│   ├── empty-state.css
│   ├── info-card.css
│   └── contact-card.css
└── sections/
    ├── navbar.css
    ├── hero.css
    ├── states.css
    ├── destinations.css
    └── explore-india.css
```

### Principles

1. **One file per component/section** — easy to find, easy to override
2. **CSS custom properties for all values** — themes swap by reassigning variables
3. **Dark theme** — `.dark-mode` on `<body>` redefines `--color-*` and `--shadow-*` tokens
4. **Mobile-first** — base styles are mobile; media queries enhance for larger screens

---

## Data Flow

```
js/data/*.js  (static arrays)
     ↓
js/sections/*.js  (reads data, renders DOM)
     ↓
index.html  (container elements with IDs)
```

- Data is hardcoded in `js/data/` files (no API calls)
- Section modules import data, create DOM elements, and inject them into container elements in `index.html`
- Cross-section communication uses custom events (e.g., hero search dispatches `renderStates` event)

---

## Theming

1. `variables.css` defines all tokens in `:root`
2. `body.dark-mode` overrides the same tokens with dark values
3. `hero.js` toggles the class and persists to `localStorage` under key `explore-india-theme`
4. All components reference tokens — no hardcoded colors anywhere

---

## Key Interactions

| Feature | Module | Mechanism |
|---------|--------|-----------|
| Dark mode toggle | `hero.js` | Toggles `.dark-mode` on `<body>`, saves to localStorage |
| Search filtering | `hero.js` → `states.js` | Custom event `renderStates` with query detail |
| Category filters | `states.js` | Click handler filters `statesData` array, re-renders cards |
| Destination slider | `destinations.js` + `slider.js` | Horizontal scroll with drag/keyboard/button controls |
| SVG map selection | `explore-india.js` | Click on SVG path → highlights state → populates info panel |
| Mobile menu | `navbar.js` | Toggle `.active` class, ARIA attributes |
| Scrollspy | `navbar.js` | Intersection Observer on sections, updates active nav link |
| Video modal | `hero.js` | Opens/closes overlay with YouTube iframe, Escape/backdrop close |

---

## File Inventory

| Count | Category |
|-------|----------|
| 1 | HTML |
| 18 | CSS |
| 10 | JavaScript |
| 2 | SVG |
| 15+ | Images |
