const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const fullSizeSrc = item.src.replace("-thumbnail", "");
    lightboxImage.src = fullSizeSrc;
    lightbox.style.display = "flex";
  });
});

function closeLightbox() {
  lightbox.style.display = "none";
}

closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});
