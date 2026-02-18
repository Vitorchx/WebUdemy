var numero = 1
{
    var numero = 2
    console.log('Dentro =', numero) // Dentro = 2, a variável numero foi sobrescrita dentro do bloco, pois var tem escopo global ou de função, não de bloco
}
console.log('Fora =', numero) // Fora = 2, a variável numero foi sobrescrita dentro do bloco, pois var tem escopo global ou de função, não de bloco