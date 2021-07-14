//Escreva uma função que receba um array de números e retornará a soma dos números desse array.

let numeros = [10, 10, 10]
let sum = numeros.reduce(somarNumeros)

function somarNumeros(atual, valor) {
    return atual + valor
}

console.log(sum)