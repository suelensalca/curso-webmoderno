/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo
"+" na quantidade especificada no parâmetro.
*/

function simboloMais(num) {
    let result = ""
    for(let i = 0; i < num; i++) {
        result = "+" + result
    }
    return result
}

console.log(simboloMais(4))