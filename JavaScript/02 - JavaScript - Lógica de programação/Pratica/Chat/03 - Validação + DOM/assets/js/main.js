const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const elemtNome = form.querySelector('#nome')
    const elementIdade = form.querySelector('#idade')

    const nome = elemtNome.value
    const idade = Number(elementIdade.value)

    if (!nome) {
        mostraResultado('Favor inserir um nome válido', false)
        return
    }
    
    if (!idade) {
        mostraResultado('Favor inserir uma idade válida', false)
        return
    }

    if (idade < 18) {
        mostraResultado('Menor de idade', false)
        return
    }

    mostraResultado('Cadastro válido', true)
})

function criaParagrafo() {
    const p = document.createElement('p')
    return p
}

function mostraResultado(msg, isValid) {
    const resultado = document.querySelector('#mostra-resultado')
    resultado.innerHTML = ''
    const p = criaParagrafo()
    resultado.appendChild(p)

    if (isValid === true) {
        p.classList.add('resultado-aprovado')
    } else {
        p.classList.add('resultado-reprovado')

    }

    p.innerText = msg

}

