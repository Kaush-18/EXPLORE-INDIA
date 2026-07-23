# Contributing to Explore India

Thanks for your interest in contributing! This guide will help you get up and running.

---

## Prerequisites

- A modern browser (Chrome, Firefox, Edge, Safari)
- A code editor (VS Code recommended)
- Git
- No build tools or package managers required — this is a vanilla HTML/CSS/JS project

---

## Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/<your-username>/explore-india.git
   cd explore-india
   ```
3. **Open** `index.html` in your browser — no server needed
4. **Create a branch** for your work:
   ```bash
   git checkout -b feature/your-feature-name
   ```

---

## Project Structure

```
.
├── index.html                 # Single-page entry point
├── assets/
│   ├── images/                # Photos organized by section
│   │   ├── hero/
│   │   ├── states/
│   │   └── destinations/
│   └── svg/                   # SVG assets (india-map.svg)
├── css/
│   ├── style.css              # Master stylesheet (imports all others)
│   ├── utilities.css          # Utility classes
│   ├── base/                  # Variables, reset, typography
│   ├── layout/                # Container, grid, section
│   ├── components/            # Reusable UI components
│   └── sections/              # Section-specific styles
├── js/
│   ├── main.js                # Entry point (ES Module)
│   ├── data/                  # Static data arrays
│   ├── sections/              # Section behavior modules
│   ├── components/            # Reusable JS components
│   └── utils/                 # Helpers (slider, etc.)
└── docs/                      # Documentation
```

---

## Development Guidelines

### HTML

- Use semantic HTML5 elements (`<nav>`, `<section>`, `<article>`, etc.)
- Keep ARIA attributes on interactive elements (modals, menus, toggles)
- All page content lives in `index.html`

### CSS

- Follow the existing modular structure — one file per component or section
- Use CSS custom properties from `variables.css` for colors, spacing, typography, shadows, and motion
- Write mobile-first media queries
- Class naming: use descriptive BEM-style names (e.g., `.hero__search-bar`, `.state-card--active`)
- Import new files in `css/style.css`

### JavaScript

- Use ES Modules (`import`/`export`) — all JS files are loaded via `type="module"`
- Keep section logic in `js/sections/` and reusable pieces in `js/components/`
- Add data to `js/data/` files, not hardcoded in section modules
- Use JSDoc-style comments for function documentation
- Prefer `const` over `let`; avoid `var`
- Use `DOMContentLoaded` or module-level init for setup

### Data

- State data lives in `js/data/states.js` (featured states) and `js/data/india-states.js` (map states)
- Destination data lives in `js/data/destinations.js`
- When adding a new state, include: name, tagline, image, category, rating, best season, destinations count, and a brief description
- When adding a new destination, include: name, city, state, image, rating, and price

---

## Making Changes

1. **Pick an issue** from the roadmap or open one to propose your idea
2. **Keep changes focused** — one feature or fix per pull request
3. **Test across viewports** — desktop (1200px+), tablet (~768px), mobile (~375px)
4. **Test both themes** — toggle dark mode and verify your changes look correct
5. **Check the console** — no errors or warnings
6. **Follow the existing patterns** — look at similar files for style and structure

---

## Commit Messages

Use clear, descriptive commit messages:

```
Add category filter to states section
Fix mobile menu not closing on link click
Complete Rajasthan data in india-states.js
```

---

## Pull Requests

1. Update your branch with the latest `main`:
   ```bash
   git fetch origin
   git rebase origin/main
   ```
2. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
3. Open a pull request with:
   - A clear title describing the change
   - Screenshots or GIFs for visual changes
   - Reference any related issues (e.g., "Closes #12")

---

## What to Work On

The highest-impact areas right now:

| Priority | Area | Details |
|----------|------|---------|
| High | Data completeness | Expand `india-states.js` to all 28 states + 8 UTs |
| High | Data completeness | Expand `statesData` in `states.js` beyond 6 states |
| Medium | Component extraction | Move video modal logic into `js/components/modal.js` |
| Medium | Images | Add real photos for all states and destinations |
| Low | Animations | Add scroll-reveal effects with Intersection Observer |
| Low | Accessibility | Audit keyboard nav and screen reader support |

See [ROADMAP.md](./ROADMAP.md) for the full plan.

---

## Code of Conduct

Be respectful, constructive, and inclusive. We're building something to celebrate the diversity of India — let's reflect that in how we work together.

---

## Questions?

Open an issue with the `question` label or start a discussion on GitHub.
