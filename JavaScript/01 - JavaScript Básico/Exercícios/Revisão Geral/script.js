// Bloco 1: variáveis, operadores e conversões

const valorProduto=Number(prompt('Informe o valor do produto'))
const valorQuantidade= Number(prompt('Informe a quantidade do produto'))
const totalPago = Number(prompt('Qual foi o valor pago?'))

const valorCompra = valorProduto*valorQuantidade
const troco = totalPago - valorCompra 

alert(`Total: R$ ${valorCompra.toFixed(2)}
    Troco: R$ ${troco.toFixed(2)}`)

// Bloco 2: Strings

const frase = "Estou estudando JavaScript e JavaScript é muito legal";

console.log(frase.length);
console.log(frase.search('JavaScript'));
console.log(frase.lastIndexOf('JavaScript'));
console.log(frase.replace('JavaScript', 'Full Stack'));
console.log(frase.toUpperCase());
console.log(frase.slice(0, 15));

// Bloco 3: Numbers + Math

console.log(Number("35.7"));
console.log(parseInt("35.7"));
console.log(parseFloat("35.7"));
console.log((15.678).toFixed(2));
console.log(Math.floor(8.9));
console.log(Math.ceil(8.1));
console.log(Math.round(8.6));
console.log(Math.max(10, 25, 7));
console.log(Math.min(10, 25, 7));

// Bloco 4: DOM

document.getElementById('titulo') // procura um ID
document.querySelector('.botao') // procura usando a lógica de seletores CSS
titulo.innerHTML = 'Olá, JavaScript!' // pode alterar o conteúdo dentro do elemento
console.log(nome.value) // pega o valor dentro do elemento
form.addEventListener('submit', cadastrar) // pega o evento acontece na página
.preventDefault() // impede o comportamento padrão do evento