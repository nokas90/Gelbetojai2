export default class DeleteForm{
  constructor(){
    return this.render();
  }
  render(){
    const div = document.createElement('div');
    div.classList.add('deleteDiv');
    const deleteInfo = document.createElement('h4');
    const deleteInfoText = document.createTextNode('Pašalinti gyvūną iš sąrašo:');
    deleteInfo.appendChild(deleteInfoText);
    const forma = document.createElement('form');
    const mainHeading = document.createElement('label');
    const mainHeadingText = document.createTextNode('Įveskite norimo pašalinti gyvūno ID:');
    mainHeading.appendChild(mainHeadingText);
    forma.setAttribute('id', 'formosId');
    const idInput = document.createElement('input');
    idInput.setAttribute('type', 'number');
    idInput.setAttribute('id', 'ivestis');
    idInput.setAttribute('name', 'ivestis');
    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Ištrinti');
    forma.append(mainHeading, idInput, submit);
    div.appendChild(forma, deleteInfo);
    return div;
  }
}