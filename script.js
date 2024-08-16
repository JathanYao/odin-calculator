const calcDisplay = document.querySelector('.calDisplay');
const numDisplay = document.querySelector('.numDisplay');
const numbers = document.querySelectorAll(".number");
const clear = document.querySelector(".delete");
const operations = document.querySelectorAll(".operation");
let num1, num2;

numbers.forEach((digit) => {
    digit.addEventListener("click", () => {
        numDisplay.textContent += digit.textContent;
    });
  });

operations.forEach((operation) => {
    operation.addEventListener("click", () => {
        calcDisplay.textContent += " " + operation.textContent;
    });
});

clear.addEventListener("click", () => {
    numDisplay.textContent = " ";
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