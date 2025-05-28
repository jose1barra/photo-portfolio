document.addEventListener('DOMContentLoaded', () => {
  const galleryImgs = Array.from(document.querySelectorAll('#gallery img'));
  const lightbox = document.getElementById('lightbox');
  const imgEl     = document.getElementById('lightbox-img');
  const closeBtn  = document.querySelector('.close');
  const prevBtn   = document.querySelector('.prev');
  const nextBtn   = document.querySelector('.next');

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    imgEl.src = galleryImgs[currentIndex].src;
    imgEl.style.animation = 'none';
    // re-trigger fade-in
    requestAnimationFrame(() => {
      imgEl.style.animation = '';
    });
    lightbox.classList.add('show');
  }

  function changeImage(delta) {
    currentIndex = (currentIndex + delta + galleryImgs.length) % galleryImgs.length;
    openLightbox(currentIndex);
  }

  // Open when clicking a gallery image
  galleryImgs.forEach((img, i) => {
    img.addEventListener('click', () => openLightbox(i));
  });

  // Close handlers
  closeBtn.addEventListener('click', () => lightbox.classList.remove('show'));
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.classList.remove('show');
  });

  // Prev/Next buttons
  prevBtn.addEventListener('click', e => {
    e.stopPropagation();
    changeImage(-1);
  });
  nextBtn.addEventListener('click', e => {
    e.stopPropagation();
    changeImage(1);
  });

  // Keyboard support
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('show')) return;
    if (e.key === 'Escape') lightbox.classList.remove('show');
    if (e.key === 'ArrowLeft')  changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
  });
});
