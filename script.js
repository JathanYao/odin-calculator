const calcDisplay = document.querySelector('.calDisplay');
const numDisplay = document.querySelector('.numDisplay');
const numbers = document.querySelectorAll(".number");
const deleteDigit = document.querySelector(".delete");
const clearEntry = document.querySelector(".clear-entry");
const clear = document.querySelector(".clear-All");
const operations = document.querySelectorAll(".operation");
let num1, num2;

numbers.forEach((digit) => {
    digit.addEventListener("click", () => {
        if(numDisplay.textContent.length < 14)
        numDisplay.textContent += digit.textContent;
    });
});

operations.forEach((operation) => {
    operation.addEventListener("click", () => {
        calcDisplay.textContent += " " + operation.textContent;
    });
});

deleteDigit.addEventListener("click", () => {
    numDisplay.textContent = numDisplay.textContent.slice(0, numDisplay.textContent.length - 1);
})

clear.addEventListener("click", () => {
    calcDisplay.textContent = "";
})

clearEntry.addEventListener("click", () => {
    numDisplay.textContent = "";
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