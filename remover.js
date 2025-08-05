function removerContatos (contatos, prompt, menu) {

    contatos.forEach(contato => {
    console.log(`ID: ${contato.id}, Nome: ${contato.nome}, Telefone:
    ${contato.telefone}, Email: ${contato.email}`);
    })

    let remover = prompt ('\nDigite o id do contato que deseja remover: ')
    const index = contatos.findIndex(contato => contato.id === parseInt(remover, 10))
    
        if (index >= 0 && index < contatos.length) {
            const [removido] = contatos.splice(index, 1);
            console.log(`${removido.nome} foi removido com sucesso!`);
        } else {
            console.log('Id inválido!');
        }

    console.log ('Pressione enter para retornar ao menu, ou s para remover outro contato. ')
    let voltarMenu = prompt ('')
    if (voltarMenu == '') {
        menu(contatos)
    } else if (voltarMenu.toLowerCase() == 's') {
        removerContatos(contatos, prompt, menu)
    }

}

module.exports = removerContatos