Array.prototype.forEach2 = function(funcao) {
    for(let i = 0; i < this.length; i++) {
        let item = this[i]
        let indice = i
        funcao(item, indice, this)
    }
}

const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"]

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})