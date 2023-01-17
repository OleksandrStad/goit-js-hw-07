import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const containerGalleryEl = document.querySelector('.gallery');
const galleryMarkup = creatGalleryMarkup(galleryItems);

containerGalleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

containerGalleryEl.addEventListener('click', clickPictureGallry);

function clickPictureGallry(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') return;
}


function creatGalleryMarkup(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;

    }).join('');
};

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionType: 'alt',
});

