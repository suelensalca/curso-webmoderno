//Crie uma função que receba um array e retorne o primeiro e o último elemento desse array como um novo array.

/*
function receberPrimeiroUltimo(arr) {
    let result = arr.slice(0, 1).concat(arr.slice(2))
    return result
}

console.log(receberPrimeiroUltimo(["beijo", "Ernesto", "Momodi"]))
*/

function receberPrimeiroUltimo(arr) {
    let primeiro = arr[0]
    let ultimo = arr[arr.length - 1]
    return [primeiro, ultimo]
}

console.log(receberPrimeiroUltimo([7, 14, 51]))