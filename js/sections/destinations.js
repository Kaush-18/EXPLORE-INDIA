import { destinations } from "../data/destinations.js";
import {
    createSlider,
    enableDrag,
    enableKeyboard
} from "../utils/slider.js";

function createDestinationCards(slider) {

    if (!slider) return;

    const cardsHTML = destinations.map(destination => `

        <div class="destination-card">

            <img
                src="${destination.image}"
                alt="${destination.title}"
            >

            <div class="destination-overlay">

                <span class="destination-state">
                    ${destination.state}
                </span>

                <h3>${destination.title}</h3>

                <p>${destination.city}</p>

                <div class="destination-meta">

                    <span>⭐ ${destination.rating}</span>

                    <span>${destination.price}</span>

                    <button class="explore-btn">
                        Explore →
                    </button>

                </div>

            </div>

        </div>

    `).join("");

    slider.innerHTML = cardsHTML;

}

export function initDestinationsSection() {
    const slider = document.querySelector('.destination-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (!slider) return;

    createDestinationCards(slider);

    createSlider(slider, prevBtn, nextBtn);

    enableDrag(slider);

    enableKeyboard(slider);
    
}
