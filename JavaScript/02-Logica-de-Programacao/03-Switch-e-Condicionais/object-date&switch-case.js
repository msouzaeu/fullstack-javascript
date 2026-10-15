// OBJECT DATE

const data = new Date() // a, m ,d, h, M, s, ms
console.log('Dia:', data.getDate());
console.log('Mês:', data.getMonth()); // Começa do 0
console.log('Ano:', data.getFullYear());
console.log('Hora:', data.getHours());
console.log('Min:', data.getMinutes());
console.log('Segundos:', data.getSeconds());
console.log('ms:', data.getMilliseconds());
console.log('Dia semana:', data.getDay()); // 0 - domingo, 6 - sábado


console.log(data.toString());

// SWITCH CASE

const dataHoje = new Date()
let diaSemana = dataHoje.getDay()
let diaNome;

switch(diaSemana){
    case 0: diaNome ='Domingo'; break
    case 1: diaNome ='Segunda'; break
    case 2: diaNome ='Terça'; break
    case 3: diaNome ='Quarta'; break
    case 4: diaNome ='Quinta'; break
    case 5: diaNome ='Sexta'; break
    case 6: diaNome ='Sábado'; break
    default: diaNome = '' // funciona como se fosse um else

}

console.log(diaNome);
