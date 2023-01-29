const screen = document.querySelector(".screen");

const numbers = document.querySelectorAll(".numbers");

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        setNumbers(e);
        displayNumbers();
        // if (operandOne) {
        //     operandTwo = screenNumbers.join("");
        // }
    })
})


let screenNumbers = [];
function setNumbers(button) {
    screenNumbers.push(button.target.textContent);
}

screen.textContent = 0; 
function displayNumbers() {
    screen.textContent = screenNumbers.join("");
}

const operatorButtons = document.querySelectorAll(".operators");
let operandOne;
let operator;
operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        operandOne = screen.textContent;
        operator = e.target.textContent;
        clearNumbers();
    })
})

function clearNumbers() {
    screenNumbers = [];
    screen.textContent = "";
}

// Perform operation and display result on screen
const equals = document.querySelector(".equals");
let operandTwo;
let result;
equals.addEventListener('click', () => {
    operandTwo = screenNumbers.join("");
    result = operate(operator, +operandOne, +operandTwo);
    screen.textContent = result;
})

// Clear all functionality
const clear = document.querySelector('.clear');
clear.addEventListener('click', clearAll);
function clearAll() {
    operandOne = 0;
    operator = "undefined";
    operandTwo = 0;
    screenNumbers = [];
    screen.textContent = 0;
}

// Clear last number functionality
const deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click', () => {
    displayNumbers(deleteLastNumber());
});
function deleteLastNumber() {
    screenNumbers.pop();
    return screenNumbers.join("");
}





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








