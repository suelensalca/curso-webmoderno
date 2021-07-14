const obj = {a: 1, b: 2, c: 3, soma(){return a + b + c}}
console.log(JSON.stringify(obj)) //ele ignora a soma pq é um formato textual

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) //JSON atributos DEVEM ter aspas duplas - virou objeto
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))
