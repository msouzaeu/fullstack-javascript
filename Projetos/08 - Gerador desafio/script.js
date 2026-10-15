const sorteioDesafio= {
    numDesafio: numeroAleatorio(1, 10),
    numPontuacao: numeroAleatorio(50, 100),
    numNivel: numeroAleatorio(1, 5),

    maiorValor(){
        return (Math.max(this.numPontuacao, this.numNivel))
    },

    obterBinario(){
        return this.numDesafio.toString(2)
    }
}

const sorteioCopia = {...sorteioDesafio}
sorteioCopia.numPontuacao = 100

console.log(`Orignal: ${sorteioDesafio.numPontuacao} Cópia: ${sorteioCopia.numPontuacao}`);

function numeroAleatorio (min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min
}

const desafio = document.getElementById('desafio')
const pontuacao = document.getElementById('pontuacao')
const nivel = document.getElementById('nivel')
const binario = document.getElementById('binario')
const maiorValor = document.getElementById('maiorValor')

desafio.innerHTML = sorteioDesafio.numDesafio
pontuacao.innerHTML = sorteioDesafio.numPontuacao
nivel.innerHTML = sorteioDesafio.numNivel
binario.innerHTML = sorteioDesafio.obterBinario()
maiorValor.innerHTML = sorteioDesafio.maiorValor()


// CAIXA ARRAY

const tecnologias =['HTML', 'CSS']
tecnologias.push('JavaScript')

function pegarUltimo (lista) {
    return lista[lista.length -1]
}


const tecnologiasTodas = document.getElementById('tecnologias')
const totalTecnologia = document.getElementById('total-tecnologia')
const primeiraTecnologia = document.getElementById('primeira-tecnologia')
const ultimaTecnologia = document.getElementById('ultima-tecnologia')
const validacaoArray = document.getElementById('validacao-array')

tecnologiasTodas.innerHTML = tecnologias
totalTecnologia.innerHTML = tecnologias.length
primeiraTecnologia.innerHTML = tecnologias[0]
ultimaTecnologia.innerHTML = pegarUltimo(tecnologias)
validacaoArray.innerHTML = tecnologias instanceof Array



