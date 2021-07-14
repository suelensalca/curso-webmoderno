/*
Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá
conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro
com valores decimais. Declarados os vetores, utilize a função de unição concat() de duas maneiras
diferentes para unir os vetores, e mostre o resultado no console. Todos os elementos do vetor
resultado deverão aparecer no console.
*/

let vetorInteiro = [2, 3, 4, 5]
let vetorString = ["dois", "três", "quatro", "cinco"]
let vetorDouble = [2.2, 3.3, 4.4, 5.5]

console.log(vetorInteiro.concat(vetorString))
console.log(vetorInteiro.concat(vetorDouble))