/**
 * && -> true && true -> false "o valor mesmo"
 * || -> true && false -> vai retornar "o valor verdadeiro"

FALSY
false
0
"" '' ``
null / undefined
NaN
*/

function falaOi(){
    return 'oi'
}

let vaiExecutar = 'Teste'

console.log(vaiExecutar && falaOi());

// usando o || OR

const corUsuario = null
const corPadrao= corUsuario || 'preto'

console.log(corPadrao);


const user= ''
const userInformado =  user !=="" || console.log('digite')
