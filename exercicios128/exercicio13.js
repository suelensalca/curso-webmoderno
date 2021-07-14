//Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro.


function filtrarNumeros(arrElementos) {
    let arrNumbers = []
    for(let i = 0; i < arrElementos.length; i++) {
        if(typeof arrElementos[i] == 'number') {
            arrNumbers.push(arrElementos[i])
        }
    }
    return arrNumbers    
}

console.log(filtrarNumeros(["a", 1, 2, "8", 3]))