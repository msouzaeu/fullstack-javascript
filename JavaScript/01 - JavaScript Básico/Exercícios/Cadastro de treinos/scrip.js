function cadastroGeral(){
    const form = document.querySelector('#form')

    const treinos =[]

    form.addEventListener('submit', addExercicio)
    
    function addExercicio (evento){
        evento.preventDefault()

        const exercicio = form.querySelector('.exercicio')
        const repeticao = form.querySelector('.repeticao')


        treinos.push({
            exercicio: exercicio.value,
            repeticao: repeticao.value
        })

        console.log(treinos);
        
    }

}
cadastroGeral()