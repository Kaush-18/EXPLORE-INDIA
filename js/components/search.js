import { indiaStates } from "../data/india-states.js";
import { selectState } from "../sections/explore-india.js";

function highlightMatch(text, query) {
  const index = text.toLowerCase().indexOf(query.toLowerCase());

  if (index === -1) return text;

  return (
    text.substring(0, index) +
    `<mark>` +
    text.substring(index, index + query.length) +
    `</mark>` +
    text.substring(index + query.length)
  );
}

export function initSearch() {
  const overlay = document.querySelector("#search-overlay");
  const input = document.querySelector("#global-search");
  const results = document.querySelector("#search-results");

  const openBtn = document.querySelector(".search-toggle");
  const closeBtn = document.querySelector("#close-search");
  let activeIndex = -1;
  let currentMatches = [];

  if (!overlay || !input || !results) return;

  // -----------------------------
  // Open Search
  // -----------------------------
  openBtn?.addEventListener("click", () => {
    overlay.classList.add("active");
    input.focus();
  });

  // -----------------------------
  // Close Search
  // -----------------------------
  function closeSearch() {
    overlay.classList.remove("active");
    input.value = "";
    results.innerHTML = "";
  }
  input.addEventListener("keydown", (e) => {

    const items = results.querySelectorAll(".search-item");

    if (!items.length) return;

    if (e.key === "ArrowDown") {

        e.preventDefault();

        activeIndex = (activeIndex + 1) % items.length;

    }

    else if (e.key === "ArrowUp") {

        e.preventDefault();

        activeIndex = (activeIndex - 1 + items.length) % items.length;

    }

    else if (e.key === "Enter") {

        e.preventDefault();

        if (activeIndex >= 0) {

            selectState(currentMatches[activeIndex]);

            closeSearch();

        }

        return;

    }

    items.forEach(item => item.classList.remove("active"));

    items[activeIndex]?.classList.add("active");

    items[activeIndex]?.scrollIntoView({

        block:"nearest",

        behavior:"smooth"

    });

});

  closeBtn?.addEventListener("click", closeSearch);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeSearch();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSearch();
    }
  });

  // -----------------------------
  // Live Search
  // -----------------------------
  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();

    results.innerHTML = "";

    if (!query) return;

    const matches = indiaStates.filter((state) => {
      return (
        state.name.toLowerCase().includes(query) ||
        state.capital.toLowerCase().includes(query) ||
        state.famousFor.toLowerCase().includes(query) ||
        state.cuisine.toLowerCase().includes(query)
      );
    });
    currentMatches = matches;
    activeIndex = -1;    

    if (matches.length === 0) {
      results.innerHTML = `
        <div class="search-empty">
          No results found.
        </div>
      `;
      return;
    }

    matches.forEach((state, index) => {
        const item = document.createElement("button");
        item.className = "search-item";
        item.type = "button";
        item.dataset.index = index;
      item.innerHTML = `
      <img src="${state.image}" alt="${state.name}">
  
      <div class="search-info">
  
          <h4>${highlightMatch(state.name, query)}</h4>
  
          <p>
              📍 ${highlightMatch(state.capital, query)}
          </p>
  
          <small>
              ${highlightMatch(state.famousFor, query)}
          </small>
  
      </div>
  `;

      item.addEventListener("click", () => {
        selectState(state);
        closeSearch();
      });

      results.appendChild(item);
    });
  });
}