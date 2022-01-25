//Code JavaScript lié à la page photographer.html

import PhotographerGallery from "../factories/models/photographerGallery.js";
import PhotographerMedia from "../factories/templates/PhotographerMedia.js";
import { likeIncrement, totalLikes } from "../functions/likesCounters.js";
import Presentation from "../factories/templates/photographerPresentation.js";
import sortBy from "../functions/dropdown.js";

const presentationBloc = document.getElementById("presentation-bloc");
const photographerImg = document.getElementById("photographer-img");
const gallerySection = document.querySelector(".gallery-section");
const priceContainer = document.querySelector(".price");
const photographerName = document.getElementById("photographer__name");

let pageID = 0;
let photographers = [];
let media = [];

// Récupération de l'ID de la page
const getPageId = () => {
  pageID = parseInt(new URLSearchParams(window.location.search).get("id"));
};
getPageId();

const fetchDatas = async () => {
  await fetch("data/photographers.json")
    .then((result) => result.json())
    .then((result) => {
      result.data;
      photographers = result.photographers;
      media = result.media;
    })
    .catch((err) => console.error(`Erreur :`, err));
};

const photographersInfoDisplay = async () => {
  await fetchDatas();
  photographers.forEach((photographer) => {
    // Si l'ID du photographe correspond à celui de la page html
    if (photographer.id === pageID) {
      // Affichage du prix du photographe dans la <span> dédiée
      priceContainer.textContent = photographer.price;
      photographerName.textContent = photographer.name;
      // Écriture de la bannière
      const presentation = new Presentation(photographer);
      presentationBloc.innerHTML = presentation.getPresentation();
      photographerImg.innerHTML = presentation.getPhotographerImg();
    }
  });
};

const mediaDisplay = async () => {
  await fetchDatas();
  media.forEach((item) => {
    //Récupère les média correspondant à l'ID du photographe
    if (item.photographerId === pageID) {
      //Crée la galerie avec les photos et vidéos
      const photographerGallery = new PhotographerGallery(item);
      const PhotographerMediaTemplate = new PhotographerMedia(
        photographerGallery
      );
      if (item.image) {
        gallerySection.innerHTML += PhotographerMediaTemplate.getImg();
      } else {
        gallerySection.innerHTML += PhotographerMediaTemplate.getVideo();
      }
    }
  });
};

photographersInfoDisplay();
mediaDisplay();
totalLikes(fetchDatas());
likeIncrement(fetchDatas());
sortBy(fetchDatas());
