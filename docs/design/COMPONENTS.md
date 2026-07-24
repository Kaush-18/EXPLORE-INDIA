# Component Catalog

Reference for all reusable UI components in the project. Each component has CSS in `css/components/` and optional JS in `js/components/` or `js/sections/`.

---

## Buttons

**CSS:** `css/components/button.css`

Primary interactive element. Used for CTAs, filter toggles, and navigation actions.

- `.btn` — Base button style
- Variants controlled by modifier classes (primary, outline, etc.)
- Uses `--color-primary` for filled variants
- Hover transition via `--transition-fast`

---

## Cards

**CSS:** `css/components/card.css`

Generic card container with surface background, border radius, and shadow.

- `.card` — Base card with `--radius-md`, `--shadow-sm`
- Hover state elevates to `--shadow-md`
- Used as the foundation for all specialized card types

---

## State Cards

**CSS:** `css/components/state-card.css`

Displays a state in the "Explore by States" grid.

Contents:
- State image (top)
- State name + tagline
- Category icon (heritage, mountains, beaches, etc.)
- Rating (star)
- Best season badge
- Destination count

Rendered dynamically from `statesData` in `js/data/states.js`.

---

## Highlight Cards

**CSS:** `css/components/highcard.css`

Used for featured content (destinations, experiences, travel tips).

Contents:
- Image
- Title
- Description text
- Optional action button

---

## Meta Cards

**CSS:** `css/components/meta-card.css`

Compact info display showing key-value pairs (e.g., budget, climate, festivals).

---

## Info Cards

**CSS:** `css/components/info-card.css`

Static informational cards used in the Featured Destinations, Experiences, and Travel Guide sections.

Contents:
- Icon or image
- Title
- Brief description

---

## Contact Card

**CSS:** `css/components/contact-card.css`

CTA card in the contact section encouraging users to start planning.

---

## Chips

**CSS:** `css/components/chip.css`

Small inline labels used for tags, categories, and filter states.

- Used in the SVG map panel for attractions and cities
- Used as filter indicators

---

## Section Headers

**CSS:** `css/components/section-header.css`

Consistent heading layout for each page section.

Contents:
- Section title
- Subtitle/description
- Optional action link

---

## State Filters

**CSS:** `css/components/state-filters.css`

Horizontal row of filter buttons above the states grid.

- Category buttons: All, Heritage, Mountains, Beaches, Adventure, Spiritual
- Active state highlighting
- Integrates with hero search bar

---

## State Stats

**CSS:** `css/components/state-stats.css`

Counter display showing total states and destinations count.

---

## Empty State

**CSS:** `css/components/empty-state.css`

Displayed when filter/search returns no results.

- Message text
- Optional illustration or icon

---

## Slider

**JS:** `js/utils/slider.js`

Reusable horizontal scroll container used in the Popular Destinations section.

Features:
- Prev/Next arrow buttons
- Mouse drag-to-scroll
- Touch swipe support
- Keyboard navigation (ArrowLeft / ArrowRight)
- Smooth scroll behavior

---

## Modal

**JS:** `js/components/modal.js` (planned)

Will be extracted from the inline video modal logic in `hero.js`.

Features:
- Backdrop overlay with click-to-close
- Escape key to close
- Focus trap
- ARIA attributes for accessibility

---

## Navbar

**JS:** `js/sections/navbar.js`

Sticky navigation header.

Features:
- Scroll-triggered background change
- Mobile hamburger toggle with ARIA
- Scrollspy for active link highlighting
- Smooth scroll to sections

---

## SVG Map Panel

**JS:** `js/sections/explore-india.js`

Interactive India map with a side info panel.

Features:
- SVG state paths loaded via `<object>` tag
- Click to select a state (blue highlight)
- Info panel shows: image, name, capital, attractions, best time, cuisine, description
- Top attractions and popular cities as chips
- Budget, climate, and festival metadata
