/*
A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos
bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo
de 100, exceto se for também multiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele
é bissexto ou não.
*/

function checarAnoBissexto(ano) {
    if(ano % 400 == 0) {
        return true
    }
    if(ano % 100 == 0) {
        return false
    }
    if(ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(checarAnoBissexto(1300))