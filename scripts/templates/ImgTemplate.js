// Crée le template de la card de chaque media
export default class ImgTemplate {
  constructor (media) {
    this._media = media
  }

  getMedia () {
    return `
      <article>
        <img src="${this._media.miniature}" tabindex="0" class="lightbox-item"  alt="${this._media.alt}">
        <div class="media-caption">
            <span class="title">${this._media.title}</span>
            <p class="likes">
              <span class="likes-number">${this._media.likes} </span>
              <i aria-label=”likes” tabindex="0" class="fas fa-heart like-icon"></i>
            </p>
        </div>
      </article>
      `
  }
}
