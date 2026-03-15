// Animasi scroll (Intersection Observer)
const entries = document.querySelectorAll('.entry');
const observer = new IntersectionObserver((items) => {
  items.forEach(item => {
    if (item.isIntersecting) item.target.classList.add('visible');
  });
}, { threshold: 0.3 });
entries.forEach(entry => observer.observe(entry));

// Popup gambar modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".photo img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target === modal) modal.style.display = "none";
};