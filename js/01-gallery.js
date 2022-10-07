import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


// const galleryEl = document.querySelector('.gallery')
// const items = []

// galleryItems.forEach(element => {
// 	const galleryItem = document.createElement('div')
// 	const galleryLink = document.createElement('a')
// 	const galleryImage = document.createElement('img')


// 	galleryItem.className = 'gallery__item'
// 	galleryLink.className = 'gallery__link'
// 	galleryLink.href = element.original
//     galleryImage.className = 'gallery__image'
//     galleryImage.src = element.preview;
//     galleryImage.alt = element.description;

// 	galleryItem.append(galleryLink)
// 	galleryLink.append(galleryImage)
// 	items.push(galleryItem)
// })galleryEl.append(...items)

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


galleryEl.addEventListener("click", smallImageClick);
function smallImageClick(event) {
  
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) return;

  const largeImage = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${largeImage}" width="800" height="600">
`);

instance.show()


   galleryEl.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			instance.close()
		}
	})
    
}
