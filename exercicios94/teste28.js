//Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

let pairNumbers = 0
let oddNumbers = 0
let intNumbers = [10, 15, 22, 27, 39, 45]

intNumbers.forEach(numberMath)

function numberMath(value) {
    if(value % 2 == 0) {
        pairNumbers++
    } else {
        oddNumbers++
    }
}

console.log(pairNumbers, oddNumbers)