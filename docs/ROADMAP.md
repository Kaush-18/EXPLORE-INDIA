# Roadmap

A living plan for **Explore India** — what's done, what's next, and where we're heading.

---

## Phase 1 — Foundation (Current)

Core layout, styling system, and basic interactivity.

- [x] Project scaffolding and folder structure
- [x] Modular CSS architecture with custom properties
- [x] Light/dark theme toggle with localStorage persistence
- [x] Responsive sticky navbar with mobile hamburger menu
- [x] Hero section with animated decorative elements
- [x] Video modal (YouTube embed)
- [x] States card grid with category filtering
- [x] Search integration between hero and states section
- [x] Popular destinations horizontal slider (drag, keyboard, buttons)
- [x] Interactive SVG map with state info panel
- [x] Scrollspy for active nav highlighting

---

## Phase 2 — Data & Completeness

Fill in the gaps — more states, more destinations, full map data.

- [ ] Expand `statesData` to cover all 28 states + 8 UTs
- [ ] Complete `india-states.js` with full info for every state (currently only 3)
- [ ] Add more destinations per state (target: 3-5 per state)
- [ ] Flesh out SVG map interactivity — all states clickable with real data
- [ ] Add real images for all states and destinations (replace placeholders)
- [ ] Implement `modal.js` component — extract hero video modal into reusable module

---

## Phase 3 — UX Enhancements

Polish interactions and accessibility.

- [ ] Smooth scroll-reveal animations (Intersection Observer based)
- [ ] Lazy-load images for performance
- [ ] Improve mobile experience (touch gestures, swipe on slider)
- [ ] Keyboard navigation audit — full tab order, focus traps in modals
- [ ] ARIA live regions for dynamic content (filtered states, map panel)
- [ ] Toast/notification component for user feedback
- [ ] Skeleton loading states while images load

---

## Phase 4 — Advanced Features

Make it a real travel companion.

- [ ] Trip planner — let users bookmark states/destinations
- [ ] Itinerary builder — drag-and-drop day-by-day planner
- [ ] Comparison view — compare two states side by side
- [ ] Blog/articles section with travel guides
- [ ] User reviews and ratings system
- [ ] Integration with weather API for real-time climate data
- [ ] Integration with maps API for directions and distances

---

## Phase 5 — Performance & Deployment

Ship it fast, ship it right.

- [ ] Add a build step (Vite or similar) for bundling and minification
- [ ] Service worker for offline support (PWA)
- [ ] Meta tags, Open Graph, and structured data for SEO
- [ ] Lighthouse audit — target 90+ on all categories
- [ ] Automated image optimization pipeline
- [ ] Deploy to GitHub Pages / Netlify / Vercel
- [ ] Custom domain setup

---

## Future Ideas

Features that would be cool but aren't prioritized yet.

- Multi-language support (Hindi, Tamil, Bengali, etc.)
- Currency converter for Indian Rupee
- Festival calendar with dates and event details
- Food trail explorer — state-by-state cuisine deep dive
- Photo gallery with user submissions
- Accessibility mode (high contrast, larger text, screen reader优化)
- Print-friendly itinerary export

---

## How to Contribute

Pick an item from Phase 2 or 3 — those are the highest-impact next steps. See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.
