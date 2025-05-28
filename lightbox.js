document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const gallery = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');

  // 1. Your images + titles
  const imageList = [
    { src: 'uploads/photo1.jpg', title: 'Sunset Over Mountains' },
    { src: 'uploads/photo2.jpg', title: 'City Skyline' },
    // …add more…
  ];

  // 2. Inject gallery items
  imageList.forEach((imgData, i) => {
    const fig = document.createElement('figure');
    fig.classList.add('gallery-item');
    fig.style.setProperty('--i', i);

    const img = document.createElement('img');
    img.src = imgData.src;
    img.alt = imgData.title;

    const cap = document.createElement('figcaption');
    cap.textContent = imgData.title;

    fig.append(img, cap);
    gallery.appendChild(fig);

    fig.addEventListener('click', () => {
      lightboxImg.src = imgData.src;
      lightbox.classList.add('show');
    });
  });

  // 3. Close handlers
  closeBtn.addEventListener('click', () => lightbox.classList.remove('show'));
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.classList.remove('show');
  });

  // 4. Section scroll-in animations
  const sections = document.querySelectorAll('.section, .hero-section');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'opacity .6s ease, transform .6s ease';
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'none';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  sections.forEach(sec => obs.observe(sec));
});
