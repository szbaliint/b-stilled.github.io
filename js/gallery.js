const projectImages = {
  corvinus: [
    "img/projects/cma/20251118-1.jpg",
    "img/projects/cma/20251118-2.jpg",
    "img/projects/cma/20251118-3.jpg",
    "img/projects/cma/20251118-4.jpg",
    "img/projects/cma/20251118-6.jpg",
    "img/projects/cma/20251118-7.jpg",
    "img/projects/cma/20251118-8.jpg",
    "img/projects/cma/20251118-9.jpg",
    "img/projects/cma/20251118-10.jpg",
  ],

  becs: [
    "img/projects/becs/20241202-2.jpg",
    "img/projects/becs/20241202-3.jpg",
    "img/projects/becs/20241202-4.jpg",
    "img/projects/becs/20241202-5.jpg",
    "img/projects/becs/20241202-6.jpg",
    "img/projects/becs/20241202-7.jpg",
    "img/projects/becs/20241202-8.jpg",
    "img/projects/becs/20241202-9.jpg",
    "img/projects/becs/20241202.jpg",
  ],

  szivaravato: [
    "img/projects/teleki/20240920.jpg",
    "img/projects/teleki/20240920-2.jpg",
    "img/projects/teleki/20240920-3.jpg",
    "img/projects/teleki/20240920-4.jpg",
    "img/projects/teleki/20240920-5.jpg",
    "img/projects/teleki/20240920-6.jpg",
    "img/projects/teleki/20240920-7.jpg",
    "img/projects/teleki/20240920-8.jpg",
    "img/projects/teleki/20240920-9.jpg",
    "img/projects/teleki/20240920-10.jpg",
],

  jit: [
    "img/projects/jit/20250728-1.jpg",
    "img/projects/jit/20250728-10.jpg",
    "img/projects/jit/20250728-11.jpg",
    "img/projects/jit/20250728-12.jpg",
    "img/projects/jit/20250728-13.jpg",
    "img/projects/jit/20250728-14.jpg",
    "img/projects/jit/20250728-15.jpg",
    "img/projects/jit/20250728-16.jpg",
    "img/projects/jit/20250728-17.jpg",
    "img/projects/jit/20250728-18.jpg",
    "img/projects/jit/20250728-19.jpg",

],

  toszkana: [
    "img/projects/toszkana/20240609-2.jpg",
    "img/projects/toszkana/20240609-3.jpg",
    "img/projects/toszkana/20240609-4.jpg",
    "img/projects/toszkana/20240609-5.jpg",
    "img/projects/toszkana/20240609-6.jpg",
    "img/projects/toszkana/20240609-7.jpg",
    "img/projects/toszkana/20240609-8.jpg",
    "img/projects/toszkana/20240609-9.jpg",
    "img/projects/toszkana/20240609.jpg"
  ],

  plitvice: [
    "img/projects/plitvice/20251010-1.jpg",
    "img/projects/plitvice/20251010-10.jpg",
    "img/projects/plitvice/20251010-11.jpg",
    "img/projects/plitvice/20251010-12.jpg",
    "img/projects/plitvice/20251010-13.jpg",
    "img/projects/plitvice/20251010-14.jpg",
    "img/projects/plitvice/20251010-15.jpg",
    "img/projects/plitvice/20251010-16.jpg",
    "img/projects/plitvice/20251010-17.jpg",
    "img/projects/plitvice/20251010-18.jpg",
    "img/projects/plitvice/20251010-19.jpg"
  ],
};

let currentProjectImages = [];
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  document.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("cta-gomb") &&
      e.target.hasAttribute("data-project")
    ) {
      e.preventDefault();
      const projectId = e.target.getAttribute("data-project");

      if (projectImages[projectId]) {
        currentProjectImages = projectImages[projectId];
        currentIndex = 0;
        openModal();
      } else {
        console.error("Nincs ilyen projekt definiálva: " + projectId);
      }
    }
    else if (e.target.tagName === "IMG" && e.target.closest(".portfolio-img")) {
      const article = e.target.closest(".portfolio-item");
      const btn = article.querySelector(".cta-gomb");
      if (btn && btn.hasAttribute("data-project")) {
        const projectId = btn.getAttribute("data-project");
        if (projectImages[projectId]) {
          currentProjectImages = projectImages[projectId];
          currentIndex = 0;
          openModal();
        }
      }
    }
  });

  function openModal() {
    lightbox.style.display = "block";
    updateImage();
  }

  function updateImage() {
    lightboxImg.src = currentProjectImages[currentIndex];
    captionText.innerHTML = `Kép ${currentIndex + 1} / ${
      currentProjectImages.length
    }`;

    if (currentProjectImages.length <= 1) {
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
    } else {
      prevBtn.style.display = "block";
      nextBtn.style.display = "block";
    }
  }

  window.changeSlide = function (n) {
    currentIndex += n;

    if (currentIndex >= currentProjectImages.length) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = currentProjectImages.length - 1;
    }

    updateImage();
  };

  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "block") {
      if (e.key === "ArrowLeft") {
        changeSlide(-1);
      } else if (e.key === "ArrowRight") {
        changeSlide(1);
      } else if (e.key === "Escape") {
        lightbox.style.display = "none";
      }
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
