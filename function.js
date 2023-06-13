// Toggle mobile menu
const toggle = document.querySelector(".toggle");
const menu = document.querySelector('.menu');
const list = document.querySelector(".item");
function toggleMenu() {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      toggle.querySelector("a").innerHTML = "<img src='img/Menu.svg' alt='Icone de menu'>";
    } else {
      menu.classList.add("active");
      toggle.querySelector("a").innerHTML = "<img src='img/Close.svg' alt='Icone de menu'>";
    }
}
// Animation while scrolling
list.classList.add("pop");
toggle.addEventListener('click', toggleMenu, false);
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);
//Open tabs
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

