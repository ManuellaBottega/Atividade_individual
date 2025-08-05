function listarContatos(contatos, prompt, menu) {
    contatos.forEach(contato => {
    console.log(`ID: ${contato.id}, Nome: ${contato.nome}, Telefone:
    ${contato.telefone}, Email: ${contato.email}`);
    });

    console.log ('Pressione enter para retornar ao menu. ')
    let voltarMenu = prompt ('')
    if (voltarMenu == '') {
        menu(contatos)
    }
}

module.exports = listarContatos