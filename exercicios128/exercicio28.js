/*
Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array
que tem a quantidade de dígitos indicada pelo segundo parâmetro.
*/

function filtrarQuantidadeDigitos(arrNumeros, numero) {
    let resultado = []
    for(let i = 0; i < arrNumeros.length; i++) {
        let comprimento = arrNumeros[i].toString().length
        if(comprimento == numero) {
            resultado.push(arrNumeros[i])
        }
    }
    return resultado
}

console.log(filtrarQuantidadeDigitos([35, 2, 365, 10, 125], 2))