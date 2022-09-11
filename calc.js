window.addEventListener('load', () => {

    function add(a, b) {
        return a + b;
    }

    function subtract(a,b) {
        return a - b;
    }

    function multiply(a,b) {
        return a * b;
    }

    function divide(a,b) {
        return a / b;
    }

    function operate(operator, num1, num2) {
        if (operator == '+') {
            return Math.round(add(num1, num2) *1000) / 1000;
        }
        if (operator == '-') {
            return Math.round(subtract(num1, num2) *1000) / 1000;
        }
        if (operator == 'x') {
            return Math.round(multiply(num1, num2) *1000) / 1000;
        }
        if (operator == '/') {
            if (num2 == 0) {
                return display.textContent = 'no';
            }
            return Math.round(divide(num1, num2) *1000) / 1000;
        }
    }

    function percent(num) {
        return number / 100;
    }

    function updateDisplayValue() {
        displayValue = Number(display.textContent);
    }

    function removeHighlight(){
        mathBtns.forEach(btn => {
            btn.classList.remove('pushed');
        })
    }

    const display = document.querySelector('#display');
    const numberBtns = document.querySelectorAll('.number');
    const clearBtn = document.querySelector('.clear');
    const mathBtns = document.querySelectorAll('.math');
    const percentBtn = document.querySelector('.percent');
    const negativeBtn = document.querySelector('.negative');
    const equalBtn = document.querySelector('.equal');
    let displayValue = Number(display.textContent);
    let num1;
    let num2;
    let operator;
    let operatorButtonPushed = false;
    let count = 0;
    let disabledDecimal = false;

    numberBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const numberValue = btn.textContent;
            if (disabledDecimal && numberValue == '.' && operatorButtonPushed == false) {
                return;
            }
            if (display.textContent.length > 9) {
                return;
            }
            if (operatorButtonPushed == true) {
                display.textContent = numberValue;
                updateDisplayValue();
                operatorButtonPushed = false;
                count = 1;
            } else if (display.textContent === '0') {
                if (numberValue == '.') {
                    display.textContent = 0 + numberValue;
                    updateDisplayValue();
                } else {
                    display.textContent = numberValue;
                    updateDisplayValue();
                }
            } else {
                display.textContent = display.textContent + numberValue;
                updateDisplayValue();
            }
            if (numberValue == '.') {
                disabledDecimal = true;
            }
            removeHighlight();
        })
    })








})