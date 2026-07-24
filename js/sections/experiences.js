import { experiences } from "../data/experiences.js";
export function initExperiences() {
  const container = document.querySelector("#experiences-grid");

  if (!container) return;

  container.innerHTML = "";

  experiences.forEach((experience) => {
    container.innerHTML += `
      <article class="experience-card">
        <div class="experience-image">
          <img src="${experience.image}" alt="${experience.title}">
        </div>

        <div class="experience-content">
          <span class="experience-category">
            ${experience.category}
          </span>

          <h3>${experience.title}</h3>

          <p>${experience.description}</p>

          <button class="experience-btn">
            Explore More →
          </button>
        </div>
      </article>
    `;
  });
}