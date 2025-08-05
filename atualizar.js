function atualizarContatos (contatos, prompt, menu) {
    contatos.forEach(contato => {
        console.log(`ID: ${contato.id}, Nome: ${contato.nome}, Telefone:
        ${contato.telefone}, Email: ${contato.email}`);
        });

    let remover = prompt ('\nDigite o id do contato que deseja atualizar: ')
    const index = parseInt(remover, 10) - 1;

    if (index >= 0 && index < contatos.length) {
        let novoNome
            do {
                novoNome = prompt('Nome: ')
                if (novoNome.trim() === '') {
                    console.log('Numero invalido, tente novamente.\n')
                }
            } while (novoNome.trim() === '')
        let novoTelefone
            do {
                novoTelefone = prompt('Telefone: ');
                if (isNaN(novoTelefone) || novoTelefone.trim() === '') {
                    console.log('Numero invalido, tente novamente.\n')
                }
            } while (isNaN(novoTelefone) || novoTelefone.trim() === '')
        let novoEmail
            do {
                novoEmail = prompt('Email: ')
                if (novoEmail.trim() === '') {
                    console.log('Numero invalido, tente novamente.\n')
                }
            } while (novoEmail.trim() === '')

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