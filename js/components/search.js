import { indiaStates } from "../data/india-states.js";
import { selectState } from "../sections/explore-india.js";

export function initSearch() {
  const overlay = document.querySelector("#search-overlay");
  const input = document.querySelector("#global-search");
  const results = document.querySelector("#search-results");

  const openBtn = document.querySelector(".search-toggle");
  const closeBtn = document.querySelector("#close-search");

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

    if (matches.length === 0) {
      results.innerHTML = `
        <div class="search-empty">
          No results found.
        </div>
      `;
      return;
    }

    matches.forEach((state) => {
      const item = document.createElement("button");

      item.className = "search-item";

      item.innerHTML = `
        <img src="${state.image}" alt="${state.name}">
        <div>
          <h4>${state.name}</h4>
          <p>${state.capital}</p>
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