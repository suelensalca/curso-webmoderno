/*const ferrari = {
    modelo: "F40",
    velMax: 324
}

const volvo = {
    modelo: "V40",
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__===Object.prototype)
console.log(volvo.__proto__===Object.prototype)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
*/

//Cadeia de protótipos (prototype chain)
const avo = { attr1: "A"}
const pai = { __proto__: avo, attr2: "B"}
const filho = {__proto__: pai, attr3: "C"}
console.log(filho.attr1)  //ele vai mostrar A pq achou no avo, ele vai mostrar o attr que aparecer primeiro se tiver em dois

const carro = {
    velAtual: 0,
    velMax: 200,
    acelarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {  //shadowing sombreamento, variavel ferrari sombreia carro
    modelo: "F40",
    velMax: 324
}

const volvo = {
    modelo: "V40",
    status() {
        return `${this.modelo}:${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelarMais(100)
console.log(volvo.status())

ferrari.acelarMais(300)
console.log(ferrari.status())