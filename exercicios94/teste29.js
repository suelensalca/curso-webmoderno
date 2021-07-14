/*
Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10, 20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20)
e quantos deles estão fora do intervalo, escrevendo estas informações.
*/

let numbersList = [2, 5, 10, 11, 13, 17, 20, 22, 26, 50]
let finalNumbers = 0

for(let i = 0; i < numbersList.length; i++) {
    if(numbersList[i] > 9 && numbersList[i] < 21) {
    finalNumbers++
    }
}

console.log(`${finalNumbers} dentro do intervalo`)
