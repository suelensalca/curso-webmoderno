//Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

let intNumbers = [2, 10, 55, 56, 18, 22]

function sortNumbers() {
    intNumbers.sort(function(a, b){return a - b})
}

sortNumbers()


console.log(intNumbers[0], intNumbers[intNumbers.length-1])
