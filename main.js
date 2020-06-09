const btnElem = document.querySelector(".btn");
const displayElem = document.querySelector(".display");
const minusElem = document.querySelector('.minus');
let count = 0;

const updateDisplay = (count) => {
    displayElem.innerHTML = count;
};


updateDisplay(count);
btnElem.addEventListener('click', () => updateDisplay(++count));
// btnElem.addEventListener('click', () => {
//     count++;
//     updateDisplay(count);
// });

minusElem.addEventListener('click', () => updateDisplay(--count));
// minusElem.addEventListener('click', () => {
//     count--;
//     updateDisplay(count);
// });
