let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value) {}

function init () {
    document.querySelector('.calc-buttons')
        .addEventListener('click', function(event) {
            console.log(event);
            buttonClick(event.target.innerText);
        })
}

init();