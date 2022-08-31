var mexp = require('math-expression-evaluator');
const isType = (char) => {
    if (['/', '*', '-', '+'].includes(char)) {
        return 'operator';
    } else {
        return 'operand'
    }
}

export const handleClick = (input, data, e) => {
    let displayText = data.displayText;
    let displayTextLastChar = displayText.charAt(displayText.length - 1);
    let lastInput = data.lastInput;
    const lastInputType = isType(lastInput);
    const thisInputType = isType(input);
    let newDisplay = '';
    let newLastInput = '';
    let lastClicked = data.lastClicked;
    if (input === '=') {
        if (isType(displayTextLastChar) === 'operator' && displayText.length > 1) {
            displayText = displayText.slice(0, displayText.length - 1);
        }
        newDisplay = mexp.eval(displayText) + '';
    } else if (input === 'AC') {
        newDisplay = '';
        newLastInput = '0';
    } else if (lastInputType === 'operator' && thisInputType === 'operator') {
        newDisplay = displayText.slice(0, displayText.length - 1) + input;
        newLastInput = input;
    } else if (lastInput === '.' && thisInputType === 'operator') {
        newDisplay = displayText;
        newLastInput = lastInput;
    } else if (displayText === '' && (input === '/' || input === '*')) {
        newDisplay = displayText;
        newLastInput = lastInput;
    } else if (lastInput === 'Infinity') {
        newDisplay = input;
        newLastInput = input;
    } else if (lastInputType !== thisInputType) {

        if (displayText.length > 0) {
            newDisplay = displayText + ' ' + input;
        } else {
            newDisplay = input;
        }

        newLastInput = input;

    } else {

        if ((lastInput.includes('.') && input === '.')) {

            newDisplay = displayText;
            newLastInput = lastInput;

        } else if (lastInput === '0') {
            if (input === '0') {
                newDisplay = '0';
                newLastInput = '0';
            } else if (input === '.') {
                newDisplay = lastInput + input;
                newLastInput = newDisplay;
            } else {
                newDisplay = input;
                newLastInput = newDisplay;
            }
        } else {
            if (!(lastClicked === '=') && (lastInput.length <= 21)) {
                newDisplay += (displayText + input);
                let newDisplaySplit = newDisplay.split(' ');
                newLastInput = newDisplaySplit[newDisplaySplit.length - 1];
            } else {
                newDisplay = displayText;
                newLastInput = lastInput;
            }
        }
    }

    data.setLastClicked(input);
    data.setdisplayText(newDisplay);
    data.setLastInput(newLastInput);
}