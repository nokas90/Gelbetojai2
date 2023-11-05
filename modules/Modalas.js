export default class Modalas{
  constructor(){
    return this.render();
  }
  render(){
    const modalas = document.createElement('dialog');
    modalas.setAttribute('id', 'petModal');
    const close = document.createElement('span')
    close.classList.add('bi');
    close.classList.add('bi-x-square');
    
    modalas.addEventListener('click', e => {
      const modalXY = modalas.getBoundingClientRect();
      if(
        e.clientX < modalXY.left ||
        e.clientX > modalXY.right ||
        e.clientY < modalXY.top ||
        e.clientY > modalXY.bottom
      ){
        this.closeModal(modalas);
      }
    });
    modalas.addEventListener('keydown', e => {
      if(e.code === "Escape"){
        this.closeModal(modalas);
      }
    });
    close.addEventListener('click', () => this.closeModal(modalas));
    modalas.appendChild(close);
    return modalas;
  }
  closeModal(modal){
    modal.close();
    modal.remove();
  }
}