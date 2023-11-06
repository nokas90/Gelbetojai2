export default class Forma{
  constructor(){
    return this.render();
  }
  render(){
    const div = document.createElement('div');
    div.classList.add('addDiv');
    const forma = document.createElement('form');
    forma.setAttribute('id', 'ikelimoForma');
    const sukurimoForma = document.createElement('h4');
    const sukurimoFormaText = document.createTextNode('Įkelti beglobio gyvūno kortelę:');
    sukurimoForma.appendChild(sukurimoFormaText);
    const vardasLabel = document.createElement('label');
    const vardasLabelText = document.createTextNode('Įveskite gyvūno vardą:');
    vardasLabel.setAttribute('for', 'name');
    const vardas = document.createElement('input');
    vardas.setAttribute('type', 'text');
    vardas.setAttribute('id', 'name');
    vardas.setAttribute('name', 'name');
    vardasLabel.appendChild(vardasLabelText);

    const amziusLabel = document.createElement('label');
    amziusLabel.setAttribute('for', 'amzius');
    const amziusLabelText = document.createTextNode('Įveskite gyvūno amžių:');
    const amzius = document.createElement('input');
    amzius.setAttribute('type', 'number');
    amzius.setAttribute('id', 'amzius');
    amzius.setAttribute('name', 'amzius');
    amziusLabel.appendChild(amziusLabelText);

    const lytisLabel = document.createElement('label');
    lytisLabel.setAttribute('for', 'lytis');
    const lytisLabelText = document.createTextNode('Įveskite gyvūno lytį:');
    const lytis = document.createElement('input');
    lytis.setAttribute('type', 'text');
    lytis.setAttribute('id', 'lytis');
    lytis.setAttribute('name', 'lytis');
    lytisLabel.appendChild(lytisLabelText);

    const veisleLabel = document.createElement('label');
    veisleLabel.setAttribute('for', 'veisle');
    const veisleLabelText = document.createTextNode('Įveskite gyvūno veislę:');
    const veisle = document.createElement('input');
    veisle.setAttribute('type', 'text');
    veisle.setAttribute('id', 'veisle');
    veisle.setAttribute('name', 'veisle');
    veisleLabel.appendChild(veisleLabelText);

    const kastruotasLabel = document.createElement('label');
    kastruotasLabel.setAttribute('for', 'kastruotas');
    const kastruotasLabelText = document.createTextNode('Pažymėkite jeigu kastruotas: ');
    const kastruotas = document.createElement('input');
    kastruotas.setAttribute('type', 'radio');
    kastruotas.setAttribute('id', 'kastruotas');
    kastruotas.setAttribute('name', 'kastruotas');
    kastruotasLabel.appendChild(kastruotasLabelText);

    const nuotraukaLabel = document.createElement('label');
    nuotraukaLabel.setAttribute('for', 'nuotrauka');
    const nuotraukaLabelText = document.createTextNode('Gyvūno nuotrauka:');
    const nuotrauka = document.createElement('input');
    nuotrauka.setAttribute('type', 'url');
    nuotrauka.setAttribute('id', 'nuotrauka');
    nuotrauka.setAttribute('name', 'nuotrauka');
    nuotraukaLabel.appendChild(nuotraukaLabelText);

    const aprasymasLabel = document.createElement('label');
    aprasymasLabel.setAttribute('for', 'aprasymas');
    const aprasymasLabelText = document.createTextNode('Gyvūno aprašymas:');
    const aprasymas = document.createElement('textarea');
    aprasymas.setAttribute('id', 'aprasymas');
    aprasymas.setAttribute('name', 'aprasymas');
    aprasymasLabel.appendChild(aprasymasLabelText);

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Pateikti');

    forma.append(sukurimoForma, vardasLabel, vardas, amziusLabel, amzius, lytisLabel, lytis, veisleLabel, veisle, kastruotasLabel, kastruotas, nuotraukaLabel, nuotrauka, aprasymasLabel, aprasymas, submit);
    div.appendChild(forma);

    return div;
  }
}