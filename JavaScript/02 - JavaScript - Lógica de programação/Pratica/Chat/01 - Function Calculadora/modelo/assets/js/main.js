const form = document.querySelector('#form')
const resultado = document.querySelector('#mostra-resultado')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const elementoNum1 = form.querySelector('#num1')
    const elementoNum2 = form.querySelector('#num2')

    const valorNum1 = Number(elementoNum1.value)
    const valorNum2 = Number(elementoNum2.value)

    const result = calcula(valorNum1, valorNum2)

    const msg = `O valor da soma é: ${result}`
    mostraResultado(msg)

})

function calcula(valorNum1, valorNum2) {
    return valorNum1 + valorNum2
}

function criaParagrafo() {
    const p = document.createElement('p')
    return p
}

function mostraResultado(msg) {
    resultado.innerHTML=''
    const p = criaParagrafo()
    resultado.appendChild(p)
    p.classList.add('resultado-paragrafo')
    p.innerText = msg

}