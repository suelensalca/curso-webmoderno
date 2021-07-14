/*
Crie duas funções que recebem doi parâmetros, um vetor com apenas
valores numéricos e um número inteiro. Faça com que a primeira
função retorne outro vetor que será resultado da multiplicação
de cada elemento pelo número passado como parâmetro. A segunda
função fará o mesmo da primeira se e somente se o valor do 
elemento for maior que 5.
*/

let arrayNumbers = [2, 5, 10, 8]
let arrayMultiplied1 = arrayNumbers.map(arrayMultiplication)

function arrayMultiplication(value) {
    return value * 2
}

console.log(arrayMultiplied1)

let arrayMultiplied2 = arrayNumbers.map(arrayMultiplication2)

function arrayMultiplication2(value) {
    if(value >= 5) {
        return value * 2
    } else {
        return value * 1
    }
}

console.log(arrayMultiplied2)