import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const containerGalleryEl = document.querySelector('.gallery');
const galleryMarkup = creatGalleryMarkup(galleryItems);


containerGalleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

// _____________________________________________________-

containerGalleryEl.addEventListener('click', clickPictureGallry);

function clickPictureGallry(e) {
  e.preventDefault();

  const isGalleryItem = e.target.classList.contains('.gallery__item')
  if (!isGalleryItem) {
    return;
  }



  const instance = basicLightbox.create(`
      <div class="modal">
          <p>
            <img src="${e.target.dataset.source}" width="800" height="600">
          </p>
      </div>
  `)

  instance.show()

}




// console.log(galleryMarkup)

function creatGalleryMarkup(galleryItems) {

  return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;

  }).join('');
};


