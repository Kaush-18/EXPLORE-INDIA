export function initHero() {
  const themeToggle = document.querySelector(".theme-toggle");
  const searchButton = document.querySelector(".search-btn");
  const destinationSearch = document.querySelector(".hero-search input");
  const searchForm = document.querySelector(".hero-search");

  if (themeToggle) {
    const savedTheme = localStorage.getItem("explore-india-theme");
    const useDarkMode = savedTheme === "dark";

    const updateTheme = (isDarkMode) => {
      document.body.classList.toggle("dark-mode", isDarkMode);
      themeToggle.setAttribute("aria-pressed", String(isDarkMode));
      themeToggle.setAttribute(
        "aria-label",
        isDarkMode ? "Switch to light mode" : "Switch to dark mode",
      );

      const themeIcon = themeToggle.querySelector("i");
      themeIcon?.classList.toggle("ri-moon-line", !isDarkMode);
      themeIcon?.classList.toggle("ri-sun-line", isDarkMode);
    };

    updateTheme(useDarkMode);

    themeToggle.addEventListener("click", () => {
      const isDarkMode = !document.body.classList.contains("dark-mode");
      updateTheme(isDarkMode);
      localStorage.setItem("explore-india-theme", isDarkMode ? "dark" : "light");
    });
  }

  if (searchButton && destinationSearch) {
    searchButton.addEventListener("click", () => destinationSearch.focus());
  }

  if (searchForm && destinationSearch) {
    const searchStatus = searchForm.querySelector(".search-status");

    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const query = destinationSearch.value.trim();
      if (!query) {
        destinationSearch.focus();

        if (searchStatus) {
          searchStatus.textContent = "Try a state, city, or destination name.";
        }

        return;
      }

      const statesSection = document.querySelector("#states");
      if (statesSection) {
        statesSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      const renderEvent = new CustomEvent('renderStates', { detail: { query } });
      document.dispatchEvent(renderEvent);

      if (searchStatus) {
        searchStatus.textContent = `Showing results for “${query}”.`;
      }
    });
  }

  /* ========================================= */
  /* VIDEO MODAL LOGIC */
  /* ========================================= */
  const watchVideoBtn = document.getElementById("watch-video-btn");
  const videoModal = document.getElementById("video-modal");
  const closeVideoBtn = document.getElementById("close-video-btn");
  const videoModalBackdrop = document.getElementById("video-modal-backdrop");
  const videoIframe = document.getElementById("video-iframe");

  const VIDEO_URL = "https://www.youtube-nocookie.com/embed/35NPxz40mhE?autoplay=1";

  if (watchVideoBtn && videoModal) {
    const openModal = () => {
      videoModal.classList.add("is-open");
      videoModal.setAttribute("aria-hidden", "false");
      if (videoIframe) {
        videoIframe.src = VIDEO_URL;
      }
    };

    const closeModal = () => {
      videoModal.classList.remove("is-open");
      videoModal.setAttribute("aria-hidden", "true");
      if (videoIframe) {
        videoIframe.src = "";
      }
    };

    watchVideoBtn.addEventListener("click", openModal);
    closeVideoBtn?.addEventListener("click", closeModal);
    videoModalBackdrop?.addEventListener("click", closeModal);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && videoModal.classList.contains("is-open")) {
        closeModal();
      }
    });
  }
}
