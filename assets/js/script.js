import { mudarClasseBtn } from "./modules.js";
import { trocarSlide } from './modules.js';

const btn_slider = document.querySelectorAll('.select');
const btn_slider_checked = document.querySelector('.select.selected');

const slides = document.querySelectorAll('video');

let slideAtual = slides[0];
let slideProximo = slides[1];

setInterval(() => {
    trocarSlide(slideAtual, slideProximo);
    slideAtual = slideProximo;
    slideProximo = slideAtual.nextElementSibling || slides[0];
}, 8000);