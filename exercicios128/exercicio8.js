//Desenvolva uma função que recebe dois números inteiros não negativos e realize a multiplicação deles.

function multiplicar(num, multi) {
    let result = 0
    for(let i = 0; i < multi; i++) {
        result = result + num
    }
    return result
}

console.log(multiplicar(6, 5))