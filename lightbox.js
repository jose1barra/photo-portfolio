document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery')
  const lightbox = document.getElementById('lightbox')
  const lightboxImg = document.getElementById('lightbox-img')
  const closeBtn = document.querySelector('.close')

  // If you’re dynamically injecting via imageList, do that here...
  const imageList = [
    'uploads/photo1.jpg',
    'uploads/photo2.jpg',
    // …add more…
  ]
  imageList.forEach(src => {
    const img = document.createElement('img')
    img.src = src
    img.alt = 'Photo'
    img.classList.add('gallery-item')
    gallery.appendChild(img)
  })

  // Attach click handler to **all** gallery items (static or dynamic)
  document.querySelectorAll('.gallery-item').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src
      lightbox.classList.add('show')
    })
  })

  // Close logic
  closeBtn.addEventListener('click', () => lightbox.classList.remove('show'))
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.classList.remove('show')
  })
})
