function dobro(a) {
    return a * 2
}

const resultadoDobro = dobro(8)
console.log(resultadoDobro);

//

function calcularPreco(valor, qntd) {
    return valor * qntd
}

const resultadoPreco = calcularPreco(25.50, 3)
console.log(`Total da compra: R$ ${resultadoPreco}`);

// Arrow Function

const dobroArrow = (num) => {
    return num ** 2
} 

const resultadoArrow = dobroArrow(7)
console.log(resultadoArrow);

// Function + math

const sorteio = (min, max) => {
    return Math.floor(Math.random()*(max-min+1)) + min
}

const resultadoSorteio = sorteio(1, 10)
console.log(resultadoSorteio);

// Function + array

const tecnologias = ["HTML", "CSS", "JavaScript", "Git"];

const pegarUltimo= (tecnologias) =>{
    return tecnologias[tecnologias.length -1]
}

console.log(lista(tecnologias));
