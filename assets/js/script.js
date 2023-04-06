import { mudarClasseBtn, trocarSlide, trocarTexto } from './modules.js';

const btn_slider = document.querySelectorAll('.select');
const slides = document.querySelectorAll('video');
const textoSlides = document.querySelectorAll(".slider");

let slideAtual = slides[0];
let slideProximo = slides[1];

let primeiroBtn = btn_slider[0];
let proximoBtn = btn_slider[1];

let textoAtual = textoSlides[0];
let textoProximo = textoSlides[1];

setInterval(() => {
    trocarSlide(slideAtual, slideProximo);
    slideAtual = slideProximo;
    slideProximo = slideAtual.nextElementSibling || slides[0];

    mudarClasseBtn(primeiroBtn, proximoBtn);
    primeiroBtn = proximoBtn;
    proximoBtn = primeiroBtn.nextElementSibling || btn_slider[0];

    trocarTexto(textoAtual, textoProximo, textoSlides);
    textoAtual = textoProximo;
    textoProximo = textoAtual.nextElementSibling || textoSlides[0];

}, 9000);