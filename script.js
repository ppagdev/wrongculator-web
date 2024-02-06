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
