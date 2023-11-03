import Modalas from "./Modalas.js";

export default class BreedClass{
  constructor(props){
    this.props = props;
    return this.render();
  }
  render(){
    const div = document.createElement('div');
    const image = document.createElement('img');
    image.setAttribute('src', this.props.nuotrauka);
    const infoDiv = document.createElement('div');
    infoDiv.setAttribute('id', 'moreInfo');
    const heading = document.createElement('h1');
    const headingText = document.createTextNode(this.props.vardas);
    heading.appendChild(headingText);
    const moreInfo = document.createElement('h2');
    const moreInfoText = document.createTextNode('DAUGIAU...');
    moreInfo.appendChild(moreInfoText);
    infoDiv.append(heading, moreInfo);
    div.append(image, infoDiv);
    moreInfo.addEventListener('click', () => this.modal());
    return div;
  }
  modal(){
    const modalOpen = new Modalas();
    const modalInfo = document.createElement('h1');
    const modalInfoText = document.createTextNode('Informacija apie beglobį:');
    modalInfo.appendChild(modalInfoText);
    const image = document.createElement('img');
    image.setAttribute('src', this.props.nuotrauka);
    const vardas = document.createElement('p');
    const vardasText = document.createTextNode(`Vardas: ${this.props.vardas}`);
    vardas.appendChild(vardasText);
    const amzius = document.createElement('p');
    const amziusText = document.createTextNode(`Amžius: ${this.props.amzius} ${this.props.amzius <= 9 ? 'metai' : 'metų'}`);
    amzius.appendChild(amziusText);
    const lytis = document.createElement('p');
    const lytisText = document.createTextNode(`Lytis: ${this.props.lytis}`);
    lytis.appendChild(lytisText);
    const veisle = document.createElement('p');
    const veisleText = document.createTextNode(`Veislė: ${this.props.veisle}`);
    veisle.appendChild(veisleText);
    const kastruota = document.createElement('p');
    const kastruotaText = document.createTextNode(`Kastruota/sterilizuota: ${this.props.kastruotas ? 'Taip' : 'Ne'}`);
    kastruota.appendChild(kastruotaText);
    const aprasymas = document.createElement('p');
    const aprasymasText = document.createTextNode(`Aprašymas: ${this.props.aprasymas}`);
    aprasymas.appendChild(aprasymasText);

    modalOpen.append(modalInfo, image, vardas, amzius, lytis, veisle, kastruota, aprasymas);
    document.querySelector('#korteles').append(modalOpen);
    modalOpen.showModal();
  }
}