import { travelGuide } from "../data/travel-guide.js";

export function initTravelGuide() {

    const container = document.querySelector("#travel-guide-grid");

    if (!container) return;

    container.innerHTML = "";

    travelGuide.forEach((item, index) => {

        container.innerHTML += `

            <article
                class="guide-card reveal"
                style="animation-delay:${index * 120}ms"
            >

                <div class="guide-icon">

                    <i class="${item.icon}"></i>

                </div>

                <h3>${item.title}</h3>

                <p>${item.description}</p>

            </article>

        `;

    });

}