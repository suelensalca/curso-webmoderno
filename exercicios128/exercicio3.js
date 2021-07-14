/*
Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário 
igual a R$ x", em que x é o quanto o funcionário ganhou no mês.
*/

function calcularSalario(hoursWorked, hourValue) {
    return hoursWorked * hourValue
}

console.log(calcularSalario(150, 40.50))