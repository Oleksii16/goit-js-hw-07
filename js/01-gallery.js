import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// import * as basicLightbox from 'basiclightbox'
const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`)



const galleryImage = document.querySelector('.gallery')

const markUp = galleryItems.map(({ preview, original, description}) => `<li class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${original}"
      data-source="${preview}"
      alt="${description}"
    />
  </a>
</li>`);
instance.show()

galleryImage.insertAdjacentHTML('beforeend', markUp.join(''));

galleryImage.addEventListener('click', onClick => { onClick.preventDefault() });

function onClick(e) {
  console.log(e.target)
}
 

