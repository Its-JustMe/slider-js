export function mudarClasseBtn (primeiro_btn, proximo_btn) {
    primeiro_btn.classList.remove('selected');
    proximo_btn.classList.add('selected');
}

export function trocarTexto (textoAtual, proximoTexto, textos) {
    if (textoAtual.classList.contains('active')) {
        textoAtual.classList.remove('active');
    } else if (proximoTexto.next) {
        proximoTexto.classList.add('active');
    }
}

export function trocarSlide(slideAtual, proximoSlide) {
    slideAtual.classList.remove('active');
    proximoSlide.classList.add('active');
}