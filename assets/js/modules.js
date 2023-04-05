export function mudarClasseBtn (primeiro_btn, proximo_btn) {
    primeiro_btn.classList.remove('selected');
    proximo_btn.classList.add('selected');
}

export function trocarTexto (textoAtual, proximoTexto) {
    textoAtual.classList.remove('active');
    proximoTexto.classList.add('active');
}

export function trocarSlide(slideAtual, proximoSlide) {
    slideAtual.classList.remove('active');
    proximoSlide.classList.add('active');
}

export function mudarClasseBtn (button, all_btn) {
    if (button.classList.contains('selected')) {
        button.classList.remove('selected');
    } else {
        button.classList.add('selected');
    }

    all_btn.forEach(btn => {
        if (btn !== button && btn.classList.contains('selected')) {
            btn.classList.remove('selected');
        }
    });
}

export function trocarSlide(slideAtual, proximoSlide, btn) {
    slideAtual.classList.remove('active');
    proximoSlide.classList.add('active');
}