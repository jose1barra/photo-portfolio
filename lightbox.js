// Wait for everything to load
document.addEventListener('DOMContentLoaded', () => {
  // 1. The list of images to show in the gallery
  const imageList = [
    'uploads/photo1.jpg',
    'uploads/photo2.jpg',
    // add more filenames here...
  ];

  // 2. Grab the gallery container
  const gallery = document.getElementById('gallery');

  // 3. For each image path, create an <img> and append it
  imageList.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Photo';
    img.classList.add('gallery-item');     // matches style.css
    gallery.appendChild(img);

    // 4. When clicked, open lightbox
    img.addEventListener('click', () => {
      lightboxImg.src = src;
      lightbox.style.display = 'flex';     // use flex for centering
    });
  });

  // 5. Grab lightbox elements
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');

  // 6. Close button click
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // 7. Click outside the image
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});
