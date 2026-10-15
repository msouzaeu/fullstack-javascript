const pessoa = {
    nome: 'Mateus',
    sobrenome: 'Souza',
    idade: 28,
    endereco: {
        rua: 'Rua dos laços',
        numero: 14

    }
}

// Atibuição via desestruturação
const { nome } = pessoa
console.log(nome);
