// 03 - Adivinhe o número
// Conceitos: Math.random(), while, if/else, comparação e contador.
// O programa deve sortear um número entre 1 e 20. O usuário tentará adivinhar até acertar.
// Regras:
// - Se errar para baixo, mostre Tente um número maior.
// - Se errar para cima, mostre Tente um número menor.
// - Quando acertar, mostre uma mensagem de vitória e quantas tentativas foram necessárias.
// Objetivo: combinar repetição, condições e atualização de variáveis.
// Dica: você já estudou Math.floor() e Math.random(). Pense em como combiná-los para gerar o número.

const numeroAleatorio = Math.floor(Math.random() * (20 - 1 + 1)) + 1
let numUsuario;
let contTentativas = 1
alert('A idéia do jogo é você acertar o número misterioso de 1 a 20. Boa sorte!')


while (numUsuario !== numeroAleatorio) {
    numUsuario = Number(prompt('Informe um número'))

    if (isNaN(numUsuario) || numUsuario > 20 || numUsuario < 1) {
        alert('Digite um número válido')
        continue;
    }

    if (numUsuario !== numeroAleatorio) {
        const numAcerto = numUsuario < numeroAleatorio ? 'Tente um número maior' : 'Tente um número menor'
        contTentativas++
        alert(numAcerto)
    }
} alert(`Acertou miseravi. Total de tentativas: ${contTentativas}`)


