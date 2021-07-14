/*
Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos
há nesse vetor e imprime a quantidade no console.
*/

let numbersList = [-15, -22, -5, 10, 55, 25, -6]
let finalNumbers = 0

for(let i = 0; i < numbersList.length; i++) {
    if(numbersList[i] < 0) {
        finalNumbers++
    }
}

console.log(`${finalNumbers} números são negativos`)