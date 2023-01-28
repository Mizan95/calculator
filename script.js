const screen = document.querySelector(".screen");

const numbers = document.querySelectorAll(".numbers");

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        setNumbers(e); 
        displayNumbers();
    })
})

let screenNumbers = [];
screen.textContent = 0;
function setNumbers(button) {
    screenNumbers.push(button.target.textContent);
}

function displayNumbers() {
    screen.textContent = screenNumbers.join("");
}

const operatorButtons = document.querySelectorAll(".operators");
let operandOne = "";
let operator;

operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        operandOne = screenNumbers.join("");
        operator = e.target.textContent;
        clearNumbers();
    })
})

function clearNumbers() {
    screenNumbers = [];
}

const equals = document.querySelector(".equals");
let operandTwo;
let result;
equals.addEventListener('click', () => {
    operandTwo = screenNumbers.join("");
    result = operate(operator, +operandOne, +operandTwo);
    screen.textContent = result;
})


//  operation functions
function sum(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function product(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// -- //

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return sum(a, b);
        case "-":
            return minus(a, b);
        case "*":
            return product(a, b);
        default:
            return divide(a, b);
    }
}








