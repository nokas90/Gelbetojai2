let arPrisijunges = false; // Default neprisijunges

// const CryptoJS = require("../node_modules/crypto-js");
// const key = "admin";
// const plainText = "Hello, world!";
// const encrypted = CryptoJS.AES.encrypt(plainText, key);
// console.log(encrypted);


fetch(`http://localhost:3000/administrator`)
.then(res => res.json())
.then(data => {
  document
  .querySelector('#logIn > div > form')
  .addEventListener('submit', e => {
    e.preventDefault();
    const duomenys = {
      login: e.target.elements.login.value,
      password: e.target.elements.password.value
    }
    data.forEach(duom => {
      if(duomenys.login && duomenys.password === duom.login && duom.password){
        arPrisijunges = true;
        sessionStorage.setItem("arPrisijunges", arPrisijunges);
        window.location.href = "index.html"
      }else{
        arPrisijunges = false;
      }
    });
  });
});