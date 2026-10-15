// .classList.add('') = adiciona um class no elemento

const form = document.querySelector('#form')

form.addEventListener('submit', function (e) { //uma forma diferente de usar a funcition
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) {
        mostrarResultado('Peso inválido', false)
        return
    }

    if (!altura) {
        mostrarResultado('Altura inválida', false)
        return
    }

    const imc = calculaImc(peso, altura)
    const resultNivelImc = nivelImc(imc)

    const msg = `Seu IMC é: ${imc} (${resultNivelImc})`

    mostrarResultado(msg, true)

})

function nivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]
}


function calculaImc(peso, altura) { // função que calcula imc
    const imc = peso / altura ** 2
    return imc.toFixed(2)

}


function criaParagrafo() { // function para criar paragrafo
    const p = document.createElement('p') // .createElement() = cria um elemnto
    return p
}

function mostrarResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = ''
    const p = criaParagrafo() // criar uma const com o retorno da function criaParagrafo

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('erro')

    }
    resultado.appendChild(p) // .appendChild() = insere um elemento filho 
    p.innerHTML = msg // escreve na tela a mensagem que foi passada pelo if

}