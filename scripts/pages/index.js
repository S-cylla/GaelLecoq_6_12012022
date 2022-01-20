import PhotographerCard from "../factories/templates/photographerCard.js";

const photographersSection = document.querySelector(".photographer_section");
let photographersArray = [];

fetch("data/photographers.json")
  .then((result) => result.json())
  .then((result) => {
    result.data;
    const photographers = result.photographers;
    photographers.map((photographer) => {
      const Template = new PhotographerCard(photographer);
      photographersArray.push(Template.getCard());
    });
    photographersSection.innerHTML = photographersArray;
    return photographersArray;
  })
  .catch((err) => console.error(`Erreur :`, err));
