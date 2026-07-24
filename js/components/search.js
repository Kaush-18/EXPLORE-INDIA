import { indiaStates } from "../data/india-states.js";
import { selectState } from "../sections/explore-india.js";

/* ============================================================
   Highlight Matching Text
============================================================ */

function highlightMatch(text, query) {
  if (!query) return text;

  const index = text.toLowerCase().indexOf(query.toLowerCase());

  if (index === -1) return text;

  return (
    text.substring(0, index) +
    "<mark>" +
    text.substring(index, index + query.length) +
    "</mark>" +
    text.substring(index + query.length)
  );
}

/* ============================================================
   Recent Searches
============================================================ */

const RECENT_SEARCH_KEY = "explore-india-recent-searches";

function getRecentSearches() {
  return JSON.parse(localStorage.getItem(RECENT_SEARCH_KEY)) || [];
}

function saveRecentSearch(state) {
  let searches = getRecentSearches();

  searches = searches.filter((item) => item.id !== state.id);

  searches.unshift(state);

  searches = searches.slice(0, 5);

  localStorage.setItem(
    RECENT_SEARCH_KEY,
    JSON.stringify(searches)
  );
}

/* ============================================================
   Popular Destinations
============================================================ */

const popularSearches = [
  "Goa",
  "Kerala",
  "Rajasthan",
  "Himachal Pradesh",
  "Jammu & Kashmir",
];

/* ============================================================
   Initialize Search
============================================================ */

export function initSearch() {
  const overlay = document.querySelector("#search-overlay");
  const input = document.querySelector("#global-search");
  const results = document.querySelector("#search-results");

  const openBtn = document.querySelector(".search-toggle");
  const closeBtn = document.querySelector("#close-search");

  if (!overlay || !input || !results) return;

  let activeIndex = -1;
  let currentMatches = [];

  /* ============================================================
     Open Search
  ============================================================ */

  function openSearch() {
    overlay.classList.add("active");
    input.focus();

    // Show recent/popular immediately
    input.dispatchEvent(new Event("input"));
  }

  /* ============================================================
     Close Search
  ============================================================ */

  function closeSearch() {
    overlay.classList.remove("active");

    input.value = "";
    results.innerHTML = "";

    activeIndex = -1;
    currentMatches = [];
  }

  /* ============================================================
     Create Search Card
  ============================================================ */

  function createSearchItem(state, query = "", index = null) {
    const item = document.createElement("button");

    item.className = "search-item";
    item.type = "button";

    if (index !== null) {
      item.dataset.index = index;
    }

    item.innerHTML = `
      <img src="${state.image}" alt="${state.name}">

      <div class="search-info">

        <h4>${
          query
            ? highlightMatch(state.name, query)
            : state.name
        }</h4>

        <p>
          📍 ${
            query
              ? highlightMatch(state.capital, query)
              : state.capital
          }
        </p>

        <small>
          ${
            query
              ? highlightMatch(state.famousFor, query)
              : state.famousFor
          }
        </small>

      </div>
    `;

    item.addEventListener("click", () => {
      saveRecentSearch(state);
      selectState(state);
      closeSearch();
    });

    return item;
  }

  /* ============================================================
     Overlay Events
  ============================================================ */

  openBtn?.addEventListener("click", openSearch);

  closeBtn?.addEventListener("click", closeSearch);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeSearch();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      overlay.classList.contains("active")
    ) {
      closeSearch();
    }
  });
  /* ============================================================
     Live Search
  ============================================================ */

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();

    results.innerHTML = "";
    activeIndex = -1;

    /* ----------------------------
       Empty Search
    ----------------------------- */

    if (!query) {
      currentMatches = [];

      const recent = getRecentSearches();

      if (recent.length) {
        results.innerHTML = `
          <div class="search-section-title">
            🕘 Recent Searches
          </div>
        `;

        recent.forEach((state) => {
          results.appendChild(createSearchItem(state));
        });
      } else {
        results.innerHTML = `
          <div class="search-section-title">
            🔥 Popular Destinations
          </div>
        `;

        popularSearches.forEach((name) => {
          const state = indiaStates.find(
            (s) => s.name === name
          );

          if (state) {
            results.appendChild(createSearchItem(state));
          }
        });
      }

      return;
    }

    /* ----------------------------
       Find Matches
    ----------------------------- */

    const matches = indiaStates.filter((state) => {
      return (
        state.name.toLowerCase().includes(query) ||
        state.capital.toLowerCase().includes(query) ||
        state.famousFor.toLowerCase().includes(query) ||
        state.cuisine.toLowerCase().includes(query)
      );
    });

    currentMatches = matches;

    if (!matches.length) {
      results.innerHTML = `
        <div class="search-empty">
          <h3>No results found 😕</h3>
          <p>Try searching another destination.</p>
        </div>
      `;
      return;
    }

    results.innerHTML = "";

    matches.forEach((state, index) => {
      results.appendChild(
        createSearchItem(state, query, index)
      );
    });
  });

  /* ============================================================
     Keyboard Navigation
  ============================================================ */

  input.addEventListener("keydown", (e) => {
    const items = results.querySelectorAll(".search-item");

    if (!items.length) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        activeIndex = (activeIndex + 1) % items.length;
        break;

      case "ArrowUp":
        e.preventDefault();
        activeIndex =
          (activeIndex - 1 + items.length) % items.length;
        break;

      case "Enter":
        e.preventDefault();

        if (
          activeIndex >= 0 &&
          currentMatches[activeIndex]
        ) {
          saveRecentSearch(
            currentMatches[activeIndex]
          );

          selectState(currentMatches[activeIndex]);

          closeSearch();
        }

        return;

      default:
        return;
    }

    items.forEach((item) =>
      item.classList.remove("active")
    );

    const activeItem = items[activeIndex];

    if (activeItem) {
      activeItem.classList.add("active");

      activeItem.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  });

  /* ============================================================
     Auto Show Recent Searches
  ============================================================ */

  input.dispatchEvent(new Event("input"));
}