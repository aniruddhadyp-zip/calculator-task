let firstNumber = "";
let secondNumber = "";
let operator = "";

function calculate() {
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    let result;

    if (operator === "+") {
        result = num1 + num2;
    } 
    else if (operator === "-") {
        result = num1 - num2;
    } 
    else if (operator === "*") {
        result = num1 * num2;
    } 
    else if (operator === "/") {
        result = num1 / num2;
    }

    return result;
}