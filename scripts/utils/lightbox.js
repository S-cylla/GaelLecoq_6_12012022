// Création de la lightbox

import { escapeButton } from '../functions/escapeButton.js'
import { gallerySection } from '../pages/photographer.js'
import { contactModal, modal, photographerInfo, presentationBloc } from './contactForm.js'

export const lightbox = () => {
  const sortBy = document.getElementById('sort-by')
  const images = document.querySelectorAll('.lightbox-item')
  console.log(images)
  images.forEach(image => {
    image.addEventListener('keypress', keyboardLightbox)
    image.addEventListener('click', openLightbox)

    function keyboardLightbox (e) {
      if (e.key === 'Enter') {
        openLightbox()
      }
    }

    function openLightbox () {
      let imgUrl = image.src
      let imgTitle = image.alt ? image.alt : image.nextElementSibling.firstElementChild.textContent
      const links = Array.from(document.querySelectorAll('.lightbox-item'))
      const src = links.map((link) => link.src)
      let index = src.indexOf(imgUrl)
      const titles = links.map((link) => link.getAttribute('alt'))
      const dom = document.createElement('div')

      presentationBloc.setAttribute('aria-hidden', 'true')
      contactModal.setAttribute('aria-hidden', 'false')
      modal.setAttribute('aria-hidden', 'false')
      sortBy.setAttribute('aria-hidden', 'true')
      gallerySection.setAttribute('aria-hidden', 'true')
      photographerInfo.setAttribute('aria-hidden', 'true')

      dom.classList.add('lightbox')
      dom.setAttribute('aria-label', 'closeup view')
      dom.innerHTML = `<button class="lightbox__close" aria-label="close" tabindex="1"><i class="fas fa-times fa-4x"></i></button>
        <button class="lightbox__prev" aria-label="previous" tabindex="1"  role="link"><i class="fas fa-chevron-left fa-4x"></i></button>
        <button class="lightbox__next" aria-label="next" tabindex="1"  role="link"><i class="fas fa-chevron-right fa-4x"></i></button>
        <div class="lightbox__container">
        
        </div>`
      loadImg(imgUrl, imgTitle)
      document.body.appendChild(dom)
      dom.querySelector('.lightbox__close').focus()
      escapeButton()

      function loadImg (imgUrl, imgTitle) {
        console.log(imgUrl)
        if (imgUrl.includes('jpg')) {
          dom.querySelector('.lightbox__container').innerHTML = `
            <img src="${imgUrl}" alt="${imgTitle}">
            <spa, class="title">${imgTitle}</spa,>
          `
        } else {
          dom.querySelector('.lightbox__container').innerHTML = `
            <video src="${imgUrl}" alt="${imgTitle}" autoplay controls>
            </video>
            <span class="title">${imgTitle}</span>
          `
        }
        dom.querySelector('.lightbox__container').focus()
      }

      // Close
      dom.querySelector('.lightbox__close').addEventListener('click', () => {
        dom.classList.add('fadeOut')
        window.setTimeout(() => {
          dom.remove()
        }, 500)
      })

      // Affichage de l'image précédente
      dom.querySelector('.lightbox__prev').addEventListener('click', () => {
        index--
        if (index < 0) {
          index = links.length - 1
        }
        imgUrl = src[index]
        imgTitle = titles[index]
        loadImg(imgUrl, imgTitle)
      })

      // Affichage de l'image suivante
      dom.querySelector('.lightbox__next').addEventListener('click', () => {
        index++
        if (index === links.length) {
          index = 0
        }
        imgUrl = src[index]
        imgTitle = titles[index]
        loadImg(imgUrl, imgTitle)
      })

      // Nav au clavier
      dom.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          let index = src.indexOf(imgUrl)
          index--
          if (index < 0) {
            index = links.length - 1
          }
          imgUrl = src[index]
          imgTitle = titles[index]
          loadImg(imgUrl, imgTitle)
        } else if (e.key === 'ArrowRight') {
          let index = src.indexOf(imgUrl)
          index++
          if (index === links.length) {
            index = 0
          }
          imgUrl = src[index]
          imgTitle = titles[index]
          loadImg(imgUrl, imgTitle)
        }
      })
    }
  })
}
