//Code JavaScript lié à la page photographer.html
import PhotographerMedia from "../factories/models/PhotographerMedia.js";

const gallerySection = document.querySelector(".gallery-section");
const photographerInfo = document.querySelector(".photographer-info");

let pageID = 0;
let galleryArray = [];
let photographerPrice = 0;

const getPageId = () => {
  pageID = parseInt(new URLSearchParams(window.location.search).get("id"));
  return pageID;
};
getPageId();

fetch("data/photographers.json")
  .then((result) => result.json())
  .then((result) => {
    result.data;
    const photographers = result.photographers;
    photographers.forEach((photographer) => {
      if (photographer.id === pageID) {
        photographerPrice = photographer.price;
      }
      return photographerPrice;
    });
    const media = result.media;
    media.forEach((item) => {
      if (item.photographerId === pageID) {
        const PhotographerMediaTemplate = new PhotographerMedia(item);
        if (item.image) {
          galleryArray.push(PhotographerMediaTemplate.getImg());
        } else {
          galleryArray.push(PhotographerMediaTemplate.getVideo());
        }
        gallerySection.innerHTML = galleryArray;
      }
    });
    totalLikes();
    likeIncrement();
  })
  .catch((err) => console.error(`Erreur :`, err));

const likeIncrement = () => {
  const likeIcon = document.querySelectorAll(".like-icon");
  likeIcon.forEach((heart) => {
    heart.addEventListener("click", () => {
      let likesNumber = parseInt(heart.previousElementSibling.innerHTML);
      likesNumber++;
      heart.previousElementSibling.innerHTML = likesNumber;
      totalLikes();
    });
  });
};

// Affiche le total de likes et le prix dans le aside.photographer-info
const totalLikes = () => {
  let totalOfLikes = 0;
  const likeIcon = document.querySelectorAll(".like-icon");
  likeIcon.forEach((heart) => {
    let i = parseInt(heart.previousElementSibling.innerHTML);
    totalOfLikes += i;
  });
  photographerInfo.innerHTML = `
      <div class="like">
        <span>${totalOfLikes}</span>
        <i aria-label=”likes” class="fas fa-heart"></i>
      </div>
      <div class="daily-price">€ ${photographerPrice} / jour</div>
    `;
};
