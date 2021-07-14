/*
Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch,
caso o comprador queira o hatch, retorne: "Compra efetuada com sucesso". Nas outras opções, retorne:
"Tem certeza que não prefere esse modelo?". Caso seja especificado um modelo que não está disponivel,
retorne no console: "Não trabalhamos com este tipo de automóvel aqui".
*/

function buyCar(carModel) {
    let text
    switch(carModel) {
        case "hatch":
            text = "Compra efetuada com sucesso."
            break
        case "sedan":
        case "motocicleta":
        case "caminhonete":
            text = "Tem certeza que não prefere esse modelo?"
            break
        default:
            text = "Não trabalhamos com este tipo de automóvel aqui."
    }
    return text
}

console.log(buyCar("hatch"))
console.log(buyCar("sedan"))
console.log(buyCar("caminhonete"))
console.log(buyCar("corsa"))
