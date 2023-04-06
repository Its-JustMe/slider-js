const buttons = document.querySelectorAll('.select');
const sliders = document.querySelectorAll('.slider');
const videos = document.querySelectorAll('.bg-video');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    document.querySelector('div.alternate').classList.add('active');
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
    document.querySelector('div.alternate').classList.remove('active');
  });
}