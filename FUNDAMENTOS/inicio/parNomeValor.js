// par nome/valor
const saudacao = 'Olá, seja bem-vindo!';

function exec() {
    const saudacao = 'Fala pessoal!';
    return saudacao;
}


// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);       