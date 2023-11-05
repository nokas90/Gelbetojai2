import Straipsnis from "./StraipsnioKlase.js";
const objektas = JSON.parse(localStorage.getItem('pasiulymas'));
// console.log(objektas);
const klase = new Straipsnis(objektas);
document.querySelector('#straipsnis').appendChild(klase);