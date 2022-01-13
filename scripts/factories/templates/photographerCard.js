export default class PhotographerCard {
  constructor(photographer) {
    this._photographer = photographer;
  }

  getCard() {
    const picture = `assets/photographers/${this._photographer.portrait}`;
    return `
            <article class="photographer-card">
                <a href="photographer.html?id=${this._photographer.id}" class="photographer-link">
                    <img src="${picture}" class="profile-pic" alt="${this._photographer.name}">
                </a>
                <h2 class="name">${this._photographer.name}</h2>
                <h3 class="location">${this._photographer.city}, ${this._photographer.country}</h3>
                <p class="tagline">${this._photographer.tagline}</p>
                <span class="price">${this._photographer.price}€/jour</span>
            </article>
            `;
  }
}
