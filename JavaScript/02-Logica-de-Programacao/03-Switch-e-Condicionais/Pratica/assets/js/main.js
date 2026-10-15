const caixaTimer = document.querySelector('.container')

const data = new Date()
const diaAtual = data.getDay()
const mesAtual = data.getMonth()

function nomeDia(diaAtual) {
    let nome;

    switch (diaAtual) {
        case 0: nome = 'Domingo'; break
        case 1: nome = 'Segunda-feira'; break
        case 2: nome = 'Terça-feira'; break
        case 3: nome = 'Quarta-feira'; break
        case 4: nome = 'Quinta-feira'; break
        case 5: nome = 'Sexta-feira'; break
        case 6: nome = 'Sábado-feira'; break
        default: nome = '' // 
    }
    return nome

}
function nomeMes(mesAtual) {
    let nome;

    switch (mesAtual) {
        case 0: nome = 'Janeiro'; break
        case 1: nome = 'Fevereiro'; break
        case 2: nome = 'Março'; break
        case 3: nome = 'Abril'; break
        case 4: nome = 'Maio'; break
        case 5: nome = 'Junho'; break
        case 6: nome = 'Julho'; break
        case 7: nome = 'Agosto'; break
        case 8: nome = 'Setembro'; break
        case 9: nome = 'Outubro'; break
        case 10: nome = 'Novembro'; break
        case 11: nome = 'Dezembro'; break
        default: nome = '' // 
    }
    return nome
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

caixaTimer.innerText = `${nomeDia(diaAtual)}, ${data.getDate()} de ${nomeMes(mesAtual)} de ${data.getFullYear()} ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`




// Jeito otimizado de fazer

const caixaTimer = document.querySelector('.container')
const data = new Date()
const timeFull = {
    dateStyle: 'full',
    timeStyle: 'short'
}

caixaTimer.innerText = data.toLocaleString('pt-br', timeFull)
