const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        lagradouro: 'Rua ABC',
        numero: 1000
    }


}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenme, bemHumorada = true } = pessoa
console.log(sobrenme, bemHumorada)

const { endereco: { lagradouro, numero, cep } } = pessoa
console.log(lagradouro, numero, cep)