import { gallery } from '../pages/photographer.js'
import { sortBy, sortByDate, sortByPopularity, sortByTitle } from './sortBy.js'

const sortLabel = document.getElementById('sort-label') // Label du menu déroulant
const listboxContainer = document.getElementById('listbox-container') // Container de la listbox
const listbox = document.getElementById('options-list') // Ul de la liste des options
const firstOption = listbox.firstElementChild

function dropdown () {
  sortLabel.addEventListener('click', () => activeToggle('Popularité'))
  listboxContainer.addEventListener('keypress', dropD)
}

dropdown()

function dropD (e) {
  if (e.key === 'Enter') {
    activeToggle('Popularité')
    sortBy()
  }
}

export default function activeToggle (value) {
  if (!sortLabel.classList.contains('active')) {
    listboxContainer.setAttribute('aria-expanded', 'true')
    sortLabel.classList.add('active')
    firstOption.focus()
    window.addEventListener('keydown', keyboardNav)
  } else {
    sortLabel.classList.remove('active')
    sortLabel.textContent = value
    listboxContainer.setAttribute('aria-expanded', 'false')
    window.removeEventListener('keydown', keyboardNav)
  }
}

function keyboardNav (e) {
  e.preventDefault()
  let activeElement = document.activeElement
  activeElement.setAttribute('aria-selected', 'true')
  if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
    activeElement.setAttribute('aria-selected', 'false')
    if (e.key === 'ArrowUp') {
      if (activeElement.previousElementSibling != null) {
        activeElement = activeElement.previousElementSibling
      } else {
        activeElement = activeElement.parentNode.lastElementChild
      }
    } else if (e.key === 'ArrowDown') {
      if (activeElement.nextElementSibling != null) {
        activeElement = activeElement.nextElementSibling
      } else {
        activeElement = activeElement.parentNode.firstElementChild
      }
    }
    activeElement.setAttribute('aria-selected', 'true')
    activeElement.focus()
  }
  if (e.key === 'Escape') {
    activeToggle('Popularité')
    listboxContainer.focus()
  } if (e.key === 'Enter') {
    if (e.target.id === 'popularity') {
      sortByPopularity(gallery)
    } else if (e.target.id === 'date') {
      sortByDate(gallery)
    } else if (e.target.id === 'title') {
      sortByTitle(gallery)
    }
  }
}
