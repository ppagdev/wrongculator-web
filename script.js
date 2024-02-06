function appendToDisplay(arg) {
    var char_limit = 12;
    var display = document.getElementById('display');
    if (display.innerText.length < char_limit) {
        display.innerText += arg.value;
    }
}

function equals() {
    var display = document.getElementById('display');
    var result = math.evaluate(display.innerText);
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
