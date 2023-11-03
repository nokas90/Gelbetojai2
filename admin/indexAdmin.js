import Forma from "../modules/Forma.js";
import DeleteForm from "../modules/DeleteForm.js";
// import { arPrisijunges } from "./admin.js";
// console.log(arPrisijunges);
let arOn = JSON.parse(sessionStorage.getItem("arPrisijunges"));

if(arOn === true){
  // document.querySelector('#logIn > div > form').style.display = "none";
  const div = document.createElement('div');
  const heading = document.createElement('h1');
  const headingText = document.createTextNode('Administratoriaus meniu');
  heading.appendChild(headingText);

  const petDiv = document.createElement('div');
  const petList = document.createElement('h4');
  const petListText = document.createTextNode('Esamų gyvūnų sąrašas:');
  petList.appendChild(petListText);
  const ol = document.createElement('ol');
  fetch(`http://localhost:3000/beglobiai`)
  .then(res => res.json())
  .then(data => {
    data.forEach(e => {
      console.log(e);
      const li = document.createElement('li');
      const liText = document.createTextNode(`Gyvūno vardas: ${e.vardas}, ID: ${e.id}`);
      li.appendChild(liText);
      ol.appendChild(li);
    });
  });
  petDiv.append(petList, ol);
  
  const deleteForm = new DeleteForm();
  const gyvunoForma = new Forma();

  const delNewDiv = document.createElement('div');
  delNewDiv.append(deleteForm, gyvunoForma);
  delNewDiv.classList.add('delNewDiv');

  div.append(heading, delNewDiv, petDiv);
  document.querySelector('#adminMenu').append(div);

  document.querySelector('#formosId').addEventListener('submit', e => {
    e.preventDefault();
    fetch(`http://localhost:3000/beglobiai/${e.target.elements.ivestis.valueAsNumber}`, {method: "DELETE"})
    document.querySelector('#formosId').reset();
  });
  document.querySelector('#ikelimoForma').addEventListener('submit', e => {
    e.preventDefault();
    const gyvunoDuomenys = {
      id: Date.now(),
      vardas: e.target.elements.name.value,
      amzius: e.target.elements.amzius.valueAsNumber,
      lytis: e.target.elements.lytis.value,
      veisle: e.target.elements.veisle.value,
      kastruotas: e.target.elements.kastruotas.checked,
      nuotrauka: e.target.elements.nuotrauka.value,
      aprasymas: e.target.elements.aprasymas.value
    };
    fetch(`http://localhost:3000/beglobiai`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(gyvunoDuomenys)
    });
    document.querySelector('#ikelimoForma').reset();
  });
}else{
  // const arOn = sessionStorage.getItem("arPrisijunges");
  const notworking = document.createElement('h1');
  const notworkingText = document.createTextNode('Neturite tam prieigos');
  notworking.appendChild(notworkingText);
  document.querySelector('main').appendChild(notworking);

}