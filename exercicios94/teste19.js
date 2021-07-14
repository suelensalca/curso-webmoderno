/*
O cardápio de uma lanchonete é o seguinte:
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o
valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item.
Use o comando switch. Crie um caso default para produto não existente.


function dinnerMenu (productCode, quantity) {
    switch (productCode) {
        case 100:
            return quantity * 3
        case 200:
            return quantity * 4
        case 300:
            return quantity * 5.5
    }
}

let cachorroQuente = (dinnerMenu(100, 2))
let finalOrder = "R$" + cachorroQuente.toFixed(2).replace(".", ",")

console.log("O total do seu pedido é " + finalOrder)

*/

function dinnerMenu (productCode, quantity) {
    let productValue
    switch (productCode) {
        case 100:
            productValue = quantity * 3
            return "O total do Cachorro Quente é R$" + productValue.toFixed(2).replace(".", ",")
        case 200:
            productValue = quantity * 4
            return "O total do Hambúrger Simples é R$" + productValue.toFixed(2).replace(".", ",")
        case 300:
            productValue = quantity * 5.5
            return "O total do Cheeseburger é R$" + productValue.toFixed(2).replace(".", ",")
        case 400:
            productValue = quantity * 7.5
            return "O total do Bauru é R$" + productValue.toFixed(2).replace(".", ",")
        case 500:
            productValue = quantity * 3.5
            return "O total do Refrigerante é R$" + productValue.toFixed(2).replace(".", ",")
        case 600:
            productValue = quantity * 2.80
            return "O total do Suco é R$" + productValue.toFixed(2).replace(".", ",")
        default:
            return "Produto não existe"
    }
}

console.log(dinnerMenu(200, 3))
console.log(dinnerMenu(500, 2))
console.log(dinnerMenu(600, 10))
console.log(dinnerMenu(450, 8))