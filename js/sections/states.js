import { statesData } from "../data/states.js";

function createStateCard(state) {
  const featuredClass = state.featured ? 'featured' : '';
  
  return `
    <article class="state-card ${featuredClass}" data-category="${state.category}">
      <img src="./assets/images/states/${state.image}" alt="${state.name}" />
      <div class="overlay"></div>
      <div class="floating-label">📍 ${state.places} Destinations</div>

      <div class="state-info">
        <h3>${state.name}</h3>
        <p><i class="${state.icon}"></i>${state.tagline}</p>

        <div class="state-meta">
          <span>⭐ ${state.rating}</span>
          <span>🌤 ${state.season}</span>
          <button class="explore-btn">Explore →</button>
        </div>
      </div>
    </article>
  `;
}

function renderStates(filter = 'all') {
  const grid = document.getElementById('states-grid');
  
  if (!grid) return;

  const query = filter.toString().toLowerCase().trim();

  let filtered = statesData;
  if (query && query !== 'all') {
    filtered = statesData.filter(state => 
      state.category.toLowerCase() === query ||
      state.name.toLowerCase().includes(query) ||
      state.tagline.toLowerCase().includes(query)
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results-message">
        <i class="ri-search-line" style="font-size: 2.5rem; color: #60a5fa; margin-bottom: 12px;"></i>
        <h3 style="color: #fff; margin-bottom: 8px;">No matching states found</h3>
        <p>Try searching for a different state or category.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(createStateCard).join('');
}

function initStateFilters() {
  const filterButtons = document.querySelectorAll('.state-filters button');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter cards
      const filter = button.dataset.filter;
      renderStates(filter);
    });
  });
}

function updateStats() {
  const statesCountEl = document.getElementById('states-count');
  const destinationsCountEl = document.getElementById('destinations-count');

  if (!statesCountEl || !destinationsCountEl) return;

  // Calculate total number of states from the data
  const totalStates = statesData.length;

  // Calculate total number of destinations
  const totalDestinations = statesData.reduce((sum, state) => sum + state.places, 0);

  statesCountEl.textContent = totalStates;
  destinationsCountEl.textContent = `${totalDestinations}+`;
}

/**
 * Handles clicks on the states grid using event delegation.
 * Specifically listens for clicks on the 'Explore' button within a card.
 */
function initStateCardInteraction() {
  const grid = document.getElementById('states-grid');
  if (!grid) return;

  grid.addEventListener('click', (event) => {
    const exploreButton = event.target.closest('.explore-btn');
    if (exploreButton) {
      document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

export function initStatesSection() {
  updateStats();
  renderStates();
  initStateFilters();
  initStateCardInteraction();

  document.addEventListener('renderStates', (event) => renderStates(event.detail.query));
}
