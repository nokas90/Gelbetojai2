import BreedClass from "./modules/BreedClass.js";
import randomNonRepeat from "./modules/RandomNonRepeat.js";

fetch(`http://localhost:3000/beglobiai`)
.then(res => res.json())
.then(data => {
  // for(let i = 0; i < 6; i++){
  //   const random = Math.floor(Math.random()*data.length);
  //   console.log(data[random]);
  //   const createCard = new BreedClass(data[random]);
  //   document.querySelector('#korteles > .cards').appendChild(createCard);
  // };
  const randomGyvunai = randomNonRepeat(1, data.length-1, 6);
  console.log(randomGyvunai);
  randomGyvunai.forEach(e => {
    const createCard = new BreedClass(data[e]);
    console.log(e);
    document.querySelector('#korteles > .cards').appendChild(createCard);
  });
});

document
.querySelector('#more > span')
.addEventListener('click', () => {
  window.location.href = "gyvunai.html"
});