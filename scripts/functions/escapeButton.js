import { contactModal } from '../utils/contactForm.js'
import { sortLabel, listboxContainer, activeToggle } from './dropdown.js'

export const escapeButton = () => {
//   const contactModal = document.getElementById('contact_modal') // Fenêtre modale
  const lightboxDom = document.querySelector('.lightbox')
  document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightboxDom != null) {
        lightboxDom.classList.add('fadeOut')
        window.setTimeout(() => lightboxDom.remove(), 500)
      } else if (contactModal.style.display !== 'none') {
        contactModal.style.display = 'none'
      } else if (sortLabel.classList.contains('active')) {
        activeToggle('Popularité')
        listboxContainer.focus()
      }
    }
  })
}
