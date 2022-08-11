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
    console.log('ME cumplo')
  }
  else{
    hrEmail.style.color = 'red';
    console.log('NO me cumplo')
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

  function validar(e){
    e.preventDefault();
  validacionName();
  validacionEmail();
  validacionCkeckBox();

}

let form = document.getElementById('form')
form.addEventListener("submit", validar);


form.addEventListener("submit", async () =>{
  let dataInputName = document.getElementById('inputName').value;
  let dataInputEmail = document.getElementById('inputEmail').value;
  let url = 'https://jsonplaceholder.typicode.com/posts';

  const data = JSON.stringify({name: dataInputName, email: dataInputEmail});
 try{
  const response = await fetch(url,{method:'POST',body:data} )
  if (response.ok){
    const jsonResponse = await response.json();
    console.log('me envie')
  }}
  catch(error) {
    console.log(error)
  }
})

// creación de popup/modal

//la ventana modal aparece despues de 5 segundos 
 setTimeout(()=>{
  let modal = document.getElementById('popup');
  modal.style.display = 'block';
 },5000)

//cerrar la ventana con X
document.getElementById("closeModal").addEventListener("click",()=>{ 
  let modal = document.getElementById('popup');
  modal.style.display = "none"; });

//cerrar la ventana con escape
document.body.addEventListener('keydown', (event)=>{
  let modal = document.getElementById('popup');
  if (event.key==='Escape'){
    modal.style.display = "none";
  }
})

//cerrar la ventana haciendo click fuera 
let modal = document.getElementById('popup');
document.body.addEventListener('click',(e)=>{
  if(!e.target.className.includes('popup')){
    modal.style.display = 'none';
  }
})


//aparece modal con scroll del 25%
/*let window =window.onscroll
window = function puntoScroll() {
  let scrollTot = document.body.scrollHeight - innerHeight;
  let unCuarto = scrollTot/4
  let ventanaModal = document.getElementById('popup');
  console.log(Math.round(window.scrollY)== unCuarto)
  console.log(Math.round(window.scrollY))
  if(Math.round(window.scrollY)== unCuarto){
   ventanaModal.style.display = 'block'
   console.log('meejecuto')
  }
};*/

window.onscroll = function () {
  let ventanaModal = document.getElementById('popup');
  const longitud = Math.round(
    (100 * window.scrollY) / (document.body.clientHeight - window.innerHeight)
  );
  totalScreen = `${longitud}%`;

  if (longitud == 25) {
    ventanaModal.style.display = 'block'
    ventanaModal.style.position = 'fixed'
    ventanaModal.style.top = '200px';
    ventanaModal.style.zIndex = 2000;
  }
};

// validacion del email y checkbox

 document.getElementById("inputEmailNewsletter").addEventListener("change", validarEmail = () => {
  let emailContenido = document.getElementById('inputEmailNewsletter').value;
  let emailInp = document.getElementById('inputEmailNewsletter')
      if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailContenido)){
        emailInp.style.border = '1px solid #42eb63';
        console.log('ME cumplo')
      }
      else{
        emailInp.style.border = '1px solid red';
        console.log('NO me cumplo')
      }
      });

function validarCkeckBox() {
  let inputCB = document.getElementById('inputCheckboxNewsletter');
  let inputCBText = document.getElementById('textoCheckboxPopup');
    if(!inputCB.checked){
      inputCBText.style.color = 'red';
      console.log('entro aqui')
}
else{
  inputCBText.style.color = '#42eb63';
}
} 

validarEmail();
validarCkeckBox();

/*function validacion () {

}


formulario.addEventListener("submit", validacion)*/
let formulario = document.getElementById('form-newsletter')
//envio de datos por POST

formulario.addEventListener("submit", async () =>{
  let dataEmail = document.getElementById('inputEmailNewsletter').value;
  let url = 'https://jsonplaceholder.typicode.com/posts';

  const data = JSON.stringify({email: dataEmail});
 try{
  const response = await fetch(url,{method:'POST',body:data} )
  if (response.ok){
    const jsonResponse = await response.json();
    console.log('enviado')
  }}
  catch(error) {
    console.log(error)
  }
})