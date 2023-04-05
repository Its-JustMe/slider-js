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
