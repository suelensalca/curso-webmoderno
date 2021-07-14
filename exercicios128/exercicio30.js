/*
Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudantes estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um
objeto com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
*/

function receberEstudante(estudantes = {}) {

    let nomesEstudantes = {}

    Object.keys(estudantes).forEach( key => {
        let notas = estudantes[key]
        let media = notas.reduce( (total, value) => {
            return total + value
        }) / notas.length
        
        nomesEstudantes[key] = media
    })
    
    let estudante = {}
    let maiorNota = 0
    
    Object.keys(nomesEstudantes).forEach( key => {
        estudante = {}
        if(nomesEstudantes[key] > maiorNota ) {
            maiorNota = nomesEstudantes[key]
            estudante[key] = maiorNota
        }
    })
    return estudante
}

let estudantes = {
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8]
}

console.log(receberEstudante(estudantes))