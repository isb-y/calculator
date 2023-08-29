let displayValue = '';
let currentOperator = '';
let firstOperand = '';

function appendToDisplay(value) {
    // Update the visual display
    let currentDisplay = document.getElementById('display').value;
    currentDisplay += value;
    document.getElementById('display').value = currentDisplay;

    // Only update displayValue if an operator has been chosen, 
    // otherwise reset it (to handle first operand and operators)
    if (currentOperator) {
        displayValue += value;
    } else {
        displayValue = currentDisplay;
    }
}

function clearDisplay() {
    displayValue = '';
    currentOperator = '';
    firstOperand = '';
    document.getElementById('display').value = displayValue;
}

function operate(operator) {
    if (currentOperator !== '') {
        calculate();
    }
    firstOperand = displayValue; // Store the first operand BEFORE appending the operator
    appendToDisplay(operator);  // Display the operator
    currentOperator = operator;
    displayValue = '';  // Clear the internal display value to prepare for the second operand
}

function calculate() {
    if (currentOperator !== '' && firstOperand !== '') {
        const secondOperand = displayValue;
        let result;

        switch (currentOperator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '/':
                if (parseFloat(secondOperand) !== 0) {
                    result = parseFloat(firstOperand) / parseFloat(secondOperand);
                } else {
                    document.getElementById('display').value = 'Error';
                    return;
                }
                break;
        }

        document.getElementById('display').value = result;
        displayValue = result.toString();
        currentOperator = '';
        firstOperand = '';
    }
}

// Initialize display
document.getElementById('display').value = displayValue;
