for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i =', i)

// O resultado do código acima é:
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// i = 10

// O valor de i é 10 porque a variável i é declarada com var, o que a torna uma variável global. 
// Quando o loop for concluído, o valor de i será 10, pois o loop incrementa i até que a condição i < 10 seja falsa. 
// Portanto, quando o console.log('i =', i) é executado, ele imprime o valor final de i, que é 10.