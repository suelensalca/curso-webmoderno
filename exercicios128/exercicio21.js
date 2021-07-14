//Crie uma função que receba um array de números e retorne o menor número desse array.

let arrNumeros = [10, 5, -35, 65]
let ordemNumeros = arrNumeros.sort(function(a, b){return a-b})
let menorNumero = ordemNumeros[0]

console.log(menorNumero)