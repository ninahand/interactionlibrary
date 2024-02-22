
let lightbulb = document.querySelector('.text');

lightbulb.addEventListener('animationend', () => {
  lightbulb.style.opacity = '0';
});
