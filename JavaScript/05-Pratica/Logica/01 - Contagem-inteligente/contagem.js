// 01 - Contagem inteligente
// Conceitos: while, if, %, operadores de comparação e console.log().
// Crie uma variável numero começando em 1. Use um while para percorrer os números de 1 até 20.
// Regras:
// - Se o número for par, mostre Número X é par.
// - Se for ímpar, mostre Número X é ímpar.
// - Ao terminar, mostre Contagem finalizada!.
// Objetivo: entender como a condição do laço e o incremento controlam a repetição.

let numero = 1

while(numero <= 20){
    const parImpar = numero % 2 === 0 ? 'Par' : 'Impar'
    console.log(numero, parImpar);
    numero++
}

console.log('Contagem finalizada!');
