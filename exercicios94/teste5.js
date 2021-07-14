//Dado um valor com muitos dígitos, retorne um valor com dois dígitos após a vírgula.
function operacaoNum(numLongo) {
    return numLongo.toFixed(2)
}

let valorReal = operacaoNum(0.300000000004)
let resultado = "R$" + valorReal

console.log(resultado.replace(".", ","))

//como mudar o ponto para vírgula?