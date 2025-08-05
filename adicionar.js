function adicionarContatos (contatos, prompt, menu){
    const nome = prompt('Nome: ')
    const telefone = prompt('Telefone: ')
    if (isNaN(telefone)) {
        console.log('Numero invalido, tente novamente.\n')
        adicionarContatos(contatos, prompt, menu)
    } else {
    const email = prompt('Email: ')
    const Id = contatos.length > 0 ? contatos[contatos.length - 1].id + 1 : 1
    const contato = {
        nome,
        telefone,
        email,
        id : Id,
    }
    contatos.push(contato)
    console.log('\nContato adicionado com sucesso!')
    }
    console.log ('\nPressione enter para retornar ao menu, ou s para adicionar outro contato.')
    let voltarMenu = prompt ('')
    if (voltarMenu == '') {
        menu(contatos)
    } else if (voltarMenu.toLowerCase() == 's') {
        adicionarContatos(contatos, prompt, menu)
    }
}

module.exports = adicionarContatos