//Code JavaScript lié à la page photographer.html

import PhotographerGallery from "../factories/models/photographerGallery.js";
import PhotographerMedia from "../factories/templates/PhotographerMedia.js";
import { likeIncrement, totalLikes } from "../functions/likesCounters.js";
import Presentation from "../factories/templates/photographerPresentation.js";
import activeToggle from "../functions/dropdown.js";

const presentationBloc = document.getElementById("presentation-bloc");
const photographerImg = document.getElementById("photographer-img");
const gallerySection = document.querySelector(".gallery-section");
const priceContainer = document.querySelector(".price");
const photographerName = document.getElementById("photographer__name");
const sortByPopularity = document.getElementById("popularity");
const sortByDate = document.getElementById("date");
const sortByTitle = document.getElementById("title");

let pageID = 0;
let photographers = [];
let media = [];
const gallery = [];

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
      photographersInfoDisplay();
      media = result.media;
      mediaDisplay();
      sortBy();
      totalLikes();
      likeIncrement();
    })
    .catch((err) => console.error(`Erreur :`, err));
};

const photographersInfoDisplay = () => {
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

const mediaDisplay = () => {
  media.forEach((item) => {
    if (item.photographerId === pageID) {
      gallery.push(item);
    }
  });
  createGallery(gallery);
};

function createGallery(array) {
  gallerySection.innerHTML = "";
  array.forEach((element) => {
    const photographerGallery = new PhotographerGallery(element);
    const PhotographerMediaTemplate = new PhotographerMedia(
      photographerGallery
    );
    if (element.image) {
      gallerySection.innerHTML += PhotographerMediaTemplate.getImg();
    } else {
      gallerySection.innerHTML += PhotographerMediaTemplate.getVideo();
    }
  });
}

//   console.log(
//     gallery.sort(function (a, b) {
//       return b.likes - a.likes;
//     })
//   );

fetchDatas();

const sortBy = () => {
  sortByPopularity.addEventListener("click", () => {
    let popularityArray = gallery.sort((a, b) => b.likes - a.likes);
    createGallery(popularityArray);
    activeToggle("Popularité");
    likeIncrement();
  });

  sortByDate.addEventListener("click", () => {
    let dateArray = gallery.sort(
      (a, b) => b.date.split("-").join("") - a.date.split("-").join("")
    );
    createGallery(dateArray);
    activeToggle("Date");
    likeIncrement();
  });

  sortByTitle.addEventListener("click", () => {
    let titleArray = gallery.sort((a, b) => a.title.localeCompare(b.title));
    createGallery(titleArray);
    activeToggle("Titre");
    likeIncrement();
  });
};

// Découper mediaDisplay en fonctions et pouvoir afficher selon le nouveau tableau
//Mettre tous les articles dans un array
//Récupérer tous les likes
//Réorganiser les articles selon les like avec array.sort(a, b => b - a)
