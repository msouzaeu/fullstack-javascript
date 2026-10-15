const trilha = ["HTML", "CSS"]
trilha.push('JavaScript')
trilha.unshift('Git')
trilha.shift()
trilha.push('Arrays')

console.log(trilha);

const titulo = document.getElementById("titulo")
const primeiro = document.getElementById('primeiro')
const ultimo = document.getElementById('ultimo')
const quantidade = document.getElementById('quantidade')
const verificacao = document.getElementById('verificacao')

titulo.innerHTML += (' - Full Stack')
primeiro.innerHTML = (`Primeiro conteúdo: ${trilha[0]}`)
ultimo.innerHTML =(`Último conteúdo: ${trilha[trilha.length - 1]}`) // fiquei um pouco confuso da lógica que seria usada, pesquisei, quero que você me explique a lógica usada para que possa entender como nessa situações de um dentro de outro
quantidade.innerHTML =(`Quantidade de conteúdos: ${trilha.length}`)
verificacao.innerHTML =(`É um Array: ${trilha instanceof Array}`)
