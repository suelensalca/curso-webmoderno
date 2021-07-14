/*
Crie um programa que exibe se um dia é útil, fim de semana ou dia inválido dado o número referente
ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

let text1
let weekDay1 = 2

switch (weekDay1) {
    case 1:
    case 7:
        text1 = "Hoje é fim de semana!"
        break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        text1 = "Hoje é um dia útil!"
        break
    default:
        text1 = "Dia inválido"
}

console.log(text1)


//Refactorando com função

function weekDay(numberDay) {
    let text
    switch (numberDay) {
        case 1:
        case 7:
            text = "Hoje é fim de semana!"
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            text = "Hoje é um dia útil!"
            break
        default:
            text = "Dia inválido"
    }
    return text
}


console.log(weekDay(1))