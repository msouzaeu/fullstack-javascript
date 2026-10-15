const form = document.querySelector('#form')
const caixa = document.querySelector('.caixa')
const alunos = []

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const nome = form.querySelector('#nome').value
    const idade = Number(form.querySelector('#idade').value)
    const curso = form.querySelector('#curso').value


    cadastraAluno(nome, idade, curso)
    renderizaAlunos()

}
)

function cadastraAluno(nome, idade, curso) {

    const aluno = { 
        nome: nome,
        idade: idade,
        curso: curso
    }

    alunos.push(aluno)
    console.log(alunos);
    form.reset()

}

function renderizaAlunos() {
    caixa.innerText = ''

    for (const alunoIdade of alunos) {
        const { nome, idade, curso } = alunoIdade

        const maiorIdade = idade >= 18
            ? 'Maior Idade'
            : 'Menor idade'

        const criaP = document.createElement('p')
        criaP.innerText = `${nome} - ${idade} anos - ${curso} = ${maiorIdade} `

        caixa.appendChild(criaP)
    }
}