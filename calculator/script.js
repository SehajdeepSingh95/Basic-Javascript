let result = "";

function updateDisplay() {
    document.querySelector(".Res").innerText = result;
}

function addition() {
    result += " + ";
    updateDisplay();
}

function subtraction() {
    result += " - ";
    updateDisplay();
}

function multiplication() {
    result += " * ";
    updateDisplay();
}

function division() {
    result += " / ";
    updateDisplay();
}

function add1() {
    result += "1";
    updateDisplay();
}

function add2() {
    result += "2";
    updateDisplay();
}

function add3() {
    result += "3";
    updateDisplay();
}

function add4() {
    result += "4";
    updateDisplay();
}

function add5() {
    result += "5";
    updateDisplay();
}

function add6() {
    result += "6";
    updateDisplay();
}

function add7() {
    result += "7";
    updateDisplay();
}

function add8() {
    result += "8";
    updateDisplay();
}

function add9() {
    result += "9";
    updateDisplay();
}

function add0() {
    result += "0";
    updateDisplay();
}

function decimal() {
    result += ".";
    updateDisplay();
}

function clearResult() {
    result = "";
    updateDisplay();
}

function evaluation() {
    try {
        result = eval(result).toString();
    } catch (e) {
        result = "Error";
    }
    updateDisplay();
}

