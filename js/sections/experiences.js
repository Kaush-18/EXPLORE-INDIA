import { experiences } from "../data/experiences.js";

export function initExperiences() {

    const container = document.querySelector("#experiences-grid");

    if (!container) return;

    container.innerHTML = "";

    // Empty State
    if (experiences.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                <h3>No Experiences Found</h3>
                <p>Please check back later.</p>
            </div>
        `;

        return;
    }

    experiences.forEach((experience, index) => {

        container.innerHTML += `

        <article
            class="experience-card reveal"
            style="animation-delay:${index * 120}ms"
        >

            <!-- Image -->
            <div class="experience-image">

                <img
                    src="${experience.image}"
                    alt="${experience.title}"
                    loading="lazy"
                >

                <span class="experience-rating">
                    ⭐ ${experience.rating}
                </span>

            </div>

            <!-- Content -->
            <div class="experience-content">

                <span class="experience-category">
                    ${experience.category}
                </span>

                <h3>
                    ${experience.title}
                </h3>

                <p>
                    ${experience.description}
                </p>

                <div class="experience-meta">

                    <span>
                        📍 ${experience.location}
                    </span>

                    <span>
                        ⏱ ${experience.duration}
                    </span>

                </div>

                <button class="experience-btn">

                    Explore More

                    <i class="ri-arrow-right-line"></i>

                </button>

            </div>

        </article>

        `;

    });

}