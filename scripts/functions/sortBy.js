/* eslint-disable no-undef */
import { createGallery } from '../pages/photographer.js'
import activeToggle from './dropdown.js'
import { likeIncrement } from './likesCounters.js'

const sortByPopularity = document.getElementById('popularity')
const sortByDate = document.getElementById('date')
const sortByTitle = document.getElementById('title')

export default function sortBy (array) {
  sortByPopularity.addEventListener('click', () => {
    const popularityArray = array.sort((a, b) => b.likes - a.likes)
    createGallery(popularityArray)
    activeToggle('Popularité')
    likeIncrement()
  })

  sortByDate.addEventListener('click', () => {
    const dateArray = array.sort(
      (a, b) => b.date.split('-').join('') - a.date.split('-').join('')
    )
    createGallery(dateArray)
    activeToggle('Date')
    likeIncrement()
  })

  sortByTitle.addEventListener('click', () => {
    const titleArray = array.sort((a, b) => a.title.localeCompare(b.title))
    createGallery(titleArray)
    activeToggle('Titre')
    likeIncrement()
  })
}
