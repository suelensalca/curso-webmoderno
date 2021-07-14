/*
Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de
cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50,
R$ 10 e R$ 5 e R$ 1. Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao 
solicitar R$ 18, o programa deve informar apenas a seguinte informação (note que não foram exibidas
informações sobre as demais cédulas) : 1 nota(s) de R$. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/


function caixaEletronico(valor, notas) {
    if(valor >= 100) {
        let resto = valor - 100
        notas.push(100)
        caixaEletronico(resto, notas)
    } else if(valor >= 50) {
        let resto = valor - 50
        notas.push(50)
        caixaEletronico(resto, notas)
    } else if(valor >= 10) {
        let resto = valor - 10
        notas.push(10)
        caixaEletronico(resto, notas)
    } else if(valor >= 5) {
        let resto = valor - 5
        notas.push(5)
        caixaEletronico(resto, notas)
    } else if(valor >= 1) {
        let resto = valor - 1
        notas.push(1)
        caixaEletronico(resto, notas)
    } else {

    }
}

function contarItem(arr, numeroNota) {
    let count = 0;
    for(let i = 0; i < arr.length; ++i) {
        if(arr[i] == numeroNota) {
            count++;
        }
    }
    return count
}

function exibirMensagem(entrada) {
    let notas = []

    caixaEletronico(entrada, notas)

    let mensagem = ""
    let ultimoValor
    notas.forEach(item => {
        if(ultimoValor != item) {
            let valor = contarItem(notas, item)
            mensagem += `${valor} nota(s) de R$ ${item}. `
        }
        ultimoValor = item
    })
    return mensagem
}


console.log(exibirMensagem(1048))