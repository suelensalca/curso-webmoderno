/*
Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
*/

function receberSomenteParesIndicesPares(numeros) {
    let resultado = []

    for(let i = 0; i < numeros.length; i += 2) {
        const numeroPar = numeros[i] % 2 === 0

        if(numeroPar)
            resultado.push(numeros[i])
    }

    return resultado
}

console.log(receberSomenteParesIndicesPares([10, 70, 120]))