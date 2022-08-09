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
