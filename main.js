let display = document.querySelector("#display");

function displayNum(num) {
    display.value += num;
}

function calculate() {
    let expression = display.value;
    if(expression) display.value = eval(expression);
}

function clean() {
    display.value = "";
}

function backSpace() {
    let expression = display.value;
    display.value = expression.substring(0, expression.length-1)
}

let ring = new Audio();
ring.src = "./assets/media/sorted.mp3";