/*
Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o 
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro
de entrada não for de nenhum dos tipos acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo"
*/

function inverso(valueType) {
     if(valueType == true) {
        return false
    }
    if(valueType == false) {
        return true
    }
    if(typeof valueType == 'number') {
        return -valueType
    }
    if(typeof valueType == -'number') {
        return valueType
    }
    else {
        return "booleano ou número esperados, mas o parâmetro é do tipo " + typeof valueType
    }
}

console.log(inverso(true))

/*
verificação de erro do erns
if(typeof valueType !== 'number' &&
 typeof valueType !== 'boolean') 
 return  "booleano ou número esperados, mas o parâmetro é do tipo " + typeof valueType

return -valueType
*/