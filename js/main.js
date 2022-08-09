document.getElementById("menuIcon").addEventListener("click", aparece);


function aparece() {
  document.getElementById("menu").classList.toggle('open');
}

let barra = document.querySelector("#scroll");
window.onscroll = function captureScroll() {
  //console.log("Vertical: " + window.scrollY);
  let max = document.body.scrollHeight - innerHeight;
  barra.style.width = `${(window.scrollY / max) * 100}%`;
};


document.getElementById("upBTN").addEventListener("click", subir);

function subir(){
  setTimeout(function(){
    window.scrollTo({top:0, behavior:'smooth'});
  },200)
}







document.getElementById("inputName").addEventListener("change", validacionName);
  function validacionName() {
    let inputName = document.getElementById('inputName').value;
    let hrName = document.getElementById('hrName');
      if(inputName.length > 200 || inputName.length < 2){
    hrName.style.color = 'red';
    console.log('mecumplo')
  }
  else{
    hrName.style.color = '#42eb63';
    console.log('nomecumplo')
  }
}
document.getElementById("inputEmail").addEventListener("change", validacionEmail);
  function validacionEmail() {
    let inputEmail = document.getElementById('inputEmail').value;
    let hrEmail = document.getElementById('hrEmail');
      if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail)){
    hrEmail.style.color = '#42eb63';
    console.log('MEumplo')
  }
  else{
    hrEmail.style.color = 'red';
    console.log('NOmecumplo')
  }
}
function validacionCkeckBox() {
  
    let inputCheck = document.getElementById('inputCheck');
    let inputTextCheck = document.getElementById('inputTextCheck');
      if(inputCheck.checked === false){
        inputTextCheck.style.color = 'red';
    console.log('MEumplo')
    inputTextCheck.innerHTML += '<br><br>* Este campo obligatorio'
  }
  else{
    inputTextCheck.style.color = '#42eb63';
  }
}

  function validar(){
  validacionName();
  validacionEmail();
  validacionCkeckBox();

}
document.getElementById("btnSend").addEventListener("click", validar);
