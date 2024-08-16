const calcDisplay = document.querySelector('.calDisplay');
const numDisplay = document.querySelector('.numDisplay');
const numbers = document.querySelectorAll(".number");
const deleteDigit = document.querySelector(".delete");
const clearEntry = document.querySelector(".clear-entry");
const clear = document.querySelector(".clear-All");
const operations = document.querySelectorAll(".operation");
const equalBtn = document.querySelector(".equals");
let lastClicked = "clear";
let num1 = 0, num2, operator;

numbers.forEach((digit) => {
    digit.addEventListener("click", () => {
        switch(lastClicked){
            case "clear":
                setDisplay("");
                break;
            case "operation":
                setDisplay("");
                num2 = 0;
                break;
            case "equals":
                setDisplay("");
                calcDisplay.textContent = "";
                num1 = 0;
                num2 = undefined;
                operator = undefined;
                break;
        }
        if(numDisplay.textContent.length < 14)//keep numbers small
            setDisplay(numDisplay.textContent + digit.textContent);
        lastClicked = "number"; 
    });
});
/*
if there is already a calculation
    set numDisplay to num1
    send calculation to calcDisplay
    wait for num2
else set numdisplay to num2
    calculate num1 and num2
    set that to ans + operation
    set that to calcDisplay
*/
operations.forEach((operation) => {
    operation.addEventListener("click", () => {
        switch(lastClicked){
            case "operation":
            case "equals":
                calcDisplay.textContent = num1 + " " + operation.textContent;
                lastClicked = "operation";
                break;
            case "number":
            case "clear":
                if(num2 == undefined){//first number, just display no operate
                    num1 = numDisplay.textContent;
                    calcDisplay.textContent = num1 + " " + operation.textContent;
                    operator = operation;
                    lastClicked = "operation";
                }else if(operation.id != "equals"){
                    num2 = numDisplay.textContent;
                    let ans = operate(operator.id, num1, num2);
                    num1 = ans;
                    calcDisplay.textContent = ans + " " + operation.textContent;
                    operator = operation;
                    lastClicked = "operation";
                }else{
                    num2 = numDisplay.textContent;
                    let ans = operate(operator.id, num1, num2);
                    calcDisplay.textContent = num1 + " " + operator.textContent + " " + num2 + " =";
                    num1 = ans;
                    setDisplay(ans);
                    num2 = 0;
                    lastClicked = "equals";
                }
                break;
        }
    });
});

deleteDigit.addEventListener("click", () => {
    setDisplay(numDisplay.textContent.slice(0, numDisplay.textContent.length - 1));
    if(numDisplay.textContent.length < 1){
        setDisplay("0");;
        clearedZero = false;
        lastClicked = "clear";
    }
});

clear.addEventListener("click", () => {
    calcDisplay.textContent = "";
    setDisplay("0");
    num1 = 0;
    num2 = undefined;
    lastClicked = "clear";
})

clearEntry.addEventListener("click", () => {
    setDisplay("0");
    lastClicked = "clear";
})

function add(a, b){
    return parseInt(a) + parseInt(b);
}

function subtract(a, b){
    return parseInt(a) - parseInt(b);
}

function multiply(a, b){
    return parseInt(a) * parseInt(b);
}

function divide(a, b){
    return parseInt(a) / parseInt(b);
}

function setDisplay(string){
    numDisplay.textContent = string;
}

function operate(operation, num1, num2){
    switch(operation){
        case "divide":
            return divide(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "add":
            return add(num1, num2);
    }
}