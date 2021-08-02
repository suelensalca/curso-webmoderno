const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

// app.get('/produtos', (req, res, next) => {
//     res.send({nome: 'Notebook', preco: 123.45}) // Converte para JSON
// })

app.use(express.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // vai converter em JSON p ir p web
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})