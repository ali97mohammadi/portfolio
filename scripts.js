
  function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
};

let currentIndex = 0;
let currentCategory = '';
let allImages = [];

function openLightbox(imgElement) {
  const src = imgElement.src;
  const category = imgElement.dataset.category;

  currentCategory = category;
  allImages = Array.from(document.querySelectorAll(`img[data-category="${category}"]`));
  currentIndex = allImages.findIndex(img => img.src === src);

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightboxImg.src = src;
  lightbox.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
  document.getElementById("lightbox-img").src = "";
  document.body.style.overflow = "auto";
}

function changeImage(direction) {
  if (allImages.length === 0) return;

  currentIndex = (currentIndex + direction + allImages.length) % allImages.length;
  const newSrc = allImages[currentIndex].src;
  document.getElementById("lightbox-img").src = newSrc;
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") changeImage(1);
  if (e.key === "ArrowLeft") changeImage(-1);
});
document.querySelector('.back-to-top').addEventListener('click', (e) => {
e.preventDefault();
window.scrollTo({ top: 0, behavior: 'smooth' });
 });

