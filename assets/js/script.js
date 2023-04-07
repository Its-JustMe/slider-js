const buttons = document.querySelectorAll('.select');
const sliders = document.querySelectorAll('.slider');
const videos = document.querySelectorAll('.bg-video');

const menuBtn = document.querySelector('.mobile-menu');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    document.querySelector('div.alternate').classList.add('active');
    setTimeout(() => {
      document.querySelector('div.alternate').classList.remove('active');

      document.querySelector(`video#${this.name}`).classList.add('active');
    }, 500);

    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('selected');
    }

    this.classList.add('selected');

    for (let j = 0; j < videos.length; j++) {
      videos[j].classList.remove('active');
    }

    for (let j = 0; j < sliders.length; j++) {
      sliders[j].classList.remove('active');
    }

    sliders[i].classList.add('active');
  });
}

menuBtn.addEventListener('click', function () {
    if (menuBtn.classList.contains('animate')) {
        menuBtn.classList.toggle('animate');
    } else {
        menuBtn.classList.remove('animate');
    }
});