let num1 = 0.7
let num2 = 0.1

// toString() => transforma número em string
console.log(num1.toString() + num2);

// toString(2) => transforma número em binário
console.log(num1.toString(2));

// toFixed("quantidade de casas decimais") => quantidade de casas decimais
console.log(num1.toFixed(2));

// Number.isInteger("passa a variavel") => para saber se o valor é um inteiro
console.log(Number.isInteger("num1"));

// Number.isNaN("passa a variavel") => para saber se o valor é um not a number
console.log(Number.isNaN("num1"));

// Number("const".toFixed(2)) => transforma o número pequeno em duas casas decimais e não mostra o valor "quebrado"

num1 += num2 // 0.8
num1 += num2 // 0.9

num1 = Number(num1.toFixed(2))


console.log(num1);

console.log(Number(num1.toFixed(2)));
console.log(Number.isInteger(num1));
