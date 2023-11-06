export default class Straipsnis{
    constructor(props){
        this.props = props;
        return this.render();
    }
    render(){
        const div = document.createElement('div');

        const image = document.createElement('img');
        image.setAttribute('src', this.props.image);

        const header = document.createElement('h1');
        const headerText = document.createTextNode(this.props.header);
        header.appendChild(headerText);

        const paragraph = document.createElement('p');
        const paragraphText = document.createTextNode(this.props.straipsnioText);
        paragraph.appendChild(paragraphText);

        div.append(image, header, paragraph);

        return div;
    }
}