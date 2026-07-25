// ========================================
// Explore India Section
// ========================================
import { indiaStates } from "../data/india-states.js";
const dom = {};
let selectedStateElement = null;
let svgDocument = null;

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
    dom.exploreBtn =document.getElementById("explore-state-btn");
}

export function updateStatePanel(state) {

    if (!dom.image || !dom.name) return;

    const name = state.name || "";
    const capital = state.capital || "";
    const famousFor = state.famousFor || state.famous || "";
    const bestTime = state.bestTime || state.season || "";
    const cuisine = state.cuisine || state.food || "";
    const description = state.description || "";
    const topAttractions = state.topAttractions || state.attractions || [];
    const popularCities = state.popularCities || state.cities || [];

    dom.image.src = state.image || "./assets/images/placeholder.svg";
    dom.image.alt = name;

    dom.name.textContent = name;
    dom.capital.textContent = capital;
    dom.famous.textContent = famousFor;
    dom.season.textContent = bestTime;
    dom.food.textContent = cuisine;
    dom.description.textContent = description;

    if (dom.attractions) {
        dom.attractions.innerHTML = topAttractions
            .map(item => `<li class="chip chip-primary">${item}</li>`)
            .join("");
    }
    if (dom.cities) {
        dom.cities.innerHTML = popularCities
            .map(city => `<span class="chip chip-surface">${city}</span>`)
            .join("");
    }
    if (dom.budget) {
        dom.budget.textContent = state.budget || "--";
    }
    if (dom.climate) {
        dom.climate.textContent = state.climate || "--";
    }
    if (dom.festival) {
        dom.festival.textContent = state.festival || "--";
    }
}
export function selectState(state) {

    updateStatePanel(state);

    if (svgDocument) {

        const stateElement = svgDocument.getElementById(state.id);

        if (stateElement) {

            if (selectedStateElement && selectedStateElement !== stateElement) {
                selectedStateElement.style.fill = "";
            }

            selectedStateElement = stateElement;

            stateElement.style.fill = "#2563eb";

        }

    }

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

        svgDocument = mapObject.contentDocument;
    
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