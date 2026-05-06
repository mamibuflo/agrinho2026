// Adicionar prática sustentável
document.getElementById('btnAdicionar').addEventListener('click', () => {
    const pratica = prompt("Digite uma nova prática sustentável:");
    if (pratica) {
        const li = document.createElement('li');
        li.textContent = pratica;
        document.getElementById('impacto