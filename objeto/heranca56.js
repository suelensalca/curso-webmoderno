console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split(""). reverse().join("")
}

console.log("Escola Cod3r".reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(["a", "b", "c"].first())

function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula("Bem Vindo", 123)
const aula2 = new Aula("Até Breve", 456)
console.log(aula1, aula2)

//simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, "Bem Vindo", 123)
const aula4 = novo(Aula, "Até Breve", 456)

console.log(aula3, aula4)