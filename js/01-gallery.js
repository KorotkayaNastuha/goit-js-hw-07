import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


const galleryEl = document.querySelector('.gallery')
const items = []

galleryItems.forEach(element => {
	const galleryItem = document.createElement('div')
	galleryItem.className = 'gallery__item'
	const galleryLink = document.createElement('a')
	galleryLink.className = 'gallery__link'
	galleryLink.href = element.original
	const galleryImage = document.createElement('img')
    galleryImage.className = 'gallery__image'
    galleryImage.src = element.preview;
    galleryImage.setAttribute('data-source', element.original)
    galleryImage.alt = element.description;

	galleryItem.append(galleryLink)
	galleryLink.append(galleryImage)
	items.push(galleryItem)
})

galleryEl.append(...items)

galleryEl.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.classList.contains('gallery')) {
		return
	}

    const newImage = event.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${newImage}" width="800" height="600">
`)

    instance.show()
    
    galleryEl.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			instance.close()
		}
	})
})

