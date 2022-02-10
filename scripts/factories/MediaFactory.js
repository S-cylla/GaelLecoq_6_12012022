import ImgTemplate from '../templates/ImgTemplate.js'
import VidTemplate from '../templates/VidTemplate.js'

export class MediaFactory {
  constructor (data) {
    if (data._image) {
      return new ImgTemplate(data)
    } else if (data._video) {
      return new VidTemplate(data)
    }/*  else {
      throw 'Format inconnu'
    } */
  }
}
