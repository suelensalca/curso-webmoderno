// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados.

function triangulos(ladoa, ladob, ladoc) {
    if (ladoa == ladob && ladoa == ladoc && ladob == ladoc) {
        console.log("Equilátero")
    } else if (ladoa != ladob && ladoa != ladoc && ladob != ladoc) {
        console.log("Escaleno")
    } else {
        console.log("Isósceles")
    }
}

triangulos(2, 2, 2) //Equilátero
triangulos(2, 5, 2) //Isósceles
triangulos(2, 9, 4) //Escaleno
    