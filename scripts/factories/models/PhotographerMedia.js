export default class PhotographerMedia {
  constructor(media) {
    this._id = media.id;
    this._photographerId = media.photographerId;
    this._title = media.title;
    this._image = media.image;
    this._likes = media.likes;
    this._date = media.date;
    this._price = media.price;
    this._alt = media.alt;
  }

  getGallery() {
    const photo = `assets/images/${this._photographerId}/${this._image}`;
    return `
      <article>
        <a href="${photo}"><img src="${photo}" class="gallery-img" alt="${this._alt}"></a>
        <div class="media-caption">
            <span class="title">${this._title}</span>
            <span class="likes">${this._likes} <i aria-label=”likes” class="fas fa-heart"></i></span>
        </div>
      </article>
      `;
  }
}
