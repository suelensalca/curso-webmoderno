//Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

function maiorOuIgual(firstNumber, secondNumber) {
    if(typeof firstNumber !== 'number') {
        return false
    } 
    if(typeof secondNumber !== 'number') {
        return false
    } 

    if(firstNumber >= secondNumber) {
        return true
    } else {
        return false
    }
}

console.log(maiorOuIgual(5, 1))