function salvarRegistro() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cidade = document.getElementById("cidade").value;
    const telefone = document.getElementById("telefone").value;

    // Cria um objeto com os dados do registro
    const registro = {
        nome: nome,
        email: email,
        cidade: cidade,
        telefone: telefone
    };

    // Recupera registros existentes ou inicia um array vazio
    let registros = JSON.parse(localStorage.getItem('registros')) || [];

    // Adiciona o novo registro ao array
    registros.push(registro);

    // Salva o array atualizado no armazenamento local
    localStorage.setItem('registros', JSON.stringify(registros));

    // Limpa o formulário
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("telefone").value = "";
}
