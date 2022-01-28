/* eslint-disable no-undef */
import { createGallery } from '../pages/photographer.js'
import activeToggle from './dropdown.js'
import { likeIncrement } from './likesCounters.js'

const popularityItem = document.getElementById('popularity')
const dateItem = document.getElementById('date')
const titleItem = document.getElementById('title')

export default function sortBy (array) {
  popularityItem.addEventListener('click', sortByPopularity)
  dateItem.addEventListener('click', sortByDate)
  titleItem.addEventListener('click', sortByTitle)

  function sortByPopularity () {
    const popularityArray = array.sort((a, b) => b.likes - a.likes)
    createGallery(popularityArray)
    activeToggle('Popularité')
    likeIncrement()
  }

  function sortByDate () {
    const dateArray = array.sort(
      (a, b) => b.date.split('-').join('') - a.date.split('-').join('')
    )
    createGallery(dateArray)
    activeToggle('Date')
    likeIncrement()
  }

  function sortByTitle () {
    const titleArray = array.sort((a, b) => a.title.localeCompare(b.title))
    createGallery(titleArray)
    activeToggle('Titre')
    likeIncrement()
  }
}
