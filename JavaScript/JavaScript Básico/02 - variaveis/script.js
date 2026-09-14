/* VARIAÇÕES DE ESCRITA
let nome='Mateus' 
let nome;
*/

// Não podemos criar variavéis/constantes com palavras reservadasd do JS
// Variavéis/constantes precisam ter nome significativos
// Não pode começar o nome de uma variável/constantes com um número
//Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos redeclarar variavéis com LET
// não podemos modificar o valor de uma constantes


//              LET
/*
let nome;
nome='Mateus'
console.log(nome, 'nasceu em 1997')
nome='João'
console.log('Em 2000',nome, 'conheceu Maria')

    
//              CONST

const sobrenome ='Fernando'
console.log(sobrenome, 'está me devendo');

// typeof (nome do let/const)  - server para saber o tipo de dados

console.log( typeof (sobrenome));

*/

// EXERCICIO

/*
Mateus Souza de Lima, nasceu em 1997,tem 29 anos, pesa 80kg, tem 1.81 de altura e seu IMC é de 
*/

const nome='Mateus Souza'
const sobrenome='de Lima'
const idade = 29
const peso = 80
const altura = 1.81
let imc
imc = peso / (altura*altura)
let anoNascimento
anoNascimento = 2026-idade

// templates strigns

console.log(nome, sobrenome, 'nasceu em', anoNascimento, 'tem', idade, 'anos, pesa', peso +'kg')
console.log(`tem ${altura} de altura e seu IMC é de: ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`);

/*
let varA = "A"  //B

let varB = "B"  //C

let varC = "C"  //A
*/

let varA = 'A'
let varB = 'B'
let varC = 'C'
const varTemp = varA

varA = varB
varB = varC
varC = varTemp

console.log(varA, varB, varC)


