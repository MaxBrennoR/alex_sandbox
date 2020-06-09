const inputElem = document.querySelector('.input');
const btnElem = document.querySelector('.btn');
const dispElem =document.querySelector('.display');

btnElem.addEventListener('click', () => {
    dispElem.innerHTML = inputElem.value;
});