
import { listaDesafios } from "./lista-desafios.js" // importar a lista de outro arquivo

// pega os elementos do HTML usando o DOM
const btt = document.getElementById('btt-desafio')
const exibeDesafio = document.getElementById('exibe-desafio')
const infoDesafio = document.getElementById('info-desafio')
const todasDificuldades = document.getElementById('todas-dificuldades')
const dificuldadeFacil = document.getElementById('facil')
const dificuldadeIntermediario = document.getElementById('intermediario')
const dificuldadeDificil = document.getElementById('dificil')
const bttSelecionado = document.querySelectorAll('.btt-dificuldade') //pega a coleção de elemntos

let dificuldadeSelecionado = 'Todas' // cria e inicia a variavel da dificulade selecionada


btt.addEventListener('click', executaSorteio) // escutar a ação do click no botão e chama a função executaSorteio

todasDificuldades.addEventListener('click', () => { // escutar a ação do click no botão e inicia a arrow fucntion
    dificuldadeSelecionado = 'Todas' // altera o valor para todas
    bttSelecionado.forEach((botao) => { // percorre a lista e realiza as ações
        botao.classList.remove('selecionado') // remove a class "selecionado" caso exista em algum botão
    })

    todasDificuldades.classList.add('selecionado') // adciona a class "selecionado" no botão especifico
})

dificuldadeFacil.addEventListener('click', () => {
    dificuldadeSelecionado = 'Fácil'
    bttSelecionado.forEach((botao) => {
        botao.classList.remove('selecionado')
    })
    dificuldadeFacil.classList.add('selecionado')
})


dificuldadeIntermediario.addEventListener('click', () => {
    dificuldadeSelecionado = 'Intermediário'
    bttSelecionado.forEach((botao) => {
        botao.classList.remove('selecionado')
    })
    dificuldadeIntermediario.classList.add('selecionado')


})
dificuldadeDificil.addEventListener('click', () => {
    dificuldadeSelecionado = 'Difícil'
    bttSelecionado.forEach((botao) => {
        botao.classList.remove('selecionado')
    })
    dificuldadeDificil.classList.add('selecionado')

})


function executaSorteio() { // função que gerencia todas as outras
    const { desafioSorteado, listaEscolhida } = sorteiaDesafio() // um desestruruação da function "sorteiaDesafio()" que extrai propriedades de um objeto
    mostraNaTela(desafioSorteado, listaEscolhida) // passa os dados para a função "mostrarNaTela"
}


function sorteiaDesafio() { // responsavel por realizar o sorteio
    const listaFiltrada = listaDesafios.filter(desafio => desafio.dificuldade === dificuldadeSelecionado) // cria uma nova listar com os dados filtrado com base na dificuldadeSelecionado pelo usuário

    let listaEscolhida; // criar um let para receber o tipo de listaDesafios ou listaFiltrada

    if (dificuldadeSelecionado === 'Todas') { // verifica se a 'dificuldadeSelecionado' é igual a 'todas" se sim recebe listaDesafios se não, recebe listaFiltrada
        listaEscolhida = listaDesafios

    } else {
        listaEscolhida = listaFiltrada
    }

    const qntDesafios = listaEscolhida.length // pega o tamanho total da lista
    const desafioSorteado = Math.floor(Math.random() * qntDesafios) // gera um número random que será usado para sorteio
    return { desafioSorteado, listaEscolhida } // retorna desafioSorteado e listaEscolhida como um objeto


}

function mostraNaTela(desafioSorteado, listaEscolhida) { // mostrar o desafio na tela
    const { titulo, descricao, categoria, dificuldade } = listaEscolhida[desafioSorteado] // criar uma desestruturação com base na listaEscolhida passando o desafioSorteado como indice do array

    // escreve na tela 
    exibeDesafio.innerHTML = `<h3>Titulo: ${titulo}</h3> 
    <p>Descrição: ${descricao}</p>
    `
    infoDesafio.innerHTML = `Categoria: ${categoria}
    <p>Dificuldade: ${dificuldade}</p>`
}