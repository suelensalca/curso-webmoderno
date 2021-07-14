//Faça um algoritmo que calcule o fatorial de um número.

/*
function factorialMath(factorialNumber) {
    if(factorialNumber > 0) {
        let numberMath = factorialNumber * (factorialNumber - 1)
        console.log(numberMath)
    } else {
        console.log("Number is not valid.")
    }
}

let firstNumber = factorialMath(5)
function factorialMath(factorialNumber) {
    let i
    for (i = 1; i < factorialNumber; i++) {
        return factorialNumber * i
    }
}
console.log(factorialMath(5))
*/

function factorialMath(n) {
    if(n == 0 || n == 1) {
        return 1
    }
    let temp = n * factorialMath(n - 1)
    return temp
}

console.log(factorialMath(10))