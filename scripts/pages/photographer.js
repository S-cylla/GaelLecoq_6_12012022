//Code JavaScript lié à la page photographer.html
import PhotographerMedia from "../factories/models/PhotographerMedia.js";

const gallerySection = document.querySelector(".gallery-section");

let pageID = 0;
let array = [];

getPageId();

fetch("data/photographers.json")
  .then((result) => result.json())
  .then((result) => {
    result.data;
    const media = result.media;
    let i = 0;
    media.forEach((item) => {
      if (item.photographerId === pageID) {
        const PhotographerMediaTemplate = new PhotographerMedia(item);
        i++;
        array.push(PhotographerMediaTemplate.getGallery());
        gallerySection.innerHTML = array;
      }
    });
    console.log("Nombre de médias à afficher =", i);
  })
  .catch((err) => console.error(`Erreur :`, err));

function getPageId() {
  pageID = parseInt(new URLSearchParams(window.location.search).get("id"));
  console.log("ID du photographe =", pageID);
  return pageID;
}

// Créer un objet où stocker les médias correspondant à l'ID
