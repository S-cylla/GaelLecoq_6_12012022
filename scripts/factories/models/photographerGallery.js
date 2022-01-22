export default class PhotographerGallery {
  constructor(media) {
    this._id = media.id;
    this._photographerId = media.photographerId;
    this._title = media.title;
    this._image = media.image;
    this._video = media.video;
    this._likes = media.likes;
    this._date = media.date;
    this._price = media.price;
    this._alt = media.alt;
  }
  get id() {
    return this._id;
  }
  get photographerId() {
    return this._photographerId;
  }
  get title() {
    return this._title;
  }
  get link() {
    return this._image ? this._image : this._video;
  }
  get miniature() {
    return `assets/images/${this.photographerId}/${this.link}`;
  }

  get likes() {
    return this._likes;
  }
  get date() {
    return this._date;
  }
  get price() {
    return this._price;
  }
  get alt() {
    return this._alt;
  }
}
