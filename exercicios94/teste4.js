//Dados dois valores, dividendo e divisor, imprima o resultado e o resto da divisão.
function operacaoDiv(dividendo, divisor) {
  return dividendo / divisor
}

function operacaoMod(dividendo, divisor) {
    return dividendo % divisor
}

function operacaoFinal(dividendo, divisor) {
    let resultado1 = operacaoDiv(dividendo, divisor)
    let resultado2 = operacaoMod(dividendo, divisor)
    return `O resultado é igual a ${resultado1} e o resto é igual a ${resultado2}`
}

let resultado = operacaoFinal(11, 2)

console.log(resultado)