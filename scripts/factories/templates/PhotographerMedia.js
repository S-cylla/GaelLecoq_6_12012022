export default class PhotographerMedia {
  constructor(media) {
    this._media = media;
  }

  getImg() {
    return `
      <article>
        <img src="${this._media.miniature}" class="gallery-img lightbox-item" onclick="openLightbox('${this._media.miniature}', '${this._media.title}')" alt="${this._media.alt}">
        <div class="media-caption">
            <span class="title">${this._media.title}</span>
            <p class="likes">
              <span class="likes-number">${this._media.likes} </span>
              <i aria-label=”likes” class="fas fa-heart like-icon"></i>
            </p>
        </div>
      </article>
      `;
  }

  getVideo() {
    return `
      <article>
        <video controls>
            <source src="${this._media.miniature}" type="video/mp4" class="gallery-video lightbox-item" onclick="openLightbox(${this._media.miniature}, ${this._media.title})" alt="${this._media.alt}">
        </video>
        <div class="media-caption">
            <span class="title">${this._media.title}</span>
            <p class="likes">
              <span class="likes-number">${this._media.likes} </span>
              <i aria-label=”likes” class="fas fa-heart like-icon"></i>
            </p>
        </div>
      </article>
      `;
  }
}
