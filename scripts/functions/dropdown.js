const sortLabel = document.getElementById("sort-label"); // Label du menu déroulant
const optionsList = document.getElementById("options-list"); // Liste des options
const popularityFilter = document.getElementById("popularity");
const dateFilter = document.getElementById("date");
const titleFilter = document.getElementById("title");
const galleryDiv = document.querySelector(".gallery-section");
const articles = document.querySelectorAll(".article");

export default async function sortBy(e) {
  await e;

  sortLabel.addEventListener("click", () => {
    sortLabel.classList.toggle("active");
  });

  popularityFilter.addEventListener("click", () => {
    console.log(e);
    let galleryArray = Array.from(galleryDiv);
    console.log(galleryDiv);
    console.log(galleryArray);
    console.log(articles);
  });

  //Mettre tous les articles dans un array
  //Récupérer tous les likes
  //Réorganiser les articles selon les like avec array.sort(a, b => b - a)
}
