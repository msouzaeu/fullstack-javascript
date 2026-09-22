
const form = document.getElementById('form')
const mostraResultado = document.querySelector('.resultado')

form.addEventListener('submit', function (evento) {
    evento.preventDefault()

    const peso = form.querySelector('#peso')
    const altura = form.querySelector('#altura')


    const pesoValor = Number(peso.value)
    const alturaValor = Number(altura.value)

    const imc = calculaIMC(pesoValor, alturaValor)
    const resultImcPeso = resultImc(imc)
    
    mostraResultado.innerHTML = `<p>${resultImcPeso}</p>`


})



function calculaIMC(pesoValor, alturaValor) {
    const calculaIMC = pesoValor / alturaValor **2
    return calculaIMC.toFixed(2)


}

function resultImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]
}