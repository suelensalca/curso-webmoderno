/*
Elabore duas funções que recebem três parâmetros: capital inicial, 
taxa de juros e tempo de aplicação. A primeira função retornará o
montante da aplicação financeira sob o regime de juros simples e a 
segunda  o valor da aplicação sob o regime de juros compostos.
*/

function valorJurS(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return (capitalInicial * taxaDeJuros) * tempoDeAplicacao + capitalInicial
}

let jurosSimples = valorJurS(20000, 0.06, 4)

function valorJurC(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    let operacaoJurosC = taxaDeJuros + 1
    let operacaoJurosC2 = operacaoJurosC ** tempoDeAplicacao
    return operacaoJurosC2 * capitalInicial
}

let jurosComposto = valorJurC(20000, 0.06, 4)

console.log(jurosSimples, parseInt(jurosComposto))