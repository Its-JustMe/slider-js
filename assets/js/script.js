import { mudarClasseBtn } from "./modules.js";
import { trocarSlide } from './modules.js';

const btn_slider = document.querySelectorAll('.select');
const btn_slider_checked = document.querySelector('.select.selected');

const slides = document.querySelectorAll('video');

setInterval(() => {
    btn_slider.forEach(button => {
        button.onclick = () => {
            mudarClasseBtn(button, btn_slider);
            trocarSlide(slides);
        };
    });
}, 1000);