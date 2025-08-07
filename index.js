const prompt = require ('prompt-sync')()

const listarContatos = require ('./listar')
const adicionarContatos = require ('./adicionar')
const atualizarContatos = require ('./atualizar')
const removerContatos = require ('./remover')

function menu(contatos) {
    console.log ('\n----- SISTEMA DE GERENCIAMENTO DE CONTATOS -----')
    console.log ('\n1. Adicionar contato')
    console.log ('2. Listar contatos')
    console.log ('3. Atualizar contato')
    console.log ('4. Remover contato')
    console.log ('5. Sair\n')

    let opcao = prompt ('Digite a opção que deseja executar: ')
    switch (opcao) {
        case '1':
            adicionarContatos(contatos, prompt, menu)
            break
        case '2':
            listarContatos(contatos, prompt, menu)
            break
        case '3':
            atualizarContatos(contatos, prompt, menu)
            break
        case '4':
            removerContatos(contatos, prompt, menu)
            break
        case '5':
            console.log('Obrigado por usar nosso sistema de contatos. Até mais!')
            break
        default:
            console.log('Esta opção é inválida, tente novamente!\n')
            menu(contatos)
    }
}

let contatos = [
    { id: 1, nome: 'Alice', telefone: '1234-5678', email:
    'alice@example.com' },
    { id: 2, nome: 'Bob', telefone: '8765-4321', email:
    'bob@example.com' },
    { id: 3, nome: 'Carol', telefone: '5678-1234', email:
    'carol@example.com' }
    ];

menu(contatos)

module.exports = menu
