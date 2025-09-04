// Simple gallery loader: reads a preset list of images and creates thumbnails
const galleryImages = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];
const galleryGrid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

function buildGallery(){
  galleryImages.forEach(src=>{
    const img = document.createElement('img');
    img.src = src; img.alt = src; img.className = 'thumb';
    img.addEventListener('click', ()=>{
      lightboxImg.src = src; lightbox.classList.remove('hidden');
    });
    galleryGrid.appendChild(img);
  });
}
lightboxClose.addEventListener('click', ()=>{lightbox.classList.add('hidden')});
buildGallery();
