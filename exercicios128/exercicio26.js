//Desenvolva uma função que receba uma string como parâmetro e retorne essa string sem as vogais.

function removerVogais(frase = "") {
    let resultado = ""
    for(let i = 0; i < frase.length; i++) {
        if(frase[i] != "a" && frase[i] != "e" && frase[i] != "i" && frase[i] != "o" && frase[i] != "u") {
            resultado += frase[i]
        }
    }
    return resultado
}

console.log(removerVogais("cod3r"))