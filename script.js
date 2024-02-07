var coward = false;

function appendToDisplay(arg) {
    var char_limit = 12;
    var display = document.getElementById('display');
    if (display.innerText.length < char_limit) {
        display.innerText += arg.value;
    }
}

function toggleCoward(button) {
    coward = !coward;
    if (coward) {
        button.innerText = "Coward";
    }
    else {
        button.innerText = "Normal";
    }
}

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function wrongculate(expression) {
    if (coward) {
        return expression;
    }
    if (randomInt(1,3) != 1) {
        return expression;
    }
    number = randomInt(-5, 5);
    expression += "+ " + number;
    return expression;
}

function equals() {
    var display = document.getElementById('display');
    var expression = wrongculate(display.innerText);
    var result = math.evaluate(expression);
    display.innerText = result.toString();
}

function clearText() {
    var display = document.getElementById('display');
    display.innerText = "";
}

function backspace() {
    var display = document.getElementById('display');
    text = display.innerText
    display.innerText = text.substring(0,text.length-1)
}
