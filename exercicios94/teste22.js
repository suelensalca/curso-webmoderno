/*
Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 -janeiro, 2-fevereiro...) que foi paga e o valor da
anuidade. A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros( sob o regime
de juros compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. 
*/

function anuityMath(monthNumber, anuityValue) {
    let taxaDeJuros = (monthNumber * 0.05) + 1   
    let operacaoJurosC = taxaDeJuros.toFixed(2) ** monthNumber

    switch(monthNumber) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
        return operacaoJurosC * anuityValue
    }
}


//resposta

console.log(anuityMath(6, 1000).toFixed(2))

function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(6, 1000))