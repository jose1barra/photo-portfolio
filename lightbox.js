document.addEventListener('DOMContentLoaded', () => {
  const galleryImgs = Array.from(document.querySelectorAll('#gallery img'));
  const lightbox    = document.getElementById('lightbox');
  const imgEl       = document.getElementById('lightbox-img');
  const closeBtn    = document.querySelector('.close');
  const prevBtn     = document.querySelector('.prev');
  const nextBtn     = document.querySelector('.next');
  let currentIndex  = 0;

  function openLightbox(index) {
    currentIndex = index;
    imgEl.style.opacity = 0;
    imgEl.src = galleryImgs[currentIndex].src;
    imgEl.onload = () => { imgEl.style.opacity = 1; };
    lightbox.classList.add('show');
  }

  function changeImage(delta) {
    currentIndex = (currentIndex + delta + galleryImgs.length) % galleryImgs.length;
    openLightbox(currentIndex);
  }

  galleryImgs.forEach((img, i) => {
    img.addEventListener('click', () => openLightbox(i));
  });

  closeBtn.addEventListener('click', () => lightbox.classList.remove('show'));
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.classList.remove('show');
  });

  prevBtn.addEventListener('click', e => { e.stopPropagation(); changeImage(-1); });
  nextBtn.addEventListener('click', e => { e.stopPropagation(); changeImage(1); });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('show')) return;
    if (e.key === 'Escape') lightbox.classList.remove('show');
    if (e.key === 'ArrowLeft')  changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
  });
});
