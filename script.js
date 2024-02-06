function appendToDisplay(arg) {
    var display = document.getElementById('display');
    display.innerText += arg.value;
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
