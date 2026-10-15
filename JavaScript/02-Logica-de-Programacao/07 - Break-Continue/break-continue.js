const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(let numero of numeros){

    if(numero === 3){
        continue // pula para próxima interação
    }

    if(numero ===7){       
        break // Interrompe e encerra o loop imediatamente

    }
    console.log(numero);
    
}