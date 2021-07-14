/*
Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa
aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma
funcionalidade que você está desevolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.
*/

let arrayProdutos = [{nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
{nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}]

let produtos = arrayProdutos => arrayProdutos.preco

let precoProdutos = arrayProdutos.map(produtos)

let resultado = precoProdutos.reduce(despesasTotais)

function despesasTotais(total, valor) {
    return total + valor
}

console.log(resultado)