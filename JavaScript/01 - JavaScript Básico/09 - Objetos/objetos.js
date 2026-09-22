//  Object básico

//  - {} // os atributos ficam dentro
//  - variavel.atributos // consultar os atributos dentro do objeto
//  - usar object em function
//  - metodo dentro do object // não precisa do nome function
//  - usando this no metodo

const projeto = {
    nome: 'Gerador de Desafio Dev',
    tecnologia:'JavaScript',
    versao: 1,
    concluido: false

}

projeto.versao =2
projeto.concluido=true

console.log(projeto.nome, projeto.versao, projeto.concluido);


//

const produto = {
    nome: "Teclado",
    preco: 150,
    quantidade: 2
};

function calcularTotal(dados) {
    const total = dados.preco * dados.quantidade
    return total
}

const final = calcularTotal(produto)

console.log(`Produto: ${produto.nome} 
    Total: R$ ${final}`);


//

const aluno= {
    nome:'Mateus',
    nota1: 8,
    nota2: 9,

    calcularMedia (){
        return (this.nota1 + this.nota2) / 2
    }
}

console.log(`Aluno: ${aluno.nome} Média: ${aluno.calcularMedia()}`);


//

const jogador = {
    nome: "Mateus",
    pontos: 80,
    bonus: 20,

    calcularTotal() {
        return this.pontos + this.bonus
    }
};

const jogadorCopia ={...jogador}
jogadorCopia.nome = 'João'
jogadorCopia.pontos= 100

console.log(`Original: ${jogador.nome} - ${jogador.calcularTotal()} pontos Cópia: ${jogadorCopia.nome} - ${jogadorCopia.calcularTotal()} pontos`);
