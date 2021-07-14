const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: false},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const produtoCaro = produto => produto.preco > 1000
const produtoFragil = produto => produto.fragil

const resultado = produtos.filter(produtoCaro).filter(produtoFragil)

console.log(resultado)