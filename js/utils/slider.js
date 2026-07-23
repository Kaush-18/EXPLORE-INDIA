// ========================================
// Slider Utility
// Shared slider functionality
// ========================================

export function createSlider(slider, prevBtn, nextBtn) {

    if (!slider || !prevBtn || !nextBtn) return;

    const getScrollAmount = () => {

        const card = slider.firstElementChild;

        if (!card) return 300;

        const gap = 24;

        return card.offsetWidth + gap;

    };

    function scrollNext() {

        slider.scrollBy({

            left: getScrollAmount(),

            behavior: "smooth"

        });

    }

    function scrollPrev() {

        slider.scrollBy({

            left: -getScrollAmount(),

            behavior: "smooth"

        });

    }

    nextBtn.addEventListener("click", scrollNext);

    prevBtn.addEventListener("click", scrollPrev);

}
// ========================================
// Drag Utility
// ========================================

export function enableDrag(slider) {

    if (!slider) return;

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    slider.addEventListener("mousedown", (e) => {

        isDragging = true;

        slider.classList.add("dragging");

        startX = e.pageX - slider.offsetLeft;

        scrollLeft = slider.scrollLeft;

    });

    slider.addEventListener("mouseleave", () => {

        isDragging = false;

        slider.classList.remove("dragging");

    });

    slider.addEventListener("mouseup", () => {

        isDragging = false;

        slider.classList.remove("dragging");

    });

    slider.addEventListener("mousemove", (e) => {

        if (!isDragging) return;

        e.preventDefault();

        const x = e.pageX - slider.offsetLeft;

        const walk = (x - startX) * 2;

        slider.scrollLeft = scrollLeft - walk;

    });

    slider.addEventListener("touchstart", (e) => {

        isDragging = true;

        startX = e.touches[0].pageX - slider.offsetLeft;

        scrollLeft = slider.scrollLeft;

    }, { passive: true });

    slider.addEventListener("touchend", () => {

        isDragging = false;

    });

    slider.addEventListener("touchmove", (e) => {

        if (!isDragging) return;

        const x = e.touches[0].pageX - slider.offsetLeft;

        const walk = (x - startX) * 2;

        slider.scrollLeft = scrollLeft - walk;

    }, { passive: true });

}

// ========================================
// Keyboard Navigation Utility
// ========================================

export function enableKeyboard(slider) {

    if (!slider) return;

    const getScrollAmount = () => {

        const card = slider.firstElementChild;

        if (!card) return 300;

        return card.offsetWidth + 24;

    };

    slider.setAttribute("tabindex", "0");

    slider.addEventListener("keydown", (event) => {

        if (event.key === "ArrowRight") {

            slider.scrollBy({

                left: getScrollAmount(),

                behavior: "smooth"

            });

        }

        if (event.key === "ArrowLeft") {

            slider.scrollBy({

                left: -getScrollAmount(),

                behavior: "smooth"

            });

        }

    });

}