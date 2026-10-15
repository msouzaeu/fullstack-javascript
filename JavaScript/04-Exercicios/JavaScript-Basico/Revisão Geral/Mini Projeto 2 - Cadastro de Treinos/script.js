function cadastroTreinos(){
    const form = document.getElementById('form')
    const lista = []

    function addTreino(evento){
        evento.preventDefault()

        const exercicio=form.querySelector('#exercicio')
        const carga=form.querySelector('#carga')
        const repeticao=form.querySelector('#repeticao')
        const totalTreinos= document.querySelector('.totalTreinos')
        const listaTreinos=document.querySelector('.listaTreinos')

        lista.push({
            exercicio: exercicio.value,
            carga: Number(carga.value),
            repeticao: Number(repeticao.value)
        })
        

    totalTreinos.innerHTML = `Treinos cadastrados: ${lista.length}` 
     listaTreinos.innerHTML += `
    <div class='caixaDivJs'>
        <h3>${lista.length}. ${exercicio.value}</h3>
        <p>Carga: ${carga.value} kg</p>
        <p>Repetições: ${repeticao.value}</p>
    </div>
`;       
        console.log(lista);
        
    }

    form.addEventListener('submit', addTreino)
}cadastroTreinos()