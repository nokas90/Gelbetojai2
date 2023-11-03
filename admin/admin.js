let arPrisijunges = false; // Default neprisijunges
console.log(arPrisijunges);

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