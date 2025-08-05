function atualizarContatos (contatos, prompt, menu) {
    let novoNome
    let novoTelefone
    let novoEmail

    contatos.forEach(contato => {
        console.log(`ID: ${contato.id}, Nome: ${contato.nome}, Telefone:
        ${contato.telefone}, Email: ${contato.email}`);
        });

    let remover = prompt ('\nDigite o id do contato que deseja atualizar: ')
    const index = parseInt(remover, 10) - 1;

    if (index >= 0 && index < contatos.length) {
        let novoNome = prompt ('digite o novo nome: ')
        let novoTelefone = prompt ('digite o novo telefone: ')
        if (isNaN(novoTelefone)) {
            console.log('Numero invalido, tente novamente.\n')
            atualizarContatos(contatos, prompt, menu)
        }
        let novoEmail = prompt ('digite o novo email: ')

        contatos[index] = {
            nome : novoNome,
            telefone : novoTelefone,
            email : novoEmail,
            id : contatos[index].id,
        }
    } else {
        console.log('Id inválido!');
    }

    console.log ('Pressione enter para retornar ao menu, ou s para atualizar outro contato. ')
    let voltarMenu = prompt ('')
    if (voltarMenu == '') {
        menu(contatos)
    } else if (voltarMenu.toLowerCase() == 's') {
        atualizarContatos(contatos, prompt, menu)
    }
}

module.exports = atualizarContatos