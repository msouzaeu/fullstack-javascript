
 // \\ => usado como caractere de escape
 // Indíce das strings (começa sempre no 0


 //              01234567
let umaString = 'O rato roeu a roupa do rei de roma'


//  usa o [] ou .charAt() para pegar um indíce em especifico

console.log(umaString[3]);
console.log(umaString.charAt(3));


// .indexOf() => usado para saber o indice iniciial de uma palavra/letra
// .lastIndexOf() => usado para saber o indice iniciial de uma palavra/letra, começando de trás pra frente

console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('t', 3));

console.log(umaString.lastIndexOf('texto', 3));


// .match() => Usado para encontrar o conteúdo

console.log(umaString.match(/t/g));

// .search() => usado para identificar a posição do index de uma string

console.log(umaString.search(/t/));

// .replace() => usado para substituir uma palavra por outra

console.log(umaString.replace(/t/g, 'z'));

// .length => Saber o tamanho da string

console.log(umaString.length);

// .slice(inicio, fim) => procurar uma string dentro de um espaço de index.

console.log(umaString.slice(2, 4));
console.log(umaString.slice(3));

// .split() => usado para dividir uma string em um array de substrings
console.log(umaString.split(' ', 4))
console.log(umaString.split('r'))

// .toUpperCase() => transgorma em maiúsculo
// .toLowerCase() => transforma em minúsculo

console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())
