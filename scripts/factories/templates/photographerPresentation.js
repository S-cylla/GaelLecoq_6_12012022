// Présentation du photographe sur sa page
export default class Presentation {
  constructor(photographer) {
    this._photographer = photographer;
  }

  getPresentation() {
    return `
        <h1>${this._photographer.name}</h1>
        <h3 class="location">${this._photographer.city}, ${this._photographer.country}</h3>
        <p class="tagline">${this._photographer.tagline}</p>
        `;
  }

  getPhotographerImg() {
    return `<img src="assets/photographers/${this._photographer.portrait}" class="profile-pic" alt="${this._photographer.name}">`;
  }
}
