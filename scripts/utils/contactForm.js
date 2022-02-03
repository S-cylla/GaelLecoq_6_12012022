/* eslint-disable prefer-regex-literals */
// DOM
export const presentationBloc = document.getElementById('presentation-bloc') // Bloc de présentation du photographe
export const contactModal = document.getElementById('contact_modal') // Fenêtre modale
export const modal = document.querySelector('.modal') // Fenêtre modale
export const photographerInfo = document.querySelector('.photographer-info') // Affichage des like + prix
const contactButton = document.getElementById('contact__button') // Button "Contactez-moi"
const closeButton = document.getElementById('close-button') // Button de fermeture de la modale
const contactForm = document.getElementById('contact-form') // Formulaire de contact
const formData = document.querySelectorAll('.form-data') // Champs du formulaire
const textControl = document.querySelectorAll('.text-control') // Input du formulaire
const firstNameInput = document.getElementById('firstname') // Input prénom
const lastNameInput = document.getElementById('lastname') // Input nom
const emailInput = document.getElementById('email') // Input email
const messageInput = document.getElementById('message') // Input message
const errorFirst = document.getElementById('error-first') // Erreur prénom
const errorLast = document.getElementById('error-last') // Erreur nom
const errorEmail = document.getElementById('error-email') // Erreur e-mail
const errorMessage = document.getElementById('error-message') // Erreur message
const errorSubmit = document.getElementById('error-submit') // Erreur submit
const sortBy = document.getElementById('sort-by') // Menu de tri de la galerie
const gallerySection = document.querySelector('.gallery-section') // Section d'affichage de la galerie
const submitButton = document.getElementById('submitButton')

// Évènements

contactButton.addEventListener('click', displayModal) // Ouverture de la modale
closeButton.addEventListener('click', closeModal)
formData[0].addEventListener('change', firstnameValidation) // Validation Prénom
formData[1].addEventListener('change', lastnameValidation) // Validation Nom
formData[2].addEventListener('change', emailValidation) // Validation Email
formData[3].addEventListener('change', messageValidation) // Validation Email
submitButton.addEventListener('click', formValidation) // Clic sur le bouton submit
submitButton.addEventListener('click', (e) => {
  if (e.key === 'Enter') {
    formValidation()
  }
})

function displayModal () {
  contactModal.style.display = 'flex'
  presentationBloc.setAttribute('aria-hidden', 'true')
  contactModal.setAttribute('aria-hidden', 'false')
  modal.setAttribute('aria-hidden', 'false')
  sortBy.setAttribute('aria-hidden', 'true')
  gallerySection.setAttribute('aria-hidden', 'true')
  photographerInfo.setAttribute('aria-hidden', 'true')
  closeButton.focus()
}

function closeModal () {
  contactModal.style.display = 'none'
}

// Validation "Prénom"
function firstnameValidation () {
  const nameRegex = new RegExp(
    /^[a-zA-ZáàâäãåæéèêëîïôöòøœûùûüÀÁÂÄÃÅÆÉÈÊËÌÍÎÏÒÓÔÕÖØÙÚÛÜ,.'-]+$/
  )
  if (
    firstNameInput.value.length !== 0 &&
    nameRegex.test(firstNameInput.value)
  ) {
    // Si le nombre de caractères est > 1
    firstNameInput.style.border = '2px solid #279E7A' // La bordure devient verte
    errorFirst.style.display = 'none'
    return true // Input valide
  } else {
    errorFirst.style.display = 'block'
    errorFirst.innerHTML =
      'Le prénom doit être renseigné, sans caractères spéciaux' // Message d'erreur
    firstNameInput.style.border = '2px solid #901C1C' // La bordure devient rouge
    return false // Input toujours invalide
  }
}

// Validation "Nom"
function lastnameValidation () {
  const nameRegex = new RegExp(
    /^[a-zA-ZáàâäãåæéèêëîïôöòøœûùûüÀÁÂÄÃÅÆÉÈÊËÌÍÎÏÒÓÔÕÖØÙÚÛÜ,.'-]+$/
  )
  if (lastNameInput.value.length !== 0 && nameRegex.test(lastNameInput.value)) {
    lastNameInput.style.border = '2px solid #279E7A'
    errorLast.style.display = 'none'
    return true
  } else {
    errorLast.style.display = 'block'
    errorLast.innerHTML =
      'Le nom doit être renseigné, sans caractères spéciaux'
    lastNameInput.style.border = '2px solid #901C1C'
    return false
  }
}

// Validation "E-mail"
function emailValidation () {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  )
  if (emailRegex.test(emailInput.value)) {
    emailInput.style.border = '2px solid #279E7A'
    errorEmail.style.display = 'none'
    return true
  } else {
    errorEmail.style.display = 'block'
    errorEmail.innerHTML = 'Adresse e-mail invalide'
    emailInput.style.border = '2px solid #901C1C'
    return false
  }
}

function messageValidation () {
  if (messageInput.value.length !== 0) {
    messageInput.style.border = '2px solid #279E7A'
    errorMessage.style.display = 'none'
  } else {
    errorMessage.style.display = 'block'
    errorMessage.innerHTML = 'Veuillez écrire votre message'
    messageInput.style.border = '2px solid #901C1C'
    return false
  }
}

// Validation du formulaire
function formValidation (e) {
  e.preventDefault() // Bloque la soumission du formulaire
  const isFormValid = [] // Crée un tableau pour y mettre les fonctions créées
  isFormValid.push(firstnameValidation())
  isFormValid.push(lastnameValidation())
  isFormValid.push(emailValidation())
  isFormValid.push(messageValidation())

  if (!isFormValid.includes(false)) {
    submitForm()
    for (let i = 0; i < textControl.length; i++) {
      const element = textControl[i]
      element.style.border = 'none'
    }
  } else {
    errorSubmit.style.display = 'block'
    errorSubmit.innerHTML = 'Veuillez remplir tous les champs'
  }
}

function submitForm () {
  console.log(
    `
    Prénom : ${firstNameInput.value}
    Nom : ${lastNameInput.value}
    Email : ${emailInput.value}
    Message : "${messageInput.value}"
    `
  )
  contactForm.reset()
  closeModal()
}
