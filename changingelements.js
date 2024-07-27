/*
    Alterando elementos na prática.
*/

const buttonClick = document.querySelector(".convert-button")
const inputValue = document.getElementById("text-user")
const atribuindoValue = document.getElementById("input-value")

function convert() {
    atribuindoValue.innerText = inputValue.value
}

buttonClick.addEventListener('click', convert)