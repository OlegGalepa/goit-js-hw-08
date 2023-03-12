import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// console.log(galleryItems);

const parentItemsRef = document.querySelector('.gallery');

createGalleryMarkup(galleryItems, parentItemsRef);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

function createGalleryMarkup(arrItems, parentRef) {
 const galleryMarkup = arrItems.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;})
      .join('');
    return (parentRef.innerHTML = galleryMarkup);
}


