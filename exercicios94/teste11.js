/*
As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
de 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo dai elabore uma função que recebe um ano e calcula se ele é ano bissexto,
imprimindo no console a mensagem e retornando true ou false.
*/

/*
function leapYearMath2 (year) {
    if (year % 400 == 0) {
        return `Esse ano é bissexto na regra 3, ` + true
    } else if (year % 100 == 0) {
        return `Esse ano não é bissexto na regra 2, ` + false
    } else if(year % 4 == 0) {
        return `Esse ano é bissexto na regra 1, ` + true
    } else {
        return `Esse ano não é bissexto na regra 4, ` + false
    }
}

let leapYear = leapYearMath2(1600)
let leapYear2 = leapYearMath2(1660)
let notleapYear = leapYearMath2(2021)
let leapYear3 = leapYearMath2(1300)

console.log(leapYear, leapYear2, notleapYear, leapYear3)
*/

//Refactorando - mensagem e boolean separados

function leapYearMath (year) {
    if (year % 400 == 0) {
        console.log("Esse ano é bissexto na regra 3")
        return true
    } else if (year % 100 == 0) {
        console.log("Esse ano não é bissexto na regra 2")
        return false
    } else if(year % 4 == 0) {
        console.log("Esse ano é bissexto na regra 1")
        return true
    } else {
        console.log("Esse ano não é bissexto na regra 4")
        return false
    }
}

console.log(leapYearMath(1600))
console.log(leapYearMath(1660))
console.log(leapYearMath(2021))
console.log(leapYearMath(1300))
