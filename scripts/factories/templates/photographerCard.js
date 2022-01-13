import Photographer from "../models/photograph.js";

//getCard(Photographer)

function getCard(photographer) {
    console.log("ok");
    const picture = `assets/photographers/${photographer.portrait}`;

    return `
    <img src="${picture}" class="profile-pic">
    <h2 class="name">${photographer.name}</h2>
    <h3 class="location">${photographer.city}, ${photographer.country}</h3>
    <p class="tagline">${photographer.tagline}</p>
    <span class="price">${photographer.price}</span>
    `
}