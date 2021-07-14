//Crie uma função que receba uma string como parâmetro e conte quantas palavras tem nela.

function contarPalavras(frase) {
    let arrFrase = frase.split(" ")
    return arrFrase.length
}

console.log(contarPalavras("Me divirto aprendendo a programar"))