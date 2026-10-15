const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const elementoNota = form.querySelector('#nota')
    const nota = Number(elementoNota.value)

    const resultadoNota = avaliaNota(nota)
    mostraResultado(resultadoNota)


})

function avaliaNota(nota) {

    const resultado = ['Reprovado', 'Recuperação', 'Aprovado']

    if (nota >= 7) return resultado[2]
    if (nota >= 5) return resultado[1]
    if (nota < 5) return resultado[0]

}

function criaP() {
    const p = document.createElement("p")
    return p
}

function mostraResultado(msg) {
    const resultado = document.querySelector('#mostra-resultado')
    resultado.innerHTML = ''
    const p = criaP()
    resultado.appendChild(p)
    if (msg === 'Reprovado') {
        p.classList.add('resultado-reprovado')
    }
    if (msg === 'Recuperação') {
        p.classList.add('resultado-recuperacao')
    }
    if (msg === 'Aprovado') {
        p.classList.add('resultado-aprovado')
    }
    p.innerText = msg


}