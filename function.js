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
const cursorElements = document.querySelectorAll('.cursor');

document.body.addEventListener('mousemove', event => {
    const { clientX, clientY } = event;

    cursorElements.forEach(element => {
        // Adjust the z-index if needed
        element.style.zIndex = '100'; // Example value

        // Update the position with damping effect (adjust the divisor as desired)
        const dampingFactor = 1;
        const newX = clientX / dampingFactor;
        const newY = clientY / dampingFactor;

        element.style.left = `${newX}px`;
        element.style.top = `${newY}px`;
    });
}); 