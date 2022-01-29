/* eslint-disable no-undef */
import { createGallery } from '../pages/photographer.js'
import activeToggle from './dropdown.js'
import { likeIncrement } from './likesCounters.js'

const popularityItem = document.getElementById('popularity')
const dateItem = document.getElementById('date')
const titleItem = document.getElementById('title')

export function sortBy () {
  popularityItem.addEventListener('click', sortByPopularity)
  dateItem.addEventListener('click', sortByDate)
  titleItem.addEventListener('click', sortByTitle)
}

export function sortByPopularity (array) {
  const popularityArray = array.sort((a, b) => b.likes - a.likes)
  createGallery(popularityArray)
  activeToggle('Popularité')
  likeIncrement()
}

export function sortByDate (array) {
  const dateArray = array.sort((a, b) => b.date.split('-').join('') - a.date.split('-').join(''))
  createGallery(dateArray)
  activeToggle('Date')
  likeIncrement()
}

export function sortByTitle (array) {
  const titleArray = array.sort((a, b) => a.title.localeCompare(b.title))
  createGallery(titleArray)
  activeToggle('Titre')
  likeIncrement()
}
