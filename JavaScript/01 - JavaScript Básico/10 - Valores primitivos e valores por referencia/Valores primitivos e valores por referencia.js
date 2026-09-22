// Valores primitivos e valore por referencia

// primitivos (imutaveis) = String, number, boolean, undefined, null (BigInt, symbol) - são valores copiados

// referencias (mutavel) - Array, object e fuction - são valores passados por referencia

// ... - copia o valor



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
