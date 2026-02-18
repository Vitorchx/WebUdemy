const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// O resultado do código acima é:
// 10
// 10

// O valor de i é 10 porque a variável i é declarada com var, o que a torna uma variável global. 
// Quando o loop for concluído, o valor de i será 10, pois o loop incrementa i até que a condição i < 10 seja falsa. 
// Portanto, quando as funções armazenadas em funcs são chamadas, elas acessam o valor final de i, que é 10. 
// Isso acontece porque as funções criadas dentro do loop compartilham a mesma variável i, e quando elas são executadas, elas veem o valor atual de i, que é 10.