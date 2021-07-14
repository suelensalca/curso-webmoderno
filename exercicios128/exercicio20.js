//Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triâgulo.

function areaTriangulo(base, altura) {
    let total = (base * altura) / 2
    return total.toFixed(2)
}

console.log(areaTriangulo(9.25, 13.1))