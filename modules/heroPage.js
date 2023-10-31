export class HeroPage {
    constructor(){
        return this.render();
    }
    render(){
        const div = document.createElement('div');
        div.classList.add('hero');

        const heading = document.createElement('h1');
        const headingText = document.createTextNode('Mums reikia Tavo palaikymo!');
        heading.appendChild(headingText);

        const par = document.createElement('p');
        const parText = document.createTextNode('Gelbėtojai globos namai kviečia aukoti ir suteikti naujus namus beglobiams gyvūnams.');
        par.appendChild(parText);

        // const image = document.createElement('img');
        // image.setAttribute('src', this);

        const div3 = document.createElement('div');
        // div.classList.add('buttons')
        
            const button = document.createElement('button');
            const buttonText = document.createTextNode('Paaukoti');
            button.appendChild(buttonText);

            const button2 = document.createElement('button');
            const buttonText2 = document.createTextNode('Prisijungti');
            button2.appendChild(buttonText2);
        
        div3.append(button, button2)

        div.append(heading, par, div3);

        return div;
    }
}