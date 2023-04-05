export function mudarClasseBtn (primeiro_btn, proximo_btn) {
    primeiro_btn.classList.remove('selected');
    proximo_btn.classList.add('selected');
}

export function trocarTexto (textoAtual, proximoTexto, slider) {
    textoAtual.classList.remove('active');
    proximoTexto.classList.add('active');

    if (slider[3].classList.remove('active')) {
        slider[0].classList.add('active');
    }
}

export function trocarSlide(slideAtual, proximoSlide) {
    slideAtual.classList.remove('active');
    proximoSlide.classList.add('active');
}