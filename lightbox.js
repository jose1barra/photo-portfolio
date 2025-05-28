
const imageList = [
  "uploads/photo1.jpg",
  "uploads/photo2.jpg"
];

const gallery = document.getElementById("gallery");
imageList.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Photo";
  img.classList.add("gallery-img");
  gallery.appendChild(img);
});

// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.getElementsByClassName("close")[0];

document.querySelectorAll(".gallery-img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
  });
});

close.onclick = () => {
  lightbox.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == lightbox) {
    lightbox.style.display = "none";
  }
};
