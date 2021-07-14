/*
Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos
de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja
atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.
*/

let gradeArray = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 13]
let finalGrade = gradeArray.map(gradeValue)

function gradeValue(grade) {
    if(grade <= 4.9) {
        return grade + ": conceito D"
    } else if(grade <= 6.9) {
        return grade + ": conceito C"
    } else if(grade <= 8.9) {
        return grade + ": conceito B"
    } else if(grade > 9.0 && grade < 10.0) {
        return grade + ": conceito A"
    } else {
        return "Nota inválida"
    }
}

console.log(finalGrade)