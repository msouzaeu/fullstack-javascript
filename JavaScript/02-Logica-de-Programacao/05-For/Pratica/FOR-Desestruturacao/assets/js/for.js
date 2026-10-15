// const pessoa = {
//     nome: 'Mateus',
//     idade: 28,
//     profissao: 'Desenvolvedor'
// }

// for (const i in pessoa){
//     console.log(i);
    
// }

// const nomes = ['Ana', 'Carlos', 'Maria', 'João']

// for (const nome of nomes){
//     console.log(nome);
    
// }

// const produtos = [
//     { nome: 'Arroz', preco: 25 },
//     { nome: 'Feijão', preco: 9 },
//     { nome: 'Café', preco: 18 }
// ]

// for (const produto of produtos){
//     const {nome, preco} = produto
//         console.log(nome, preco);
    
// }

// const alunos = document.querySelectorAll('.aluno')

// for (const aluno of alunos){
//     aluno.innerText = `Aluno: ${aluno.innerText}`
//     }

// Exercício - for...of + objetos + destructuring
// const alunos = [
//     { nome: 'Ana', idade: 22, curso: 'JavaScript' },
//     { nome: 'Carlos', idade: 25, curso: 'HTML e CSS' },
//     { nome: 'Maria', idade: 20, curso: 'JavaScript' },
//     { nome: 'João', idade: 30, curso: 'Node.js' }
// ]

// const container= document.querySelector('.container')

// for (const aluno of alunos){
//     const {nome, idade, curso} = aluno
//     if( idade < 18){
//         continue
//     }
//     const criaP = document.createElement('p')
//     criaP.innerText = `${nome} - ${idade} anos - ${curso}`
//     container.appendChild(criaP)
// }

// Exercício completo - usando for...of + destructuring + ternário + DOM. 🎯

const alunos = [
    { nome: 'Ana', idade: 22, curso: 'JavaScript' },
    { nome: 'Carlos', idade: 17, curso: 'HTML e CSS' },
    { nome: 'Maria', idade: 20, curso: 'JavaScript' },
    { nome: 'João', idade: 16, curso: 'Node.js' }
]

const container = document.querySelector('.container')
