//Crie uma função que recebe um array de números e retorne o segundo maior número no array.

function segundoMaior(arrNumeros) {
    let ordem = arrNumeros.sort(function(a, b) {return a - b})
    return ordem[ordem.length - 2]
}

console.log(segundoMaior([12, 16, 13, 5]))