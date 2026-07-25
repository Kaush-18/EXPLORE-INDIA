import { indiaStates } from "../data/india-states.js";
import { selectState } from "../sections/explore-india.js";

/* ============================================================
   Highlight Matching Text
============================================================ */

function highlightMatch(text = "", query = "") {
  if (!query) return text;

  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();

  const index = lowerText.indexOf(lowerQuery);

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
  "Delhi",
];

/* ============================================================
   Safe Helpers
============================================================ */

function getStateName(state) {
  return state.name || state.state || state.destination_name || "";
}

function getCapital(state) {
  return state.capital || "";
}

function getImage(state) {
  const img = state.image || "./assets/images/placeholder.svg";
  if (img === "..." || img === "") return "./assets/images/placeholder.svg";
  return img;
}

function getFamous(state) {
  return state.famousFor || state.famous || "";
}

function getCuisine(state) {
  return state.cuisine || state.food || "";
}

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

  function openSearch() {
    overlay.classList.add("active");
    input.focus();
    input.dispatchEvent(new Event("input"));
  }

  function closeSearch() {
    overlay.classList.remove("active");

    input.value = "";
    results.innerHTML = "";

    activeIndex = -1;
    currentMatches = [];
  }

  function createSearchItem(state, query = "", index = null) {

    const item = document.createElement("button");

    item.className = "search-item";
    item.type = "button";

    if (index !== null) {
      item.dataset.index = index;
    }

    const name = getStateName(state);
    const capital = getCapital(state);
    const famous = getFamous(state);

    item.innerHTML = `
        <img src="${getImage(state)}" alt="${name}">

        <div class="search-info">

            <h4>${query ? highlightMatch(name, query) : name}</h4>

            <p>📍 ${query ? highlightMatch(capital, query) : capital}</p>

            <small>${query ? highlightMatch(famous, query) : famous}</small>

        </div>
    `;

    item.addEventListener("click", () => {
      saveRecentSearch(state);
      selectState(state);
      closeSearch();
    });

    return item;
  }

  openBtn?.addEventListener("click", openSearch);
  closeBtn?.addEventListener("click", closeSearch);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeSearch();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) {
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

    if (!query) {

      currentMatches = [];

      const recent = getRecentSearches();

      if (recent.length) {

        results.innerHTML =
          `<div class="search-section-title">🕘 Recent Searches</div>`;

        recent.forEach((state) => {
          results.appendChild(createSearchItem(state));
        });

      } else {

        results.innerHTML =
          `<div class="search-section-title">🔥 Popular Destinations</div>`;

        popularSearches.forEach((name) => {

          const state = indiaStates.find(
            (s) => getStateName(s) === name
          );

          if (state) {
            results.appendChild(createSearchItem(state));
          }

        });

      }

      return;
    }

    /* ============================================================
       Search
    ============================================================ */

    const matches = indiaStates.filter((state) => {

      const values = [
        getStateName(state),
        getCapital(state),
        getFamous(state),
        getCuisine(state),
      ];

      return values.some((value) =>
        value.toLowerCase().includes(query)
      );

    });

    currentMatches = matches;

    if (!matches.length) {

      results.innerHTML = `
        <div class="search-empty">
            <h3>No results found 😕</h3>
            <p>Try another destination.</p>
        </div>
      `;

      return;
    }

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

          saveRecentSearch(currentMatches[activeIndex]);

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

  input.dispatchEvent(new Event("input"));

}