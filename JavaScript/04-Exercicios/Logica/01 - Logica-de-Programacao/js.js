// 01 - Escreva uma função que receba 2 número e retorne o maio deles

const maiorNumero = (num1, num2) => (Math.max(num1,num2))    
console.log(maiorNumero(50, 40));



// 02 - Escreva uma função chamda ePaisagem que recebe dois argumentos, larguro e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem

const ePaisagem = (altura, largura) => largura > altura
 console.log(ePaisagem(1900, 2000));

 // 03 - Escreva uma função que recebe um número e retorne o seguinte:
 // Número é divisivel por 3 = Fizz
 // Número é divisivel por 5 = Buzz
 // Número é divisivel por 3 e 5 = FizzBuzz
 // Número NÃO é divisivel por 3 e 5 = retorna o próprio número
 // Checar se o número é realemten um número
 // use a função com número de 0 a 100

 function fizzBuzz (num){
    if (typeof num !== 'number') return num
    if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
    if(num % 3 === 0) return 'Fizz'
    if(num % 5 === 0) return 'Buzz'  
    return num
 
 }
for( let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
    
}