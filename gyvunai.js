import BreedClass from "./modules/BreedClass.js";

fetch(`http://localhost:3000/beglobiai`)
.then(res => res.json())
.then(data => {
  data.forEach(pets => {
    const createCard = new BreedClass(pets);
    document.querySelector('#korteles > div').appendChild(createCard);
  });
});