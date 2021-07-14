/*
Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa
recebe como parâmetros dois valores numéricos e uma string referente à operação e a realiza com os 
valores numércos na ordem que foram inseridos. Crie um caso default para operações inválidas.
*/

function basicCalculator (x, y, mathOperation) {
    switch (mathOperation) {
        case "addition":
            return x + y
        case "subtraction":
            return x - y
        case "multiplication":
            return x * y
        case "division":
            return x / y
        default:
            return "not valid"
    }
}

console.log(basicCalculator(10, 2, "addition"))
console.log(basicCalculator(10, 2, "subtraction"))
console.log(basicCalculator(10, 2, "multiplication"))
console.log(basicCalculator(10, 2, "division"))
console.log(basicCalculator(10, 2, "exponentiation"))