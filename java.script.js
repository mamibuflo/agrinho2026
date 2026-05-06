// Função para adicionar prática à lista
document.getElementById('btnAdicionar').addEventListener('click', () => {
    const pratica = prompt("Digite uma nova prática sustentável:");
    if (pratica) {
        const li = document.createElement('li');
        li.textContent = pratica;
        document.getElementById('lista-praticas').appendChild(li);
    }
});

// Função para enviar formulário
document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    document.getElementById('respostaForm').textContent = `Obrigado, ${nome}! Sua mensagem foi recebida: "${mensagem}"`;

    // Limpa o formulário
    this.reset();
});