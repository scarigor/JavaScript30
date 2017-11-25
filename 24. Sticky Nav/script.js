const navElement = document.querySelector('#main');
const topOfNav = navElement.offsetTop;
let topScreen = window.scrollY;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = navElement.offsetHeight + "px";
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixNav);