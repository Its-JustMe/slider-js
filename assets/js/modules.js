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

export function trocarSlide (slides) {
    const activeSlide = document.querySelector('.slide.active');
    activeSlide.classList.remove('active');

    const nextSlide = activeSlide.nextElementSibling || slides[0];
    nextSlide.classList.add('active');
}

