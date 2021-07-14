const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
// mulher chinesa com menor salario

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

// @ts-ignore
axios.get(url).then(response => {
    const func = response.data

        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    
        console.log(func)
})