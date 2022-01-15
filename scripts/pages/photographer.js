//Code JavaScript lié à la page photographer.html
import PhotographerMedia from "../factories/models/PhotographerMedia.js";

const gallerySection = document.querySelector(".gallery-section");

let pageID = 0;
let galleryArray = [];

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
        if (item.image) {
          galleryArray.push(PhotographerMediaTemplate.getImg());
        } else {
          galleryArray.push(PhotographerMediaTemplate.getVideo());
        }
        gallerySection.innerHTML = galleryArray;
      }
    });
    console.log("Nombre de médias à afficher =", i);
    likeIncrement();
  })
  .catch((err) => console.error(`Erreur :`, err));

function getPageId() {
  pageID = parseInt(new URLSearchParams(window.location.search).get("id"));
  return pageID;
}

function likeIncrement() {
  const likeIcon = document.querySelectorAll(".fa-heart");
  console.log(likeIcon.length);
  likeIcon.forEach((heart) => {
    heart.addEventListener("click", addLike);
  });
}

function addLike(event) {
  const heart = event.currentTarget;
  const likesNumberStr = heart.previousElementSibling.innerHTML;
  let likesNumber = parseInt(likesNumberStr, 10);
  likesNumber++;
  heart.previousElementSibling.innerHTML = likesNumber;
  console.log(likesNumber);
}
