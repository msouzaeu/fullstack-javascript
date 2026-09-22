/**
 * coisas novas
 * 
 * usar const/let dentro de fuction para não deixar no escopo global
 * querySelector()
 */

function meuEscopo(){
    const form  = document.querySelector('#form') // qual a diferença entre o querySelector eo getElementeId
 
    //me explique sobre isso

    const pessoas = []


    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector ('.sobrenome')
        const peso = form.querySelector ('.peso')
        const altura = form.querySelector ('.altura')   

        pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
        
        
    })

         // usa value para pegar os valores
        console.log(nome.value, sobrenome.value, peso.value, altura.value);

        console.log(pessoas);

    }

         form.addEventListener('submit', recebeEventoForm)

}

meuEscopo()