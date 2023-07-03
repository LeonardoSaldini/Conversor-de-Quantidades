const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const converterButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

function convert() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if (fromValue === toValue) {
        outputElement.value = inputElement.value;
        messageElement.textContent = "";
        return;
    } 

    let metros;
    switch(fromValue) {
        case "m":
            metros = inputElement.value
            break;
        case "km":
            metros = inputElement.value * 1000;
            break
        case "cm":
            metros = inputElement.value / 100;
            break;
        case "mm":
            metros = inputElement.value / 1000;
            break
    }

    let resultado;
    switch(toValue) {
        case "m":
            resultado = metros;
            break;
        case "km":
            resultado = metros / 1000;
            break
        case "cm":
            resultado = metros * 100;
            break;
        case "mm":
            resultado = metros * 1000;
            break
    }

    outputElement.value = resultado;

    const fromLabel = fromElement.options[fromElement.selectedIndex].text
    const toLabel = toElement.options[toElement.selectedIndex].text

    const msg = `${inputElement.value} ${fromLabel} equivale a ${resultado} ${toLabel}`;
    messageElement.textContent = msg;
    return;
}

converterButton.addEventListener("click", convert);