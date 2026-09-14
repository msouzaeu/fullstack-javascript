const numero = Number(prompt('Digite um número:'))
const numeroDigitado = document.getElementById('titulo')
const numeroRaiz = document.getElementById('raiz')
const numeroInteiro = document.getElementById('num-int')
const resultInteiro = document.getElementById('result-int')
const numeroNan = document.getElementById('num-nan')
const resultNan = document.getElementById('result-nan')
const texto = document.getElementById('texto')

numeroDigitado.innerHTML = numero
numeroRaiz.innerHTML = numero ** 0.5
numeroInteiro.innerHTML = numero
resultInteiro.innerHTML = Number.isInteger(numero)
numeroNan.innerHTML = numero
resultNan.innerHTML = Number.isNaN(numero)
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
