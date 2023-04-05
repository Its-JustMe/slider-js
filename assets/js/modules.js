export function mudarClasseBtn (primeiro_btn, proximo_btn) {
    primeiro_btn.classList.remove('selected');
    proximo_btn.classList.add('selected');
}

export function trocarTexto (textos) {
    textos.forEach(slider => {
        if (slider.classList.contains('active')) {
            slider.classList.remove('active');
        } else {
            slider.classList.add('active');
        }
    })
}

export function trocarSlide(slideAtual, proximoSlide) {
    slideAtual.classList.remove('active');
    proximoSlide.classList.add('active');
}