const textColorEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const bodeColorEl = document.querySelector('body');

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const onChangeColor = () => {
  bodeColorEl.style.backgroundColor = getRandomHexColor();
  textColorEl.textContent = getRandomHexColor();
}

changeColorBtn.addEventListener('click', onChangeColor);
