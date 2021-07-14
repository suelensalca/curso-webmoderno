/*
Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de classificação: 
Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas possuem a seguinte 
regra de arredondamento: se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota
para esse próximo múltiplo de 5. Se anota for abaixo de 38, não é feito nenhum arredondamento pois esta nota 
resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada
por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. 
No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.
*/

function sistemaNota(aluno, nota) {
    let notaCorrigida = arredondar(nota)
    if(nota < 38) {
        return `${aluno}, você está reprovado. Sua nota é ${nota}.\n`
    } else if(notaCorrigida < 40) {
        return  `${aluno}, você está reprovado. Sua nota é ${nota}.\n`
    } else {
        return `${aluno}, você está aprovado! Sua nota é ${notaCorrigida}.\n`
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

let notaJoao = sistemaNota("João", 54)
let notaMaria = sistemaNota("Maria", 38)
let notaErns = sistemaNota("Erns", 37)

console.log(notaJoao, notaMaria, notaErns)
