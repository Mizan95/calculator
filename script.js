// operation functions
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

// operate function 

function operate(operator, a, b) {
    let result;
    switch (operator) {
        case "+":
            result = sum(a, b);
            break;
        case "-":
            result = minus(a, b);
            break;
        case "*":
            result = product(a, b);
            break;
        default:
            result = divide(a, b);
    }
    return result;
}


console.log(operate("/", 3, 5));