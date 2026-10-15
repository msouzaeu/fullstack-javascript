
/**
console.log() 
let e const
+, -, *, /
+=, -=, *=, /=
++ e --
** → potenciação
% → resto da divisão
Number()
parseInt()
parseFloat()
alert()
prompt()
window
 */

// SALDO BANCÁRIO

/*
const nome = prompt('Qual seu nome?')
const saldo = Number(prompt('Qual valor você tem em conta?'))
const saldoRecebeu = Number(prompt('Qual valor você recebeu?'))
console.log(`Seu saldo inicial é de: ${saldo}`);

saldo += saldoRecebeu

alert(`${nome}, seu saldo atual é de: ${saldo}`);


// NÚMERO MISTERIOSO


const num = Number(prompt('Informe um número:'))
const quadrado = num ** 2
const restoDivisao = num % 2
console.log(`Numero informado: ${num}`);
console.log(`Quadrado: ${quadrado}`);
console.log(`Resto de ${num} dividido por 2 é: ${restoDivisao}`);


// CALCULADORA DE COMPRA


const nomeProduto = prompt('Informe o nome do produto')
const precoProduto = Number(prompt('Informe o preço do produto'))
const qntdProduto = Number(prompt('Informe a quantidade do produto'))
const total = precoProduto * qntdProduto
const valorPago = Number(prompt('Quanto você pagou:'))
const troco = valorPago - total
alert(`Produto: ${nomeProduto}
Quantidade: ${qntdProduto}
Total: R$ ${total}
Valor pago: R$ ${valorPago}
Troco: R$ ${troco}`)


// CONVERSÃO


const idade = parseInt(prompt("Digite sua idade:"));
const altura = parseFloat(prompt("Digite sua altura:"));
alert(`Você tem ${idade} e mede ${altura} metros.`);



const valorConta = +prompt('Qual o total da conta?')
const divisaoConta = Number(prompt('Quantas pessoas vão dividir a conta?'))
const valorDividido = valorConta / divisaoConta
const quadradoPessoas = divisaoConta ** 2
const restoConta = valorConta % divisaoConta
alert(`
Total da conta: R$ ${valorConta}
Quantidade de pessoas: ${divisaoConta}
Cada pessoa paga: R$ ${valorDividido}
Quantidade ao quadrado: ${quadradoPessoas}
Resto da divisão: ${restoConta}
    `)


// STRING

//🧩 Exercício 1

const texto = "JavaScript";

console.log(texto.length);
console.log(texto[4]);
console.log(texto.toUpperCase());
console.log(texto[texto.length - 1]);

//🧩 Exercício 2

const usuario = 'mateus_souza_dev'

console.log(usuario[0]);
console.log(usuario[usuario.length - 1]);
console.log(usuario.length);

//🧩 Exercício 3

const email = "mateus.dev@gmail.com";

console.log(email.search('@'));
console.log(email.slice((email.search('@') + 1)));

//🧩 Exercício 4

const tecnologias = "HTML,CSS,JavaScript";

console.log(tecnologias.split(','));

//🧩 Exercício 5

const mensagem = "Eu estou aprendendo JavaScript";

console.log(mensagem.replace("aprendendo",
  "estudando").toUpperCase());

//🧩 Exercício 6

const nomeArquivo = "foto-perfil-mateus.jpg";

console.log(nomeArquivo.toUpperCase());
console.log(nomeArquivo.replace('-', ' ').replace('-', ' '));

//🧩 Exercício 7

const endereco = "www.meusite.com/perfil/mateus";

console.log(
  endereco
    .slice(endereco.lastIndexOf("/") + 1)
    .toUpperCase())

//🧩 Exercício 7: match() x search()

const frase = "Estou estudando JavaScript todos os dias";

console.log(frase.match('JavaScript'));
console.log(frase.search('JavaScript'));

//🧩 Exercício 8: misturando tudo

const cadastro = "MATEUS-SOUZA|28|SALVADOR";

const partes = cadastro.replace('-', ' ')
  .toLowerCase()
  .split("|")


console.log('Nome:', partes[0])
console.log('Idade:', partes[1])
console.log('Cidade:', partes[2])


//🧩 Exercício 9

const dados = "MATEUS-SOUZA|28|SALVADOR|JAVASCRIPT";
const dadosNovos = dados
  .replace('-', ' ')
  .toLowerCase()
  .split('|')

console.log('Nome:', dadosNovos[0]);
console.log('Idade próximo ano:', Number(dadosNovos[1]) + 1);
console.log('Cidade:', dadosNovos[2]);
console.log('Tecnologia:', dadosNovos[3]);
console.log('Última letra da tecnologia:', dadosNovos[3][dadosNovos[3].length - 1])

//🧩 Exercício 10

const max = 20
const min = 1
const numRandom = Math.floor(Math.random() * (max - min + 1)) + min
console.log(`Numero sorteado: ${numRandom}
    É inteiro: ${Number.isInteger(numRandom)}`);


//🧩 Exercício 11

const numero = 25
const numString = numero.toString()
const numBinario = numero.toString(2)
console.log(`Número: ${numero}
Como String ${numString}
Em binário ${numBinario}`);

const nota1 = 7.5;
const nota2 = 9;
const nota3 = 6.8;
const nota4 = 8.2;
const notaMax = Math.max(nota1, nota2, nota3, nota4)
const notaMin = Math.min(nota1, nota2, nota3, nota4)
console.log(`Maior nota: ${notaMax}
  Menor nota: ${notaMin}
  `)


//🧩 Exercício 12 - DOM

const h1 = document.getElementById('titulo')
const p = document.getElementById('conteudo')
h1.innerHTML = 'JavaScript'
p.innerHTML += 'Full Stack'

const numSorteio = Math.floor(Math.random() * 10) + 1
const resultado = document.getElementById('resultado')
const numero = document.getElementById('numero')

numero.innerHTML = numSorteio
resultado.innerHTML = + " Sorteio concluído!"
console.log(numSorteio);

*/

//🧩 Desafio Final

const num1 = Math.floor(Math.random() * 10) +1
const num2 = Math.floor(Math.random() * 10) +1
const num3 = Math.floor(Math.random() * 10) +1
const numMaior = Math.max(num1, num2, num3)
const numMenor = Math.min(num1, num2, num3)


const titulo = document.getElementById('titulo')
const numSorteados = document.getElementById('sorteio')
const maior = document.getElementById('maior')
const menor = document.getElementById('menor')
const decimal = document.getElementById('decimal')


titulo.innerHTML +=" - JavaScript"
numSorteados.innerHTML = `Números sorteados:${num1}, ${num2}, ${num3}`
maior.innerHTML = `Maior número: ${numMaior}`
menor.innerHTML = `Menor número: ${numMenor}`
decimal.innerHTML = `Valor decimal: ${valorDec.toFixed(2)}`
