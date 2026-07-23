// ========================================
// Explore India Section
// ========================================
import { indiaStates } from "../data/india-states.js";
const dom = {};
let selectedStateElement = null;

function cacheDOM() {
    dom.image = document.getElementById("state-image");
    dom.name = document.getElementById("state-name");
    dom.capital = document.getElementById("state-capital");
    dom.famous = document.getElementById("state-famous");
    dom.season = document.getElementById("state-season");
    dom.food = document.getElementById("state-food");
    dom.description = document.getElementById("state-description");
    dom.attractions = document.getElementById("state-attractions");
    dom.cities = document.getElementById("state-cities");
    dom.budget = document.getElementById("state-budget");
    dom.climate = document.getElementById("state-climate");
    dom.festival = document.getElementById("state-festival");
    dom.exploreBtn = document.querySelector(".state-info-panel .explore-btn");
}

export function updateStatePanel(state) {

    if (!dom.image || !dom.name) return;

    dom.image.src = state.image;
    dom.image.alt = state.name;

    dom.name.textContent = state.name;
    dom.capital.textContent = state.capital;
    dom.famous.textContent = state.famousFor;
    dom.season.textContent = state.bestTime;
    dom.food.textContent = state.cuisine;
    dom.description.textContent = state.description;

    if (dom.attractions) {
        dom.attractions.innerHTML = state.topAttractions
            .map(item => `<li class="chip chip-primary">${item}</li>`)
            .join("");
    }
    if (dom.cities) {
        dom.cities.innerHTML = state.popularCities
            .map(city => `<span class="chip chip-surface">${city}</span>`)
            .join("");
    }
    if (dom.budget) {
        dom.budget.textContent = state.budget;
    }
    if (dom.climate) {
        dom.climate.textContent = state.climate;
    }
    if (dom.festival) {
        dom.festival.textContent = state.festival;
    }
}
export function selectState(state) {
    updateStatePanel(state);

    document
        .querySelector(".explore-india")
        ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
}

function attachStateEvents(stateElement, state) {

    stateElement.style.cursor = "pointer";

    stateElement.addEventListener("mouseenter", () => {
        stateElement.style.fill = "#2563eb";
    });

    stateElement.addEventListener("mouseleave", () => {
        if (stateElement !== selectedStateElement) {
            stateElement.style.fill = "";
        }
    });

    stateElement.addEventListener("mousedown", (event) => {
        event.preventDefault();

        if (selectedStateElement && selectedStateElement !== stateElement) {
            selectedStateElement.style.fill = "";
        }

        selectedStateElement = stateElement;
        stateElement.style.fill = "#2563eb";

        selectState(state);
    });

}

export function initExploreIndia() {

    const mapObject = document.getElementById("india-map");

    cacheDOM();

    if (dom.exploreBtn) {
        dom.exploreBtn.addEventListener("click", () => {
            document.getElementById("states")?.scrollIntoView({ behavior: "smooth" });
        });
    }

    if (!mapObject) return;

    mapObject.addEventListener("load", () => {

        const svgDocument = mapObject.contentDocument;
    
        if (!svgDocument) {
            console.error("SVG could not be loaded.");
            return;
        }

        indiaStates.forEach((state) => {

            const stateElement = svgDocument.getElementById(state.id);
        
            if (!stateElement) return;
        
            attachStateEvents(stateElement, state);
        
        });
    
    });

}