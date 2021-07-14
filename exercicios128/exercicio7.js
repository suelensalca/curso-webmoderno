/*
Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne
se o parâmetro numero (o primeiro) está entre mínimo e maximo. Quando o parâmetro inclusivo for true,
tenha "entre" como inclusivo, ou seja, considerando numero é igual a minimo ou maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrâo deverá ser false, portanto, a lógica será exclusiva,
não considerando se numero é igual a minimo ou a maximo.
*/

function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if(inclusivo) return numero >= minimo && numero <= maximo
    
    return numero > minimo && numero < maximo
}