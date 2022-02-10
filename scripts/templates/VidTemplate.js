// Crée le template de la card de chaque media
export default class VidTemplate {
  constructor (media) {
    this._media = media
  }

  getMedia () {
    return `
      <article>
        <video src="${this._media.miniature}" tabindex="0" class="lightbox-item" controls alt="${this._media.alt}"></video>
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
