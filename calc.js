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
        return num / 100;
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

    clearBtn.addEventListener('click', () => {
        display.textContent = 0;
        count = 0;
        num1 = 0;
        num2 = 0;
        operatorButtonPushed = false;
        disabledDecimal = false;
        removeHighlight();
    })

    mathBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (count > 0) {
                num2 = displayValue;
                display.textContent = operate(operator, num1, num2);
            }
            operator = btn.textContent;
            updateDisplayValue();
            num1 = displayValue;
            operatorButtonPushed = true;
            disabledDecimal = false;
            btn.classList.add('pushed');
        })
    })

    percentBtn.addEventListener('click', () => {
        display.textContent = percent(display.textContent);
        updateDisplayValue();
    })

    negativeBtn.addEventListener('click', () => {
        display.textContent = multiply(Number(display.textContent), -1);
        updateDisplayValue();
    })

    equalBtn.addEventListener('click', () => {
        num2 = displayValue;
        let result = operate(operator, num1, num2);
        display.textContent = result;
        operatorButtonPushed = true;
    })
})