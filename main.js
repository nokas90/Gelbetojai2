import NaujienlaiskioTekstas from "./modules/NaujienlaiskioKlase.js";
document.querySelector('#naujienlaiskioMygtukas').addEventListener('click', e => {
    // console.log(e);
    e.target.parentElement.remove();
    const naujienlaiskis = new NaujienlaiskioTekstas();
    document.querySelector('#naujienlaiskis > div').appendChild(naujienlaiskis);
});