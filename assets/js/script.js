const buttons = document.querySelectorAll('.select');
const sliders = document.querySelectorAll('.slider');
const videos = document.querySelectorAll('.bg-video');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    // Remove a classe "selected" de todos os botões
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('selected');
    }
    // Adiciona a classe "selected" ao botão clicado
    this.classList.add('selected');

    // Remove a classe "active" de todos os vídeos
    for (let j = 0; j < videos.length; j++) {
      videos[j].classList.remove('active');
    }
    // Adiciona a classe "active" ao vídeo com o nome correspondente ao botão clicado
    document.querySelector(`video[name="${this.name}"]`).classList.add('active');

    // Remove a classe "active" de todos os sliders
    for (let j = 0; j < sliders.length; j++) {
      sliders[j].classList.remove('active');
    }
    // Adiciona a classe "active" ao slider com o índice correspondente ao botão clicado
    sliders[i].classList.add('active');
  });
}