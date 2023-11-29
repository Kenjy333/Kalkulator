const textfield = document.getElementById("values");
let quote = 0;
function number(button) {
    const num = button.value;
    textfield.value += num;
}
function clr() {
    textfield.value = '';
}

function add() {
    quote += textfield.value;
    textfield.value = '';
}

function sum() {
    textfield.value = quote + textfield;
    textfield.value = parseInt(quote + inputValue); 
}




