// 🟢 Exercício 1 | O acesso permitido

// const idade= Number(prompt('Informe sua idade'))
// const autorizacao = prompt('Possui autorização?')

// if (idade >= 18 && autorizacao.toLowerCase() === 'sim'){
//     console.log('Acesso liberado');
    
// }else{
//     console.log('Acesso bloqueado');
    
// }

// 🟡 Exercício 2 | Sistema de desconto

// const idade= Number(prompt('Informe sua idade'))
// const valor= Number(prompt('Informe o valor da compra'))
// const cartao = prompt('Possui cartão da loja?')

// if(valor >= 200 || cartao.toLowerCase() === 'sim' || idade >= 60){
//     console.log(`Compra: R$ ${valor.toFixed(2)}
//     Cartão: ${cartao}
//     Idade: ${idade}
    
//     Resultado:
//     Desconto liberado`);
    
// }else{
//      console.log(`Compra: R$ ${valor.toFixed(2)}
//     Cartão: ${cartao}
//     Idade: ${idade}
    
//     Resultado:
//     Desconto não liberado`);
// }

//🟠 Exercício 3 | Validação de cadastro

// const nome = prompt('Informe seu nome:')
// const idade = prompt('Informe sua idade:')
// const senha = prompt('Informe sua senha:')

// if (nome !== '' && idade >= 18 && senha.length >= 8){
//      console.log(`Nome: ${nome}
//     Idade: ${idade}
//       Senha: ${senha}
    
//     Cadastro realizado com sucesso`);
// }else{
//          console.log(`Nome: ${nome}
//     Idade: ${idade}
//       Senha: ${senha}
    
//     Cadastro inválido`);
// }

//🔴 Exercício 4 | Login com proteção

// function login(){

// const user = 'asd'
// const senha = 123456

// const userInformado = prompt('Informe seu usuário:') 

// if (userInformado ===""){
//     alert('Usuário não informado, tente novamente')
//     return
// }

// const senhaInformada = Number(prompt('Informe sua senha:'))

//  if(userInformado === user && senhaInformada === senha){
//     console.log('Login realizado com sucesso!');
    
// }else {
//     console.log('Usuário ou senha incorretos.');
    
// }
// }login()

//🔴 Exercício 5 | Entrada no evento

const possuiIngresso = prompt('Possui ingresso?')
const possuiDocumento = prompt('Possui documento?')
const idade = Number(prompt('Informe sua idade:'))
const vip = prompt('É vip?')

if((idade >= 18 && possuiDocumento.toLowerCase() === 'sim'&& possuiIngresso.toLowerCase() ==='sim') || ((vip.toLowerCase() ==='sim' && possuiDocumento.toLowerCase()==='sim'))){
    console.log('acesso liberado');
    
}else{
    console.log('acesso bloqueado');
    
}




//const acesso = (possuiIngresso === 'sim' && possuiDocumento==='sim' && idade >= 18) || (vip ==='sim' && possuiDocumento==='sim') || console.log('permitido');
