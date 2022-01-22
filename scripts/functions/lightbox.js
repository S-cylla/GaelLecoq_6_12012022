// Création de la lightbox

function openLightbox(url, title) {
  let imgUrl = url;
  let imgTitle = title;
  const links = Array.from(document.querySelectorAll(".lightbox-item"));
  const gallery = links.map((link) => link.getAttribute("src"));
  let index = gallery.indexOf(imgUrl);
  let titles = links.map((link) => link.getAttribute("alt"));
  const dom = document.createElement("div");
  dom.classList.add("lightbox");
  dom.innerHTML = `<button class="lightbox__close"><i class="fas fa-times fa-4x"></i></button>
    <button class="lightbox__prev"><i class="fas fa-chevron-left fa-4x"></i></button>
    <button class="lightbox__next"><i class="fas fa-chevron-right fa-4x"></i></button>
    <div class="lightbox__container">
    
    </div>`;
  loadImg(url, title);
  document.body.appendChild(dom);

  function loadImg(url, title) {
    dom.querySelector(".lightbox__container").innerHTML = `
      <img src="${url}" class="lightbox-img">
      <p class="lightbox-img-title">${title}</p>
  `;
  }

  // Close
  dom.querySelector(".lightbox__close").addEventListener("click", () => {
    dom.classList.add("fadeOut");
    window.setTimeout(() => {
      dom.remove();
    }, 500);
  });

  // Affichage de l'image précédente
  dom.querySelector(".lightbox__prev").addEventListener("click", () => {
    index--;
    if (index < 0) {
      index = links.length - 1;
    }
    imgUrl = gallery[index];
    imgTitle = titles[index];
    loadImg(imgUrl, imgTitle);
  });

  // Affichage de l'image suivante
  dom.querySelector(".lightbox__next").addEventListener("click", () => {
    index++;
    if (index == links.length) {
      index = 0;
    }
    imgUrl = gallery[index];
    imgTitle = titles[index];
    loadImg(imgUrl, imgTitle);
  });

  // Nav au clavier
  document.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      dom.classList.add("fadeOut");
      window.setTimeout(() => {
        dom.remove();
      }, 500);
    } else if (e.key === "ArrowLeft") {
      let index = gallery.indexOf(imgUrl);
      index--;
      if (index < 0) {
        index = links.length - 1;
      }
      imgUrl = gallery[index];
      imgTitle = titles[index];
      loadImg(imgUrl, imgTitle);
    } else if (e.key === "ArrowRight") {
      let index = gallery.indexOf(imgUrl);
      index++;
      if (index == links.length) {
        index = 0;
      }
      imgUrl = gallery[index];
      imgTitle = titles[index];
      loadImg(imgUrl, imgTitle);
    }
  });
}

// class Lightbox {
//   static init() {
//     const links = Array.from(document.querySelectorAll(".lightbox-item"));
//     const gallery = links.map((link) => link.getAttribute("src"));
//     links.forEach((link) => {
//       link.addEventListener("click", (e) => {
//         console.log("clic");
//         new Lightbox(
//           e.currentTarget.getAttribute("src"),
//           e.currentTarget.getAttribute("alt")
//         );
//       });
//     });
//   }

//   /**
//    *
//    * @param {string} url URL de l'image
//    * @param {string} title Titre de l'image
//    */

//   constructor(url, title) {
//     const element = this.buildDOM(url, title);
//     document.body.appendChild(element);
//   }

//   // /**
//   //  *
//   //  * @param {MouseEvent} e Ferme la lightbox
//   //  */
//   // close(e) {
//   //   e.preventDefault();
//   //   // this.element.classList.add("fadeOut");
//   //   window.setTimeout(() => {
//   //     // this.element.remove()
//   //   }, 500);
//   // }

//   /**
//    *
//    * @param {string} url URL de l'image
//    * @param {string} title Titre de l'image
//    * @return {HTMLElement}
//    */

//   buildDOM(url, title) {
//     const dom = document.createElement("div");
//     dom.classList.add("lightbox");
//     dom.innerHTML = `<button class="lightbox__close"><i class="fas fa-times fa-4x"></i></button>
//       <button class="lightbox__prev"><i class="fas fa-chevron-left fa-4x"></i></button>
//       <button class="lightbox__next"><i class="fas fa-chevron-right fa-4x"></i></button>
//       <div class="lightbox__container">
//         <img src="${url}" class="lightbox-img">
//         <p class="lightbox-img-title">${title}</p>
//       </div>`;
//     dom
//       .querySelector(".lightbox__close")
//       // .addEventListener("click", this.close.bind(this));
//       .addEventListener("click", () => {
//         dom.classList.add("fadeOut");
//         window.setTimeout(() => {
//           dom.remove();
//         }, 500);
//       });
//     return dom;
//   }
// }

// Lightbox.init();
