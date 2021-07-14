/*
Escreva duas funções, uma para progressão aritmética e uma para progressão 
geométrica que recebam como parâmetros um número n (número de termo), a1
(o primeiro termo) e r (a razão) e escreva os n termos, bem como a soma
dos elementos.
*/

let paArray = []
let pgArray = []

function paMath(n, a1, r) {
    for(i = 0; i < n; i++) {
        paArray.push(a1 + r * i)
    }
    console.log(`The PA is ${paArray}`)
}

paMath(4, 4, 3)

let paSum = paArray.reduce(sumMath)

function sumMath (total, value) {
    return total + value
}

console.log(`The sum of PA is ${paSum}`)

function pgMath(n, a1, r) {
    for(i = 0; i < n; i++) {
        pgArray.push(a1 * (r ** i))
    }
    console.log(`The PG is ${pgArray}`)
}

pgMath(4, 4, 3)

let pgSum = pgArray.reduce(sumMath)

console.log(`The sum of PG is ${pgSum}`)