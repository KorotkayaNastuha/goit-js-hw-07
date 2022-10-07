import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
const markUp = galleryItems.map((image) => 
	`<div class="gallery__item">
		<a class="gallery__link" href=${image.original}>
		<img class = "gallery__image"
			src=${image.preview}
			data-sourse=${image.original}
			alt=${image.description}
		/>
		</a>
	</div >`).join("");

galleryEl.innerHTML = markUp;

    new SimpleLightbox('.gallery a', {
	captionDelay: 250, captiosnData: "alt"
})