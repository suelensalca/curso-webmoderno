/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
*/

function repetir(elemento, numberRepeticoes) {
    let result = []
    for(i = 0; i < numberRepeticoes; i++) {
        result.push(elemento)
    }
    return result
}

console.log(repetir("código", 5))