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
list.classList.add("pop");
toggle.addEventListener('click', toggleMenu, false);
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);
