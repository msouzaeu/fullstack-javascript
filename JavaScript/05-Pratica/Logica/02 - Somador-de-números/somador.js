// 02 - Somador de números
// Conceitos: do...while, prompt(), Number(), acumuladores e operadores aritméticos.
// Crie um programa que peça números ao usuário repetidamente. Quando ele digitar 0, o programa deve parar e mostrar a soma dos números informados, sem incluir o zero.

let num;
let soma = 0
do {
    num = Number(prompt('Digite um número:'))
    soma += num
} while (num !== 0)

    console.log(`A soma dos números é: ${soma}`);
    