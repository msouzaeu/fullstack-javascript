let num1 = 9.724

// math.floor() => arredonda o número para baixo
let num2 = Math.floor(num1)

// math.ceil() => arredonda o número para cima
let num3 = Math.ceil(num1)

// math.round() => arredonda automaticamente o número para o inteiro mais próximo
let num4 = Math.round(num1)

console.log(num2);
console.log(num3);
console.log(num4);


// math.max("passar o valor") => pega o maior número da sequencia
// math.min("passar o valor") =>pega o menor número da sequencia

console.log(Math.max(10, 20));
console.log(Math.min(1,2,5,7,13,1,3,5,67,19321,32151,432, 511));

// math.random()  => gera um número aleatório entre 0 e 1
// Math.floor(Math.random() * (max - min + 1)) + min => denife um intervalo para sorteio do número

console.log (Math.floor(Math.random() * 10 ))
console.log(Math.floor(Math.random() * (20 - 10 + 1)) + 10);
