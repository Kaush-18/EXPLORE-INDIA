// Import modules that handle different sections and components
import { initNavbar } from "./sections/navbar.js";
import { initHero } from "./sections/hero.js";
import { initStatesSection } from "./sections/states.js";
import { initDestinationsSection } from "./sections/destinations.js";
import { initExploreIndia } from "./sections/explore-india.js";
import { initSearch } from "./components/search.js";
import { initExperiences } from "./sections/experiences.js";
import { initScrollReveal } from "./utils/scrollReveal.js";
import { initTravelGuide } from "./sections/travel-guide.js";
/**
 * Main function to initialize the application.
 * This runs after the DOM is fully loaded.
 */
function main() {
  initNavbar();
  initHero();
  initStatesSection();
  initDestinationsSection();
  initExploreIndia();
  initSearch();
  initExperiences();
  initTravelGuide();
  initScrollReveal();   
}

// Wait for the DOM to be ready before running the main script
document.addEventListener("DOMContentLoaded", main);