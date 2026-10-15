// // 🟢 Exercício 1 | Desestruturação


// const aluno = {
//     nome: 'Mateus',
//     idade: 28,
//     curso: 'Full Stack'
// }

// const {nome, idade, curso} = aluno

// console.log(curso, idade, nome);

// // 🟢 Exercício 2 | Desestruturação de array

//  const cores = ['laranja','amarelo','branco']

//  const [primeiraCor, segundaCor, terceiraCor] = cores

//  console.log(primeiraCor, resto);


//  //🟡 Exercício 3 | For clássico

//  const nomes = ['João', 'Maria', 'Fernanda', 'Vitória', 'Mateus']

//  for (let i = 0; i < nomes.length; i++){
//     console.log(nomes[i]);

//  }

//  // 🟡 Exercício 4 | For + objetos

//  const produtos = [
//     {nome: 'arroz', preco:25},
//     {nome: 'Feijão', preco: 9},
//     {nome: 'Café', preco: 18},
//     {nome: 'Leite', preco: 6}
//  ]


//  for (let i = 0; i < produtos.length; i++){
//     const {nome, preco} = produtos[i]
//     console.log(`${nome} - R$ ${preco}`);

//  }

//  // 🟠 Exercício 5 | Primeiro contato com DOM

// const nomes = ['Ana','Carlos', 'João','Maria'] 

// const container = document.querySelector('.container')

// function pegaNome (){
//     for (let i = 0; i < nomes.length; i++){
//         const criaP = document.createElement('p')
//         criaP.innerText = nomes[i]
//         container.appendChild(criaP)
//     }

// }pegaNome ()


// // 🔴 Exercício 6

// const mensagens = [
//     { tag: 'h2', texto: 'Bem-vindo!' },
//     { tag: 'p', texto: 'Você está estudando JavaScript!' },
//     { tag: 'p', texto: 'Continue praticando.' },
//     { tag: 'p', texto: 'Não desista.' },
//     { tag: 'footer', texto: 'Boa sorte!' },
// ]

// const container = document.querySelector('.container')

// function inserirNaPagina() {

//     for (let i = 0; i < mensagens.length; i++) {
//         const {tag, texto} = mensagens[i]
//         const criaTag = document.createElement(tag)
//         criaTag.innerText= texto
//         container.appendChild(criaTag)

//     }
// }inserirNaPagina()


// 🔴 Exercício 7

// const alunos = [
//     { nome: 'Ana', idade: 22 },
//     { nome: 'Carlos', idade: 25 },
//     { nome: 'João', idade: 19 },
//     { nome: 'Maria', idade: 30 }
// ]

// const container = document.querySelector('.container')

// function insereNoSite(){
//     for (let i = 0; i<alunos.length; i++){
//         const {nome, idade} = alunos[i]
//         const criaP = document.createElement('p')
//         // const texto = document.createTextNode(`${nome} - ${idade} anos`) // usando o creatTextNode para criar um bloco de texto
//         // criaP.appendChild(texto) // inserindo o bloco de texto dentro do paragrafo
//         criaP.innerText = `${nome} - ${idade} anos`
//         container.appendChild(criaP)
//         }
// }insereNoSite()

// 🔴 Exercício 8 - APLICANDO A FUNÇÃO TERNÁRIA

// const alunos = [
//     { nome: 'Ana', idade: 22 },
//     { nome: 'Carlos', idade: 25 },
//     { nome: 'João', idade: 15 },
//     { nome: 'Maria', idade: 17 }
// ]

// const container = document.querySelector('.container')

// function insereNoSite(){
//     for (let i = 0; i<alunos.length; i++){
//         const {nome, idade} = alunos[i]
//         const criaP = document.createElement('p')
//         const maiorIdade = idade >= 18 ? 'Maior de idade' : 'Menor de idade'
//         criaP.innerText = `${nome} - ${idade} anos - ${maiorIdade}`
//         container.appendChild(criaP)
//         }
// }insereNoSite()

// SEM FUNÇÃO

// const produtos = [
//     { nome: 'Arroz', preco: 25 },
//     { nome: 'Feijão', preco: 9 },
//     { nome: 'Café', preco: 18 },
//     { nome: 'Azeite', preco: 35 }
// ]

// const container = document.querySelector('.container')

// for (let i = 0; i<produtos.length; i++){
//     const {nome, preco} = produtos[i]
//     const criaP = document.createElement('p')
//     const precoProduto = preco >= 20 ? 'Produto caro' : 'Produto barato'
//     criaP.innerText = `${nome} - R$ ${preco} - ${precoProduto}`
//     container.appendChild(criaP)
// }


// usando o IF CONTINUE dentro do FOR 

// const produtos = [
//     { nome: 'Arroz', preco: 25 },
//     { nome: 'Feijão', preco: 9 },
//     { nome: 'Café', preco: 18 },
//     { nome: 'Azeite', preco: 35 }
// ]

// const container = document.querySelector('.container')

// for (let i = 0; i < produtos.length; i++) {
//     const { nome, preco } = produtos[i]
//     if (preco < 20) { // esse produto custa menos de 20? se sim, pare esta volta do for e vá direto para o próximo produto."
//         continue
//    }
//         const criaP = document.createElement('p')
//         criaP.innerText = `${nome} - R$ ${preco} - Mais caro`
//         container.appendChild(criaP)
// }

// Exercício 9 - NOTA ESCOLAR 🧠

// const alunos = [
//     { nome: 'Ana', nota: 8 },
//     { nome: 'Carlos', nota: 5 },
//     { nome: 'João', nota: 3 },
//     { nome: 'Maria', nota: 9 },
//     { nome: 'Pedro', nota: 6 }
// ]

// const container = document.querySelector ('.container')

// for ( let i = 0; i < alunos.length; i++){
//     const {nome, nota} = alunos[i]
//     if (nota < 7){
//         continue // usado para filtrar
//     }
//     const resultado = nota >= 7 ? 'Aprovado' : 'Reprovado' // uasdo para classificar
//     const criaP = document.createElement('p')
//     criaP.innerText =`${nome} - ${nota} - ${resultado}`
//     container.appendChild(criaP)
// }


//// Exercício 10


// const numeros = [10, 5, 8, 3, 20, 7]

// for (let i = 0; i < numeros.length; i++){
//     if (numeros[i] < 8){
//         continue}

// console.log(numeros[i]);
// }

// Exercício 11

// const numeros = [3, 10, 15, 4, 20, 7, 30]

// for (let i = 0; i < numeros.length; i++){
//     if(numeros[i] % 2 != 0 ){
//         continue
//     }   
//     const resultado = numeros[i] >= 20 ?'Par grande' : 'Par pequeno'
//     console.log(numeros[i], '' + resultado);

// }

// Desafio 16 - Lista de produtos

// const produtos = [
//     { nome: 'Arroz', preco: 25, estoque: 10 },
//     { nome: 'Feijão', preco: 9, estoque: 0 },
//     { nome: 'Café', preco: 18, estoque: 5 },
//     { nome: 'Azeite', preco: 35, estoque: 2 },
//     { nome: 'Leite', preco: 6, estoque: 0 }
// ]

const container = document.querySelector('.container')

// for (let i = 0; i < produtos.length; i++) {
//     const {nome, preco, estoque} = produtos[i]
//     if (estoque === 0){
//         continue
//     }
//     const infoValor = preco >= 20 ? 'Produto caro' : 'Produto barato'

//     const criaP = document.createElement('p')
//     criaP.innerText = `${nome} - R$ ${preco} - ${infoValor}`
//     container.appendChild(criaP)
// }