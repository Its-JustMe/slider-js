import { mudarClasseBtn, trocarSlide, trocarTexto } from './modules.js';

const btn_slider = document.querySelectorAll('.select');
const slides = document.querySelectorAll('video')
const textos = document.querySelectorAll('.slider');

let slideAtual = slides[0];
let slideProximo = slides[1];

let textoAtual = textos[0];
let proximoTexto = textos[1];

let primeiroBtn = btn_slider[0];
let proximoBtn = btn_slider[1];

setInterval(() => {
    trocarSlide(slideAtual, slideProximo);
    slideAtual = slideProximo;
    slideProximo = slideAtual.nextElementSibling || slides[0];

    trocarTexto(textoAtual, proximoTexto, textos);
    textoAtual = proximoTexto;
    proximoTexto = proximoTexto.nextElementSibling || textos[0];

    mudarClasseBtn(primeiroBtn, proximoBtn);
    primeiroBtn = proximoBtn;
    proximoBtn = primeiroBtn.nextElementSibling || btn_slider[0];
}, 9000);