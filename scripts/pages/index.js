import Photographer from "../factories/models/photograph.js";
import PhotographerCard from "../factories/templates/photographerCard.js";

const photographersSection = document.querySelector(".photographer_section");

fetch("data/photographers.json")
  .then((result) => result.json())
  .then((result) => {
    result.data;
    const photographers = result.photographers;
    photographers.map((item) => {
      const photographer = new Photographer(item);
      const Template = new PhotographerCard(photographer);
      photographersSection.innerHTML += Template.getCard();
    });
  })
  .catch((err) => console.error(`Erreur :`, err));
