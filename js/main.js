document.getElementById("menuIcon").addEventListener("click", aparece);


function aparece() {
  document.getElementById("menu").classList.toggle('open');
  console.log('hola')
}

let barra = document.querySelector("#scroll");
window.onscroll = function captureScroll() {
  console.log("Vertical: " + window.scrollY);
  let max = document.body.scrollHeight - innerHeight;
  barra.style.width = `${(window.scrollY / max) * 100}%`;
};


