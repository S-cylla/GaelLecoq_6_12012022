// Incrémente le nombre de likes à chaque clic
export async function likeIncrement(e) {
  await e;
  const likeIcon = document.querySelectorAll(".like-icon");
  likeIcon.forEach((heart) => {
    heart.addEventListener("click", () => {
      let likesNumber = parseInt(heart.previousElementSibling.innerHTML);
      likesNumber++;
      heart.previousElementSibling.innerHTML = likesNumber;
      totalLikes();
    });
  });
}

// Affiche le total de likes et le prix dans le aside.photographer-info
export async function totalLikes(e) {
  await e;
  let totalOfLikes = 0;
  const likeIcon = document.querySelectorAll(".like-icon");
  const likeDiv = document.querySelector(".like");
  likeIcon.forEach((heart) => {
    let i = parseInt(heart.previousElementSibling.innerHTML);
    totalOfLikes += i;
  });
  if (likeDiv != null) {
    likeDiv.firstElementChild.innerHTML = totalOfLikes;
  }
}
