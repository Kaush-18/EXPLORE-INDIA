import { indiaStates } from "../data/india-states.js";
const toggle = document.querySelector(".search-toggle");
const container = document.querySelector(".search-container");
const closeBtn = document.querySelector(".search-close");

toggle?.addEventListener("click", () => {
  container.classList.add("active");
  input.focus();
});

closeBtn?.addEventListener("click", () => {
  container.classList.remove("active");
  input.value = "";
  results.innerHTML = "";
  results.classList.remove("show");
});

export function initSearch() {
  const input = document.querySelector("#global-search");
  const results = document.querySelector("#search-results");

  if (!input || !results) return;

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();

    results.innerHTML = "";

    if (!query) {
      results.classList.remove("show");
      return;
    }

    const matches = indiaStates.filter((state) => {
      return (
        state.name.toLowerCase().includes(query) ||
        state.capital.toLowerCase().includes(query) ||
        state.famousFor.toLowerCase().includes(query) ||
        state.cuisine.toLowerCase().includes(query)
      );
    });

    if (!matches.length) {
      results.innerHTML = `
        <div class="search-empty">
            No matching destination found.
        </div>
      `;

      results.classList.add("show");
      return;
    }

    matches.forEach((state) => {
      results.innerHTML += `
        <button class="search-item" data-state="${state.id}">
            <img src="${state.image}" alt="${state.name}">
            <div>
                <h4>${state.name}</h4>
                <p>${state.capital}</p>
            </div>
        </button>
      `;
    });

    results.classList.add("show");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrapper")) {
      results.classList.remove("show");
    }
  });
}