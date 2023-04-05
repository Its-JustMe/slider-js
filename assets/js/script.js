const btn_slider = document.querySelectorAll('.select');
const btn_slider_checked = document.querySelector('.select.selected')

setInterval(() => {
    btn_slider.forEach(button => {
        button.onclick = () => {
            if (button.classList.contains('selected')) {
                button.classList.remove('selected');
            } else {
                button.classList.add('selected');
            }

            btn_slider.forEach(btn => {
                if (btn !== button && btn.classList.contains('selected')) {
                    btn.classList.remove('selected');
                }
            })
        }
    });
}, 1000);