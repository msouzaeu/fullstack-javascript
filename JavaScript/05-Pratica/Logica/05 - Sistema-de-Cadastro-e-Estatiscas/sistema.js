// 05 - Sistema de cadastro e estatísticas

// Conceitos: funções, arrays, objetos, do...while, switch, for...of, destructuring, if e operadores.

// Crie um programa de cadastro de alunos usando apenas o console e prompt().
// O menu deve oferecer:
// 1 - Cadastrar aluno
// 2 - Listar alunos
// 3 - Mostrar estatísticas
// 0 - Sair


// Regras:
// - O menu deve continuar aparecendo até o usuário escolher 0.
// - Cada aluno deve ter nome, idade e nota.
// - Os alunos devem ser armazenados em um array de objetos.
// - A opção de listagem deve mostrar todos os alunos.
// - As estatísticas devem mostrar a quantidade de alunos, a média das notas e quantos foram aprovados, considerando nota maior ou igual a 7.
// - Se o usuário escolher uma opção inexistente, mostre uma mensagem de erro.
// - Organize as operações em funções.
// Objetivo: montar um pequeno sistema usando a lógica que você já aprendeu, sem precisar de interface gráfica.

let opcaoMenu;
let opcaoMenuSelecionado;
const listaAlunos = []

do {
    opcaoMenu = prompt(`
    Menu Alunos
    
    1 - Cadastrar aluno
    2 - Listar alunos
    3 - Mostrar estatísticas
    0 - Sair
    `)

    opcaoMenuSelecionado = Number(opcaoMenu)
    if (isNaN(opcaoMenuSelecionado) || opcaoMenuSelecionado < 0 || opcaoMenuSelecionado > 3 || opcaoMenu === '') {
        alert('Favor informer um opção válida')
        opcaoMenuSelecionado = -1


    } else {

        switch (opcaoMenuSelecionado) {
            case 1: cadastraAluno(); break
            case 2: listarAlunos(); break
            case 3: estatisticas(); break
        }
    }

} while (opcaoMenuSelecionado !== 0)


function cadastraAluno() {

    const nome = prompt('Informe o nome do aluno:')
    const idade = Number(prompt('Informe a idade do aluno:'))
    const nota = Number(prompt('Informe a nota do aluno:'))

    listaAlunos.push({
        nome: nome,
        idade: idade,
        nota: nota
    })
}

function listarAlunos() {
    console.clear()
    for (let aluno of listaAlunos) {
        const { nome, idade, nota } = aluno
        console.log(nome, idade, nota);
    }

}

function estatisticas() {

    let somaNota = 0;
    let contAluno = 0
    let alunoAprovado = 0


    for (const aluno of listaAlunos) {
        const { nota } = aluno
        contAluno++
        somaNota += nota


        if (nota >= 7) {
            alunoAprovado++
        }
    }

    console.clear()
    if (contAluno === 0) {
        console.log('Não existe alunos cadastrados');

    } else {
        somaNota /= contAluno
        console.log(`Alunos cadastrados: ${contAluno} média de nota: ${somaNota.toFixed(1)} Alunos aprovados: ${alunoAprovado}`);
    }


}
