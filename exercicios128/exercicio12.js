/*
Escreva uma função que recebe um objeto como primeiro parãmetro e, como segundo parâmetro, o 
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem 
propriedade especificada no segundo parâmetro.
*/

function removerPropriedade(objeto, nomePropriedade) {
    const copia = Object.assign({}, objeto) //ou const copia = {...objeto}
    delete copia[nomePropriedade]

    return copia
}

console.log(removerPropriedade({a: 1, b: 2}, "a"))