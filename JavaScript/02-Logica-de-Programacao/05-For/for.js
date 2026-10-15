// // FOR CLÁSSICO -> Geralmente com iteráveis (array ou strings)

const frutas = ['Maça', 'Pera', 'Uva']

// for (variavel de controle; condição; incremento/decremento){}
for (let i = 0; i < frutas.length; i++) {
   console.log(frutas[i]);

}

// FOR IN -> lê os índices ou chaves do objeto (string, arrays ou objetos)

const cor = ['Verde', 'Preto', 'Azul']

for (let i in cor){
   console.log(cor[i]);
   
}

const pessoa = {
   nome: 'Mateus',
   idade: '29',
   signo: 'Sagitário'
}

for (let i in pessoa){
   console.log(i, pessoa[i]);
   
}

// FOR OFF ->  retornar somente o valor (iteráveis, arrays ou strings)

const nome ='Mateus Souza'

for(let valor of nome){
   console.log(valor);
   
}

