const display = document.querySelector('.display');
const numbers = document.querySelectorAll(".number");
const clear = document.querySelector(".delete");
const operations = document.querySelector(".operation");

numbers.forEach((digit) => {
    digit.addEventListener("click", () => {
        display.textContent = display.textContent + digit.textContent;
    });
  });

clear.addEventListener("click", () => {
    display.textContent = " ";
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