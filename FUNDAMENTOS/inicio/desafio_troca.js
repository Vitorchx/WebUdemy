let a = 7;
let b = 94;

console.log("Antes da troca: a = " + a + ", b = " + b); // Antes da troca: a = 7, b = 94

let temp = a; // temp recebe o valor de a (temp = 7)
a = b;        // a recebe o valor de b (a = 94)
b = temp;     // b recebe o valor de temp (b = 7)

console.log("Depois da troca: a = " + a + ", b = " + b); // Depois da troca: a = 94, b = 7           