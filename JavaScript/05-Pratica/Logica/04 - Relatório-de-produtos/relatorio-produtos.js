// 04 - Relatório de produtos

// Conceitos: arrays, objetos, for...of, destructuring, if, ternário e acumuladores.

// Gere um relatório no console que: 

// - Percorra todos os produtos com for...of.
// - Ignore os produtos sem estoque usando continue.
// - Classifique os produtos como Caro se o preço for maior ou igual a R$ 20, ou Barato caso contrário, usando ternário.
// - Calcule o valor total do estoque disponível, multiplicando preço por quantidade em estoque.
// - Ao final, mostre o valor total do estoque.
// Objetivo: trabalhar com dados reais e combinar ferramentas que você já conhece.

const produtos = [
    { nome: 'Arroz', preco: 25, estoque: 10 },
    { nome: 'Feijão', preco: 9, estoque: 0 },
    { nome: 'Café', preco: 18, estoque: 5 },
    { nome: 'Azeite', preco: 35, estoque: 2 },
    { nome: 'Leite', preco: 6, estoque: 0 }
]
  let valorTotalEstoque = 0

for(const produto of produtos){
    const {nome, preco, estoque} = produto
   
    if( estoque=== 0){
        continue;
    }
      
    const caroBarato = preco >= 20 ? 'Caro' : 'Barato'
    const valorEstoque = preco * estoque
  
    valorTotalEstoque += valorEstoque

     console.log(`${nome} - R$: ${preco.toFixed(2)} Qntd: ${estoque} - ${caroBarato} - Valor do estoque: ${valorEstoque.toFixed(2)}`);
} console.log('Valor total do estoque: R$',valorTotalEstoque.toFixed(2));
