export default class StraipsniuKorteles{
    constructor(props){
        this.props = props;
        return this.render();
    }
    render(){
        const div = document.createElement('div');
        div.classList.add('straipsnioKortele');

        const image = document.createElement('img');
        image.setAttribute('src', this.props.image);

        const header = document.createElement('h3');
        const headerText = document.createTextNode(this.props.straipsnis.header);
        header.appendChild(headerText);

        const paragraph = document.createElement('p');
        const paragraphText = document.createTextNode(this.props.straipsnioText);
        paragraph.appendChild(paragraphText);

        const button = document.createElement('button');
        const buttonText = document.createTextNode('SKAITYTI DAUGIAU');
        button.appendChild(buttonText);

        div.append(image, header, paragraph, button);

        return div;
    }
}