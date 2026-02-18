const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()     
// O resultado do código acima é:
// 2
// 8

// O valor de i é diferente para cada função porque a variável i é declarada com let, o que a torna uma variável de bloco. 
// Cada iteração do loop cria um novo escopo para a variável i, e cada função armazenada em funcs captura o valor de i correspondente à sua iteração. 
// Portanto, quando as funções são chamadas, elas acessam o valor de i que foi capturado no momento em que foram criadas, resultando em 2 para funcs[2]() e 8 para funcs[8]().