console.log(Math.ceil(6.1)) // arredonda para cima

const obj1 = {}
obj1.nome = 'Bola' // criando um atributo nome e atribuindo o valor 'Bola'
console.log(obj1.nome) // acessando o valor do atributo nome

function Obj(nome) {
    this.nome = nome // criando um atributo nome e atribuindo o valor passado como parâmetro
    this.exec = function() { // criando um método exec
        console.log('Exec...') // imprimindo 'Exec...' no console
    }
}


const obj2 = new Obj('Cadeira') // criando um objeto a partir da função construtora Obj
const obj3 = new Obj('Mesa') // criando outro objeto a partir da função construtora Obj
console.log(obj2.nome) // acessando o valor do atributo nome do objeto obj2
console.log(obj3.nome) // acessando o valor do atributo nome do objeto obj3 
obj3.exec() // tentando acessar um método que não existe no objeto obj3, resultará em undefined