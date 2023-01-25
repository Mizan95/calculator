const screen = document.querySelector(".screen");

const numbers = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operators");

let operandOne;
let operandTwo;
let operator;
let screenNumbers;

screenNumbers = [];


operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        operandOne = screen.textContent;
        operator = e.target.textContent;
        clearScreen();
    })
})

function clearScreen() {
    screenNumbers = [];
}

function displayNumbers(button) {
    screenNumbers.push(button.target.textContent);
    screen.textContent = screenNumbers.join("");
}

const equals = document.querySelector(".equals");

equals.addEventListener('click', () => {
    operandTwo = screen.textContent;
    screen.textContent =  operate(operator, +operandOne, +operandTwo);
})

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        // if (operandOne !== "undefined") {
        //     clearScreen();
        //     screen.textContent = screenNumbers;
        // }
        displayNumbers(e);        
    })
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








