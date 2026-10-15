let a = 'A'
let b = 'B'
let c = 'C'

const letras = [c, b, a];
[a, b, c] = letras

console.log(a, b, c);

// ...nome = server para pegar os resto das informações

const numero = [1000, 2000, 3000, 4000, 5000, 6000]
const [um, dois, tres, ...resto]= numero 
console.log(um, dois, tres);
console.log(resto);

// ,, = passar um vazio para saltar um valor

const numero = [1000, 2000, 3000, 4000, 5000, 6000]
const [um, , , quatro]= numero 
console.log(um,quatro);

// array dentro de array

const numero =[ [1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [lista1]=numero
console.log(lista1[2]);
