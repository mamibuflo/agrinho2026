// ==== SCROLL SUAVE PARA NAVIGATION ====
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// ==== FORMULÁRIO DE CONTATO ====
const form = document.getElementById('formContato');
const respostaForm = document.getElementById('respostaForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if(nome === "" || email === "" || mensagem === "") {
        respostaForm.textContent = "Por favor, preencha todos os campos.";
        respostaForm.style.color = "red";
        return;
    }

    // Simulação de envio de formulário
    respostaForm.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
    respostaForm.style.color = "#2e7d32";

    // Limpar formulário
    form.reset();
});

// ==== ADICIONAR NOVA PRÁTICA SUSTENTÁVEL ====
const btnAdicionar = document.getElementById('btnAdicionar');
const cardsContainer = document.querySelector('.cards');

btnAdicionar.addEventListener('click', () => {
    const pratica = prompt("Digite o nome da nova prática sustentável:");
    const descricao = prompt("Digite uma descrição curta sobre essa prática:");
    const imagemURL = prompt("Digite a URL de uma imagem (opcional):");

    if(pratica && descricao) {
        const card = document.createElement('div');
        card.classList.add('card');

        // Imagem (se não fornecida, usar imagem padrão)
        const img = document.createElement('img');
        img.src = imagemURL || 'https://images.unsplash.com/photo-1523958203904-cdcb402031af?auto=format&fit=crop&w=400&q=80';
        img.alt = pratica;
        card.appendChild(img);

        // Título
        const h3 = document.createElement('h3');
        h3.textContent = pratica;
        card.appendChild(h3);

        // Descrição
        const p = document.createElement('p');
        p.textContent = descricao;
        card.appendChild(p);

        cardsContainer.appendChild(card);
    } else {
        alert("Prática ou descrição não podem ficar vazias!");
    }
});

// ==== ANIMAÇÃO SIMPLES PARA CARDS AO SCROLL ====
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});