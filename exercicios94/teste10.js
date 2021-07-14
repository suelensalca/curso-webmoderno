// Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne true ou false.

function divisivelTres (numero) {
    if (numero % 3 == 0) {
        return true
    } else {
        return false
    }
}

let numeroInteiro = divisivelTres(10)

console.log(numeroInteiro)