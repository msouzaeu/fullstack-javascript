
const alunos = ['Mateus', 'João', 'Maria'] // cria um array

console.log(alunos[1][3] ) // consultar indice dentro de indice

alunos[alunos.length]='Fernando' //adicionar um item no final da array
alunos.push('Léo') //adicionar um item no final da array
alunos.unshift('Paulo') // Adicionar um item no inicio da array

alunos.pop() // remove o último item do array
alunos.shift() // remove o primeiro item do array
delete alunos[1] // remove o conteudo do indice e deixa o indice vazio

console.log(alunos instanceof Array); //  Para saber se é um array


console.log(alunos )
console.log(alunos.length )


