// When numbers are pressed, set numberList and screenContent
let numberList = [];
function setNumberList(button) {
    numberList.push(button.target.textContent);
}

const screen = document.querySelector(".screen");
screen.textContent = 0; 
function setScreenContent(content) {
    screen.textContent = content;
}

let shouldResetScreen = false;

const numbers = document.querySelectorAll(".numbers");
numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        if (shouldResetScreen) {
            clearNumbers();
            shouldResetScreen = false;
        }
        setNumberList(e);
        setScreenContent(numberList.join(""));
    })
})

// When operatorButtons are pressed, set operandOne and operator
let operandOne;
let operator;
function setOperandOne(object) {
    operandOne = object;
}
function setOperator(object) {
    operator = object;
}
function clearNumbers() {
    numberList = [];
}

const operatorButtons = document.querySelectorAll(".operators");
operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // If equals button has not been pressed prior to pressing operator button
        // e.g. 1 + 2 + 3
        if (operandOne && operator && !operandTwo) {
            let value = operate(operator, +operandOne, +screen.textContent);
            setScreenContent(value);
            setOperandOne(value);
            setOperator(e.target.textContent);
            clearNumbers();
            return
        }
        // If equals button has been pressed prior to pressing operator button
        // e.g 1 + 2 = 3 + 5
        else if (operandOne && operator && operandTwo) {
            setOperator(e.target.textContent);
            setOperandTwo(undefined);
            clearNumbers();
            return
        }
        setOperandOne(numberList.join(""));
        setOperator(e.target.textContent);
        clearNumbers();
    })
})



// When Equals button pressed, set operandTwo, perform operation and display result on screen
let operandTwo;
function setOperandTwo(object) {
    operandTwo = object;
}
let result;
const equals = document.querySelector(".equals");
equals.addEventListener('click', () => {
    // If no operator was selected
    if (!operator) {
        setScreenContent(numberList.join(""));
        return;
    } 
    // If operator was selected
    else if (operator) {
        setOperandTwo(numberList.join(""));
        result = operate(operator, +operandOne, +operandTwo);
        setScreenContent(result);
        operandOne = result;
        shouldResetScreen = true;
    }

})

// Clear button functionality
function clearAll() {
    operandOne = undefined;
    operator = undefined;
    operandTwo = undefined;
    numberList = [];
    screen.textContent = 0;
    result = undefined;
}
const clear = document.querySelector('.clear');
clear.addEventListener('click', clearAll);


// Delete button functionality
function deleteLastNumber() {
    numberList.pop();
    return numberList.join("");
}
const deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click', () => {
    setScreenContent(deleteLastNumber());
});


// Operation functions
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








