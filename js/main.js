//menu hamburguesa desplegable

document.getElementById("menuIcon").addEventListener("click", aparece);
function aparece() {
  document.getElementById("menu").classList.toggle('open');
  if(document.getElementById('menu').getAttribute("class")=="open"){
    document.getElementById("menuIcon").src="/assets/img/icons/x-solid.svg";
    document.getElementById("menuIcon").style.width = '30px';
  }
  else{
    document.getElementById("menuIcon").src="/assets/img/icons/menu.svg";
  }
}
// barra de scroll

let barra = document.querySelector("#scroll");
window.onscroll = function captureScroll() {
  //console.log("Vertical: " + window.scrollY);
  let max = document.body.scrollHeight - innerHeight;
  barra.style.width = `${(window.scrollY / max) * 100}%`;
  scrolPopup ();
};

// boton goUp

document.getElementById("upBTN").addEventListener("click", subir);

function subir(){
  setTimeout(function(){
    window.scrollTo({top:0, behavior:'smooth'});
  },200)
}

//validacion de formulario
document.getElementById("inputName").addEventListener("change", validacionName);
function validacionName() {
  let inputName = document.getElementById('inputName').value;
  let hrName = document.getElementById('hrName');
  if(inputName.length > 200 || inputName.length < 2){
    hrName.style.color = 'red';
    console.log('mecumplo')
    return false;
  }
  else{
    hrName.style.color = '#42eb63';
    console.log('nomecumplo')
    return true;
  }
}
document.getElementById("inputEmail").addEventListener("change", validacionEmail);
function validacionEmail() {
  let inputEmail = document.getElementById('inputEmail').value;
  let hrEmail = document.getElementById('hrEmail');
  if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail)){
    hrEmail.style.color = '#42eb63';
    console.log('ME cumplo')
    return true;
  }
  else{
    hrEmail.style.color = 'red';
    console.log('NO me cumplo')
    return false;
  }
}
function validacionCkeckBox() {
  
  let inputCheck = document.getElementById('inputCheck');
  let inputTextCheck = document.getElementById('inputTextCheck');
  let msjError = document.getElementById('msjError')
  msjError.innerHTML = ''
  if(inputCheck.checked === false){
    inputTextCheck.style.color = 'red';
    msjError.style.color = 'red';
    msjError.innerHTML = '<br><br>* Este campo obligatorio'
    return false;
  }
  else{
    inputTextCheck.style.color = '#42eb63';
    return true;
  }
}

function validar(e){
  e.preventDefault();
  return (validacionName() && validacionEmail() && validacionCkeckBox())
}

let form = document.getElementById('form')
form.addEventListener("submit", validar);

// envio de datos por POST

form.addEventListener("submit", async (e) =>{
  e.preventDefault();
  console.log(validar(e))
  if(validar(e)){
    let dataInputName = document.getElementById('inputName').value;
    let dataInputEmail = document.getElementById('inputEmail').value;
    let url = 'https://jsonplaceholder.typicode.com/posts';

    const data = JSON.stringify({name: dataInputName, email: dataInputEmail});
    try{
      const response = await fetch(url,{method:'POST',body:data} )
      if (response.ok){
        const jsonResponse = await response.json();
        console.log('me envie')
      }
    }
    catch(error) {
        console.log(error)
    }
  }
})
 

// creación de popup/modal
function hide (){
  let modal = document.getElementById('popup');
  modal.style.display = "none";
}

//la ventana modal aparece despues de 5 segundos 

const showNewsletterModal = () => {
  localStorage.setItem("showNewsletter", true);
}

if (typeof(Storage) !== "undefined") {
  // 1) ¿Le tengo que mostrar la modal?
  if(!localStorage.getItem("showNewsletter")) {
    // Sí... --> Mostrar la ventana modal (dentro de 5 segundos)
    setTimeout(() => {
      let modal = document.getElementById('popup');
      modal.style.display = 'block';
    }, 5000);
  }

  //cerrar la ventana con X
  document.getElementById("closeModal").addEventListener("click",()=>{ 
    hide();
    showNewsletterModal();
  });

  //cerrar la ventana con escape
  document.body.addEventListener('keydown', (event)=>{
    if (event.key==='Escape'){
      hide();
    }
    showNewsletterModal();
  })

  //cerrar la ventana haciendo click fuera 

  document.body.addEventListener('click',(e)=>{
    if(!e.target.className.includes('popup')){
      hide();
    }
    showNewsletterModal();
  })
}

//aparece modal con scroll del 25%

function scrolPopup () {
  let popupActive = localStorage.getItem("showNewsletter")
  if(!popupActive){
    let ventanaModal = document.getElementById('popup');
    const longitud = Math.round((100 * window.scrollY) / (document.body.clientHeight - window.innerHeight));
    totalScreen = `${longitud}%`;

  if (longitud == 25) {
    ventanaModal.style.display = 'block'
    ventanaModal.style.position = 'fixed'
    ventanaModal.style.top = '200px';
    ventanaModal.style.zIndex = 2000;
  }
  }
 
};

// validacion del email y checkbox

document.getElementById("inputEmailNewsletter").addEventListener("change", validarEmail);

function validarEmail () {
  let emailContenido = document.getElementById('inputEmailNewsletter').value;
  let emailInp = document.getElementById('inputEmailNewsletter')
    if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailContenido)){
      emailInp.style.border = '1px solid #42eb63';
      console.log('ME cumplo')
      return true;
    }
    else{
      emailInp.style.border = '1px solid red';
      console.log('NO me cumplo')
      return false;
    }
}
function validarCkeckBox() {
  let inputCB = document.getElementById('inputCheckboxNewsletter');
  let inputCBText = document.getElementById('textoCheckboxPopup');
  if(!inputCB.checked){
    inputCBText.style.color = 'red';
    console.log('entro aqui')
    return false;
  }
  else{
    inputCBText.style.color = '#42eb63';
    return true;
  }
} 

let formulario = document.getElementById('form-newsletter')
formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  if( validarEmail() && validarCkeckBox()) {
    showNewsletterModal();
    let dataEmail = document.getElementById('inputEmailNewsletter').value;
    let url = 'https://jsonplaceholder.typicode.com/posts';
    const allData = JSON.stringify({email: dataEmail});
    try{
      const response = await fetch(url,{method:'POST',body:allData} )
      if (response.ok){
        const jsonResponse = await response.json();
        hide();
      }
    }
    catch(error){
        console.log(error)
    }
  }
})

//conversor de moneda
const urlChange = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json';
let euro;
let pounds;
const apiMoney = async (url) => {
  const response = await fetch(url, {
    method: "GET",
  });
  try {
    if (response.ok) {
      let json = await response.json();
      euro = json.usd["eur"];
      pounds = json.usd["gbp"];
      return euro, pounds;
    }
  }
  catch (error) {
    console.log(error);
  }
};
apiMoney(urlChange);

document.getElementById("priceBasic").innerHTML = '$' + 0;
document.getElementById("priceProfessional").innerHTML = '$' + 25;
document.getElementById("pricePremium").innerHTML = '$' + 60;

let select = document.getElementById('pricingSelector');
//select[0] = gbp
//select[1] = euro
//select[2] = usd
select.addEventListener('change', ()=>{
  let indice = select.selectedIndex;
  /*let priceBasic = document.getElementById("priceBasic").innerHTML;
  let priceProfessional = document.getElementById("priceProfessional").innerHTML;
  let pricePremium = document.getElementById("pricePremium").innerHTML;*/

  switch (indice) {
    case 0:
      document.getElementById("priceBasic").innerHTML = '£' + Math.round(0 * pounds);
      document.getElementById("priceProfessional").innerHTML = '£' + Math.round(25 * pounds);
      document.getElementById("pricePremium").innerHTML = '£' + Math.round(60 * pounds);
      break;
    case 1:
      document.getElementById("priceBasic").innerHTML = Math.round(0 * euro) + '€';
      document.getElementById("priceProfessional").innerHTML = Math.round(25 * euro) + '€';
      document.getElementById("pricePremium").innerHTML = Math.round(60 * euro) + '€';
      break;
    case 2:
      document.getElementById("priceBasic").innerHTML = '$' + 0;
      document.getElementById("priceProfessional").innerHTML = '$' + 25;
      document.getElementById("pricePremium").innerHTML = '$' + 60;
  }
})

// Slider
class Slider {
  constructor(imagenPrincipal){
    this.imagenPrincipal = imagenPrincipal;
  }
}
// pasar el slider con botones bolita
let botones = document.querySelectorAll(".slider__btn");
for(i=0;i<botones.length;i++){ 
  botones[i].addEventListener('click', (e)=>{
    const imagenes = document.querySelectorAll('.slider__sliderContainer__imgSlider')
    for(i=0;i<imagenes.length;i++){
      if(e.target.value == i){
        imagenes[i].classList.add('slider__sliderContainer__show')
      }
      else{
        imagenes[i].classList.remove('slider__sliderContainer__show')
      }
    }
  })  
}
//pasar imagenes slider con flechas

document.getElementById('arrowLeft').addEventListener('click',()=>{
  const imagenes = document.querySelectorAll('.slider__getId')
  let currentIndex;
  let indexToShow;
  for(i=0;i<imagenes.length;i++){
    let claseIMG = imagenes[i].getAttribute('class');
    let selectIMG= claseIMG.includes('slider__sliderContainer__show')
    if(selectIMG){
      currentIndex = i;
    }
  }
  if(currentIndex == 0){
    indexToShow = imagenes.length-1;
  }
  else{
    indexToShow = currentIndex - 1;
  }
  for(i=0;i<imagenes.length;i++){
    if(i==indexToShow){
      imagenes[i].classList.add('slider__sliderContainer__show')
    }
     else{
      imagenes[i].classList.remove('slider__sliderContainer__show')
    }
  }
})

let pasarDerecha = () =>{
  const imagenes = document.querySelectorAll('.slider__getId')
  let currentIndex;
  let indexToShow;
  for(i=0;i<imagenes.length;i++){
    let claseIMG = imagenes[i].getAttribute('class');
    let selectIMG= claseIMG.includes('slider__sliderContainer__show')
      if(selectIMG){
        currentIndex = i;
      }
  }
  if(currentIndex == imagenes.length-1){
    indexToShow = 0;
  }
  else{
    indexToShow = currentIndex + 1;
  }
  for(i=0;i<imagenes.length;i++){
    if(i==indexToShow){
      imagenes[i].classList.add('slider__sliderContainer__show')
    }
    else{
      imagenes[i].classList.remove('slider__sliderContainer__show')
    }
  }
}
document.getElementById('arrowRight').addEventListener('click',pasarDerecha)

// pasar imagenes automaticamente
setInterval(pasarDerecha,4000)

   


