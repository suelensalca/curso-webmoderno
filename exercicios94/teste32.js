//Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

let numbersList = [2, 5, 10, 8, 15, 14]
let numbersSum = numbersList.reduce(averageMath)
let dividerNumber = numbersList.length

function averageMath (total, value) {
    return total + value
}

let finalNumber = numbersSum / dividerNumber

console.log(finalNumber)