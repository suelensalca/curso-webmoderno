/*
Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: "Não vendemos esta fruta aqui". Caso kiwi, retorne: "Estamos
com escassez de kiwis". Caso melancia, retorne: "Aqui está, são 3 reais o quilo". Teste com
estas três opções. Crie também um default, que retornará uma mensagem de erro no console.
*/

function fruits(fruitsOptions) {
    let text
    switch (fruitsOptions) {
        case "maçã":
            text = "Não vendemos esta fruta aqui"
            break
        case "kiwi":
            text = "Estamos com escassez de kiwis"
            break
        case "melancia":
            text = "Aqui está, são 3 reais o quilo"
            break
        default:
            text = "Erro"
    }
    return text
}

console.log(fruits("maçã"))
console.log(fruits("kiwi"))
console.log(fruits("melancia"))
console.log(fruits("eai"))