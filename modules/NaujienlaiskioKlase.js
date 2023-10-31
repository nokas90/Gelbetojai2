export default class NaujienlaiskioTekstas{
    constructor(){
        return this.render();
    }
    render(){
        const div = document.createElement('div');
        div.classList.add('naujasNaujienlaiskioTekstas');

        const paragraph = document.createElement('p');
        const paragraphText = document.createTextNode('Naujienlaiškis užprenumeruotas, pasitikrinkite savo el. pašto dėžutę :)');
        paragraph.appendChild(paragraphText);

        div.appendChild(paragraph);

        return div;
    }
}