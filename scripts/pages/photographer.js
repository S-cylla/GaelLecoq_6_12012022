//Code JavaScript lié à la page photographer.html
import PhotographerMedia from "../factories/models/PhotographerMedia.js";

const gallerySection = document.querySelector(".gallery-section");
const photographerInfo = document.querySelector(".photographer-info");

let pageID = 0;
let galleryArray = [];
let photographerPrice = 0;

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
    let i = 0;
    media.forEach((item) => {
      if (item.photographerId === pageID) {
        const PhotographerMediaTemplate = new PhotographerMedia(item);
        i++;
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

function getPageId() {
  pageID = parseInt(new URLSearchParams(window.location.search).get("id"));
  return pageID;
}

function likeIncrement() {
  const likeIcon = document.querySelectorAll(".like-icon");
  likeIcon.forEach((heart) => {
    heart.addEventListener("click", addLike);
  });
}

function addLike(event) {
  const heart = event.currentTarget;
  let likesNumber = parseInt(heart.previousElementSibling.innerHTML, 10);
  likesNumber++;
  heart.previousElementSibling.innerHTML = likesNumber;
  totalLikes();
}

// Affiche le total de likes et le prix dans le aside.photographer-info
export function totalLikes() {
  let totalOfLikes = 0;
  const likeIcon = document.querySelectorAll(".like-icon");
  likeIcon.forEach((heart) => {
    let i = parseInt(heart.previousElementSibling.innerHTML, 10);
    totalOfLikes = totalOfLikes + i;
  });
  photographerInfo.innerHTML = `
                                  <div class="like">
                                    <span>${totalOfLikes}</span>
                                    <i aria-label=”likes” class="fas fa-heart"></i>
                                  </div>
                                  <div class="daily-price">€ ${photographerPrice} / jour</div>
                                `;
}
