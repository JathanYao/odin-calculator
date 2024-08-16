const calcDisplay = document.querySelector('.calDisplay');
const numDisplay = document.querySelector('.numDisplay');
const numbers = document.querySelectorAll(".number");
const deleteDigit = document.querySelector(".delete");
const clearEntry = document.querySelector(".clear-entry");
const clear = document.querySelector(".clear-All");
const operations = document.querySelectorAll(".operation");
let clearedZero, num1, num2, operatorClicked;

numbers.forEach((digit) => {
    digit.addEventListener("click", () => {
        if(!clearedZero){
            numDisplay.textContent = "";
            clearedZero = true;
        }
        if(operatorClicked){
            numDisplay.textContent = " ";
            operatorClicked = false;
        }
        if(numDisplay.textContent.length < 14)
        numDisplay.textContent += digit.textContent;
    });
});

operations.forEach((operation) => {
    operation.addEventListener("click", () => {
        if(!num1 && !operatorClicked){
            num1 = numDisplay.textContent;
            calcDisplay.textContent += num1 + " " + operation.textContent;
            operatorClicked = true;
        }
    });
});

deleteDigit.addEventListener("click", () => {
    numDisplay.textContent = numDisplay.textContent.slice(0, numDisplay.textContent.length - 1);
    if(numDisplay.textContent.length < 1){
        numDisplay.textContent = "0";
        clearedZero = false;
    }
});

clear.addEventListener("click", () => {
    calcDisplay.textContent = "";
    numDisplay.textContent = "0";
    num1 = undefined;
    num2 = undefined;
    operatorClicked = false;
    clearedZero = false;
})

clearEntry.addEventListener("click", () => {
    numDisplay.textContent = "0";
    clearedZero = false;
})

function addToDisplay(digit){
    alert(digit)
}
function add(a, b){
    return parseInt(a + b);
}

function subtract(a, b){
    return parseInt(a - b);
}

function multiply(a, b){
    return parseInt(a * b);
}

function divide(a, b){
    return parseInt(a / b);
}