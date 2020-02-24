// Sintaxe da apostila
let inputTamanho = document.querySelector('[name=tamanho]')
let outputTamanho = document.querySelector('[name=valortamanho]')

// function mostraTamanho() {
//     outputTamanho.value = inputTamanho.value
// }

// inputTamanho.oninput = mostraTamanho

// Sintaxe utilizando a função anônima
inputTamanho.oninput = function() {
    outputTamanho.value = inputTamanho.value
}
