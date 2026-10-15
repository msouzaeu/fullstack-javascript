/*
    alert => Janela de alerta
    windows => janela de confirmação
    prompt => Janela para usuário informar um dado
*/

alert('Bem vinda a calculadora rápida :D')

let num1 = prompt('Informe um número') 
let num2 = Number(prompt('Informe um número')) // se colcoar o + ou number antes já transforma em Inteiro
let num3 = +prompt('Informe o terceiro número:')
num1 = parseInt(num1)

alert(`O resultado da soma é: ${num1 + num2 + num3}, subtração: ${num1 - num2 - num3}, multiplicação: ${num1 * num2 * num3}, divisão ${num1 / num2 / num3} `)
