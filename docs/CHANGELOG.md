# Changelog

All notable changes to **Explore India** are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [Unreleased]

### Added
- Dark/light theme toggle with localStorage persistence (`explore-india-theme`)
- Sticky navbar with scroll-triggered background change
- Mobile hamburger menu with ARIA attributes
- Scrollspy for active navigation link highlighting
- Hero section with animated floating elements (clouds, airplane, sparkle)
- Hero search bar with state filtering integration
- Video modal for YouTube embed with backdrop close and Escape key support
- Stats counters in hero section (28+ States, 500+ Destinations, 1000+ Experiences)
- States card grid with dynamic rendering from data
- Category filter buttons (All, Heritage, Mountains, Beaches, Adventure, Spiritual)
- Empty state display when no filter results match
- Popular destinations horizontal slider with drag-to-scroll and keyboard navigation
- Interactive SVG map of India with clickable states
- State info panel showing capital, attractions, cuisine, climate, and festivals
- Featured destinations static cards (Jaipur, Goa, Kerala)
- Experiences section (Luxury Train Journeys, Wildlife Safaris)
- Travel guide section (Best Time to Visit, Stay Connected, Respect Local Culture)
- Contact/CTA section for trip planning
- Modular CSS architecture with CSS custom properties
- Full dark theme support across all components
- Responsive design with mobile-first approach

### Incomplete
- `india-states.js` data file — only 3 states defined (Delhi, Goa, Rajasthan), many fields use `"..."` placeholders
- `statesData` — only 6 states while hero section advertises "28+ States"
- `js/components/modal.js` — empty file, modal logic lives inline in `hero.js`
- `js/app.js` — unused, contains only a console.log
- `docs/screenshots/` — directory exists but is empty

---

## [0.1.0] — 2025

### Added
- Initial project scaffolding
- Folder structure (assets, css, js, docs)
- Basic HTML structure for single-page layout
- CSS reset and base typography
- Color system and design tokens in `variables.css`
