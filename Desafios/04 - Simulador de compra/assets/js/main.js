const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const valorElement = form.querySelector('#valor')
    const pgtSelecionado = form.querySelector('input[name="pagamento"]:checked')
    const cupomElement = form.querySelector('#desconto')

    const valor = Number(valorElement.value)
    const cupom = cupomElement.value // Pega o value="..."

    if (!valor || valor < 0) {
        mostrarResultado('Informe um valor válido acima de 0', false)
        return
    }

    if (!pgtSelecionado) {
        mostrarResultado('Por favor, selecione uma forma de pagamento', false)
        return
    }

    
    const pgtEscolhido = pgtSelecionado.value
    const retornoDesconto = calculaDesconto(valor, pgtEscolhido, cupom)
    const valorFinal = valor - retornoDesconto
    const frete = freteGratis(valor)
    let freteExibi;


    if (frete === 0) {
        freteExibi = 'Grátis'

    } else {
        freteExibi = `R$ ${frete.toFixed(2)}`
    }

    const msg = `
Valor da compra: R$ ${valor.toFixed(2)}
Pagamento: ${pgtEscolhido}
Cupom: ${cupom}

Desconto: R$ ${retornoDesconto.toFixed(2)}
Frete: ${freteExibi}

Total: R$ ${(valorFinal + frete).toFixed(2)}`
    mostrarResultado(msg, true)


})

function calculaDesconto(valor, pgtEscolhido, cupom) {
    let desconto = 0;

    if (pgtEscolhido === 'pix') {
        desconto = valor * 0.1
    }
    if (pgtEscolhido === 'boleto') {
        desconto = valor * 0.05
    }
    if (cupom === 'sim') {
        desconto += valor * 0.05
    }

    return desconto
}

function freteGratis(valor) {
    if (valor >= 200) {
        return 0
    } else {
        return 15
    }
}

function criaP() {
    const p = document.createElement('p')
    return p
}

function mostrarResultado(msg, isValid) {
    const resultado = document.querySelector('#mostra-resultado')
    resultado.innerHTML = ''
    const p = criaP()
    resultado.appendChild(p)
    if (isValid === true) {
        p.classList.add('paragrafo-valido')
    } else {
        p.classList.add('paragrafo-invalido')

    }
    p.innerText = msg

}