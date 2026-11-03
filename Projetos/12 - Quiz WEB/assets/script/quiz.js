import { perguntas } from "./lista-perguntas.js" // importar a lista de outro arquivo

let indiceAtual = 0
const alternativas = 'ABCD'
let finalizaQuiz = false
let pontuacao = 0
let perguntasEmbaralhadas = embaralhaPerguntas(perguntas)

const numPergunta = document.getElementById('span-contador-pergunta')
const numPontuacao = document.getElementById('span-pontuacao')
const areaBoasVindas = document.getElementById('area-boas-vindas')
const bttComecar = document.getElementById('btt-comecar')
const bttConfirma = document.getElementById('btt-confirma')
const bttProxima = document.getElementById('btt-proxima')
const textoPergunta = document.getElementById('texto-pergunta')
const form = document.getElementById('form')
const textoAlternativas = document.querySelectorAll('.texto-alternativa')
const areaPergunta = document.getElementById('area-pergunta')
const areaRetornoFinal = document.getElementById('area-retorno-final')
const msgEscolhaAlternativa = document.getElementById('area-alerta')
const areaMensagemFinal = document.getElementById('mensagem-final')
const bttRecomecar = document.getElementById('btt-recomecar')
const vidaCheia = document.querySelectorAll('#span-vidas .fa-solid')


bttComecar.addEventListener('click', mostrarPergunta)
bttRecomecar.addEventListener('click', reiniciarQuiz)

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const retornoAlternativaMarcada = alternativaMarcada()

    if (retornoAlternativaMarcada === -1) {
        msgEscolhaAlternativa.innerHTML = 'Selecione uma alternativa'
        return
    } else {
        msgEscolhaAlternativa.innerText = ''

    }

    verificaResposta(retornoAlternativaMarcada, perguntasEmbaralhadas[indiceAtual].resposta)

    bttConfirma.hidden = true
    bttProxima.hidden = false

    desmarcarAlternativa()

})

bttProxima.addEventListener('click', function (e) {

    limpaCoresAlternativas()

    bttConfirma.hidden = false
    bttProxima.hidden = true

    
    validaPergunta()   

    if (finalizaQuiz) {
      return
  }

    mostrarPergunta()
console.log(finalizaQuiz);

})


function embaralhaPerguntas(perguntas) {

    const copia = [...perguntas]

    for (let i = copia.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]]
    }

    const selecionaDezPerguntas = copia.slice(0, 10)

    return selecionaDezPerguntas
}

function mostrarPergunta() {
    areaPergunta.style.display = 'flex'
    areaBoasVindas.style.display = 'none'
    numPergunta.innerText = `${indiceAtual + 1} de ${embaralhaPerguntas(perguntas).length}`
    numPontuacao.innerText = `${pontuacao} Pontos`
    textoPergunta.innerText = perguntasEmbaralhadas[indiceAtual].pergunta

    for (let i = 0; i < textoAlternativas.length; i++) {
        textoAlternativas[i].textContent = " " + perguntasEmbaralhadas[indiceAtual].alternativas[i]
    }

}

function alternativaMarcada() {

    const alternativaMarcada = document.querySelector('input[name="alternativa"]:checked')?.value

    return alternativas.indexOf(alternativaMarcada)

}

function verificaResposta(respostaMarcada, respostaCorreta) {

    const corResposta = document.querySelector(`input[value="${'ABCD'[respostaCorreta]}"]`)
    const alternativaCorreta = corResposta.closest('label')

    if (respostaMarcada === respostaCorreta) {
        pontuacao = pontuacao + 10
        alternativaCorreta.classList.add('resposta-correta')


    } else {
        const inputMarcado = document.querySelector('input[name="alternativa"]:checked')
        const alternativaMarcada = inputMarcado.closest('label')
        alternativaMarcada.classList.add('resposta-incorreta')
        alternativaCorreta.classList.add('resposta-correta')

        removeVida()

    }

    return alternativaCorreta, alternativaMarcada
}

function validaPergunta() {

    if (indiceAtual >= perguntasEmbaralhadas.length - 1) {
        finalizaQuiz = true
        mensagemFinal()
        return

    } else {
        indiceAtual++
    }
}

function desmarcarAlternativa() {
    const desmarcarAlternativa = document.querySelector('input[name="alternativa"]:checked')

    if (desmarcarAlternativa) {
        desmarcarAlternativa.checked = false
    }
}

function limpaCoresAlternativas() {
    const alternativas = document.querySelectorAll('label')
    
    alternativas.forEach(alternativa => {
        alternativa.classList.remove('resposta-correta', 'resposta-incorreta')
    })
}

function removeVida() {

    for (let i = vidaCheia.length - 1; i >= 0; i--) {

        if (vidaCheia[i].classList.contains('fa-solid')) {
            vidaCheia[i].classList.replace('fa-solid', 'fa-regular')
            break
        }
    }

    const vidaRestantes = Array.from(vidaCheia).filter(vida => vida.classList.contains('fa-solid'))

    if (vidaRestantes.length === 0) {
        finalizaQuiz = true
        mensagemFinalPerdeuVidas()
    }


}

function mensagemFinal() {
    areaPergunta.style.display = 'none'
    areaRetornoFinal.style.display = 'flex'
    areaMensagemFinal.innerHTML = `Parabéns por chegar até o final! 🎉<br><br>
Você concluiu o desafio e sua pontuação foi de <strong>${pontuacao}</strong>
! 🏆🔥<br><br>
Mandou bem demais! Que tal compartilhar com os amigos para ver se alguém consegue superar o seu resultado? 🚀`
}

function mensagemFinalPerdeuVidas() {
    areaPergunta.style.display = 'none'
    areaRetornoFinal.style.display = 'flex'
    areaMensagemFinal.innerHTML = `Fim de jogo! Suas vidas acabaram... 💔 <br><br>Infelizmente você não conseguiu chegar ao final do desafio e sua pontuação travou em <strong>${pontuacao}</strong>!😢📉 <br><br>Mas não desanime, o aprendizado continua! Que tal tentar de novo para superar seu próprio limite ou compartilhar com os amigos para ver quem vai mais longe? 🚀`
}

function reiniciarQuiz() {
    // 1. Reseta as variáveis de controle para o estado inicial
    indiceAtual = 0;
    pontuacao = 0; // Altere para o nome exato da sua variável de pontuação
    finalizaQuiz = false;
    // 2. Limpa a tela de resultado e exibe o formulário de perguntas novamente
    for (let i = vidaCheia.length - 1; i >= 0; i--) {
        vidaCheia[i].classList.replace('fa-regular', 'fa-solid')
    }

    areaPergunta.style.display = 'flex'; // Garante que o formulário apareça caso tenha sido ocultado
    areaRetornoFinal.style.display = 'none'
    // 3. Carrega a primeira pergunta na tela
    // (Substitua pelo nome da função que você usa para renderizar as perguntas na tela)
    desmarcarAlternativa()
    limpaCoresAlternativas()

    
    bttConfirma.hidden = false
    bttProxima.hidden = true

    perguntasEmbaralhadas = embaralhaPerguntas(perguntas)
    mostrarPergunta()

}
