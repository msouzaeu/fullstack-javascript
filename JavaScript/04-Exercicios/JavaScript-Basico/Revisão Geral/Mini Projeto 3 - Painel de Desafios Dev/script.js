function desafioDev() {
    const form = document.getElementById('form')
    const mostrarDesafios = document.getElementById('mostrarDesafios')
    const totalDesafios = document.querySelector('.totalDesafios')
    const lista = []

    function addDesafio(evento) {
        evento.preventDefault()

        const nomeDesafio = form.querySelector('#nomeDesafio')
        const tecnologia = form.querySelector('#tecnologia')
        const dificuldade = form.querySelector('#dificuldade')
        const pontuacao = form.querySelector('#pontuacao')
        let nivel = null

        if (dificuldade.value == 1 || dificuldade.value == 2) {
            nivel = 'Iniciante'
        } else if (dificuldade.value == 3) {
            nivel = 'Intermediário '
        } else {
            nivel = 'Avançado'
        }

        lista.push({
            nomeDesafio: nomeDesafio.value,
            tecnologia: tecnologia.value,
            dificuldade: Number(dificuldade.value),
            pontuacao: Number(pontuacao.value),
            nivel: nivel,
        })

        console.log(lista);

        totalDesafios.innerHTML = `Desafios cadastrados: ${lista.length}`
        mostrarDesafios.innerHTML += `
    <div>
        <h3> ${nomeDesafio.value}</h3>
        <p>Tecnologia: ${tecnologia.value}</p>
        <p>Dificuldade: ${dificuldade.value}</p>
        <p>Pontuação: ${pontuacao.value}</p>  
        <p>Nível: ${nivel}</p>  
    </div>
        `
    }

    form.addEventListener('submit', addDesafio)
}
desafioDev()