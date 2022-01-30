/* eslint-disable no-undef */
import { createGallery, gallery } from '../pages/photographer.js'
import activeToggle from './dropdown.js'
import { likeIncrement } from './likesCounters.js'
import { lightbox } from '../utils/lightbox.js'

const popularityItem = document.getElementById('popularity')
const dateItem = document.getElementById('date')
const titleItem = document.getElementById('title')

export function sortBy () {
  popularityItem.addEventListener('click', sortByPopularity)
  dateItem.addEventListener('click', sortByDate)
  titleItem.addEventListener('click', sortByTitle)
}

export function sortByPopularity () {
  const popularityArray = gallery.sort((a, b) => b.likes - a.likes)
  createGallery(popularityArray)
  activeToggle('Popularité')
  lightbox()
  likeIncrement()
}

export function sortByDate () {
  const dateArray = gallery.sort((a, b) => b.date.split('-').join('') - a.date.split('-').join(''))
  createGallery(dateArray)
  activeToggle('Date')
  lightbox()
  likeIncrement()
}

export function sortByTitle () {
  const titleArray = gallery.sort((a, b) => a.title.localeCompare(b.title))
  createGallery(titleArray)
  activeToggle('Titre')
  lightbox()
  likeIncrement()
}
