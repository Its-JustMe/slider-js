import { slideShow } from "./modules.js";

const buttons = document.querySelectorAll('.select');
const sliders = document.querySelectorAll('.slider');
const videos = document.querySelectorAll('.bg-video');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', slideShow());
}