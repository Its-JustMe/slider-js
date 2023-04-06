/** Função que controla o slideshow manualmente */
export function slideShow() {
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('selected');
    }
    this.classList.add('selected');

    for (let j = 0; j < videos.length; j++) {
      videos[j].classList.remove('active');
    }

    document.querySelector(`video[name="${this.name}"]`).classList.add('active');

    for (let j = 0; j < sliders.length; j++) {
      sliders[j].classList.remove('active');
    }

    sliders[i].classList.add('active');
}