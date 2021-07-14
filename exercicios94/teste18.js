/*
Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva "Número fora do intervalo".
*/

function readNumber (numberOptions) {
    switch (numberOptions) {
        case 0:
            return "zero"
        case 1:
            return "one"
        case 2:
            return "two"
        case 3:
            return "three"
        case 4:
            return "four"
        case 5:
            return "five"
        case 6:
            return "six"
        case 7:
            return "seven"
        case 9:
            return "nine"
        case 10:
            return "ten"
        default:
            return "Número fora do intervalo"
    }
}

console.log(readNumber(1))
console.log(readNumber(3))
console.log(readNumber(6))
console.log(readNumber(9))
console.log(readNumber(10))
console.log(readNumber(11))