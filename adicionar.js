function adicionarContatos (contatos, prompt, menu){
    let nome
        do {
            nome = prompt('Nome: ')
            if (nome.trim() === '') {
                console.log('Numero invalido, tente novamente.\n')
            }
        } while (nome.trim() === '')
    let telefone
        do {
            telefone = prompt('Telefone: ');
            if (isNaN(telefone) || telefone.trim() === '') {
                console.log('Numero invalido, tente novamente.\n')
            }
        } while (isNaN(telefone) || telefone.trim() === '')
    let email
        do {
            email = prompt('Email: ')
            if (email.trim() === '') {
                console.log('Numero invalido, tente novamente.\n')
            }
        } while (email.trim() === '')

    const Id = contatos.length > 0 ? contatos[contatos.length - 1].id + 1 : 1
    const contato = {
        nome,
        telefone,
        email,
        id : Id,
    }
    contatos.push(contato)
    console.log('\nContato adicionado com sucesso!')
    
    console.log ('\nPressione enter para retornar ao menu, ou s para adicionar outro contato.')
    let voltarMenu = prompt ('')
    if (voltarMenu == '') {
        menu(contatos)
    } else if (voltarMenu.toLowerCase() == 's') {
        adicionarContatos(contatos, prompt, menu)
    }
}

module.exports = adicionarContatos