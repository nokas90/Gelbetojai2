import BreedClass from "./modules/BreedClass.js";
import randomNonRepeat from "./modules/RandomNonRepeat.js";

fetch(`http://localhost:3000/beglobiai`)
.then(res => res.json())
.then(data => {
  const randomGyvunai = randomNonRepeat(1, data.length-1, 6);
  randomGyvunai.forEach(e => {
    const createCard = new BreedClass(data[e]);
    document.querySelector('#korteles > .cards').appendChild(createCard);
  });
});

document
.querySelector('#more > span')
.addEventListener('click', () => {
  window.location.href = "gyvunai.html"
});