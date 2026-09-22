function cadastrarDev(){

    const form = document.getElementById('form')
    const lista =[]
    
    function adicionarDev (evento){
        evento.preventDefault()
    
        const nome = form.querySelector('.nome')
        const idade = form.querySelector('.idade')
        const linguagem= form.querySelector('.linguagem')
        const text= document.querySelector('.text')

        lista.push({
            nome: nome.value,
            idade: Number(idade.value),
            linguagem: linguagem.value
        })
                
        text.innerHTML += (`Olá, ${nome.value}! Você tem ${idade.value} anos e está estudando ${linguagem.value}. <br>`)
        console.log(lista);
    
    }

    
    form.addEventListener('submit', adicionarDev)


}
cadastrarDev()