// 1) Dado dois valores, mostre no console a soma, subtração. multiplicação e divisão

function operacoes (a, b) {
    console.log(a + b, a - b, a * b, a / b)
}

operacoes (10, 2)

//erns
function operations(a, b) {
    console.log(`soma:  ${a + b}`);
    console.log(`subtração:  ${a - b}`);
    console.log(`multiplicação:  ${a * b}`);
    console.log(`divisão: ${a / b}`);
}

operations(10, 2)

//um de cada vez
const soma = (a,b) => a + b
const sub = (a,b) => a - b
const mult = (a,b) => a * b
const div = (a,b) => a / b

function total(a, b, operation) {
    return operation(a, b)
}

let valor = total(10, 2, mult)

console.log(`valor: ${valor}`)
















