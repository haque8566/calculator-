const display = document.getElementById('display');

function appendValue(value) {
    if (display.value === 'Error') {
        display.value = '';
    }
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    if (display.value === '') {
        return;
    }

    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key) || '+-*/.%'.includes(key)) {
        appendValue(key);
    } 
    else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } 
    else if (key === 'Backspace') {
        deleteLast();
    } 
    else if (key === 'Escape') {
        clearDisplay();
    }
});