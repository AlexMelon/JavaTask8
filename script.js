// Store the current input and operation
let currentInput = "";
let previousInput = "";
let operator = "";

// Function to append numbers to the display
function appendNumber(number) {
    currentInput += number;
    document.getElementById("result").value = currentInput;
}

// Function to handle operations (+, -, *, /)
function performOperation(op) {
    if (currentInput === "") return;

    if (previousInput !== "") {
        calculate(); 
    }

    operator = op; 
    previousInput = currentInput; 
    currentInput = ""; 
}

// Function to calculate the result based on the operator
function calculate() {
    if (currentInput === "" || previousInput === "") return; 

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    // Perform the operation
    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            if (current === 0) {
                alert("Cannot divide by zero");
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    document.getElementById("result").value = result;

    previousInput = "";
    currentInput = result.toString();
    operator = "";
}

// Function to clear the display
function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    document.getElementById("result").value = "";
}
