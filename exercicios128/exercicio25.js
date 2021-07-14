/*
A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando
uma função para identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo
parâmetro, um array de strings. A função deverá filtrar as palavras do array que contêm
nelas a string do primeiro parâmetro.
*/

function buscarPalavras(palavra, arrFrases) {
    let resultado = []
    for(let i = 0; i < arrFrases.length; i++) {
        if(arrFrases[i].match(palavra)) {
            resultado.push(arrFrases[i])
        }    
    }
    return resultado
}

console.log(buscarPalavras("bobão", ["Momobobão", "Arrozbobão", "vailá"]))