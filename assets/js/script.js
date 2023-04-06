/** Função que controla o slideshow manualmente */
function slideShow(buttons, sliders, videos) {
    for (let btn in buttons) {
      buttons[btn].classList.remove('selected');
    }
    this.classList.add('selected');

    for (let video in videos) {
      videos[video].classList.remove('active');
    }

    document.querySelector(`video[name="${this.name}"]`).classList.add('active');

    for (let slide in sliders) {
      sliders[slide].classList.remove('active');
    }

    sliders[i].classList.add('active');
}

const buttons = document.querySelectorAll('.select');
const sliders = document.querySelectorAll('.slider');
const videos = document.querySelectorAll('.bg-video');

for (let i in buttons) {
  buttons[i].addEventListener('click', slideShow());
}
