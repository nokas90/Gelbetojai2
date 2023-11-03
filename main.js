import NaujienlaiskioTekstas from "./modules/NaujienlaiskioKlase.js";

import StraipsniuKorteles from "./modules/StraipsniuKorteliuKlase.js";

document.querySelector('#naujienlaiskioMygtukas').addEventListener('click', e => {
    // console.log(e);
    e.target.parentElement.remove();
    const naujienlaiskis = new NaujienlaiskioTekstas();
    document.querySelector('#naujienlaiskis > div').appendChild(naujienlaiskis);
});

fetch(`http://localhost:3000/straipsnis`)
.then(res => res.json())
.then(data => {
  data.forEach(straipsnis => {
    const naujasStraipsnis = new StraipsniuKorteles(straipsnis);
    document.querySelector('#straipsniai').appendChild(naujasStraipsnis);
  });
});

