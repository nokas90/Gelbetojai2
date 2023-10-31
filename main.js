import {HeroPage} from './modules/heroPage.js';

const heroDiv = new HeroPage(hero);
console.log(heroDiv)
document.querySelector('#hero').appendChild(heroDiv);