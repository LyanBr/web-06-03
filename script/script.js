// Script para capturar e armazenar dados no localStorage

document.addEventListener('DOMContentLoaded', function() {
    // Adiciona o evento ao formulário após o DOM estar carregado
    const form = document.getElementById('portfolioForm');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            // Captura os dados do formulário
            const titulo = document.getElementById('tituloForm').value;
            const descricao = document.getElementById('descricaoForm').value;

            // Salva no localStorage
            localStorage.setItem('titulo', titulo);
            localStorage.setItem('descricao', descricao);

            // Verifica se há imagem selecionada
            const imagemInput = document.getElementById('imagemForm');
            if (imagemInput.files && imagemInput.files[0]) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    localStorage.setItem('imagem', e.target.result);
                    // Redireciona após salvar a imagem
                    window.location.href = 'index.html'; // Verifique o caminho correto
                };
                reader.readAsDataURL(imagemInput.files[0]);
            } else {
                // Redireciona imediatamente se não houver imagem
                window.location.href = 'index.html'; // Verifique o caminho correto
            }
        });
    }

    // Função para carregar os dados no index.html
    function carregarDados() {
        const titulo = localStorage.getItem('titulo');
        const descricao = localStorage.getItem('descricao');
        const imagem = localStorage.getItem('imagem');

        // Atualiza o título
        if (titulo) {
            const elementodotitulo = document.getElementById('titulo-index');
            if (elementodotitulo) {
                elementodotitulo.textContent = titulo;
            }
        }

        // Atualiza a descrição
        if (descricao) {
            const elementodadescricao = document.getElementById('descricao-index');
            if (elementodadescricao) {
                elementodadescricao.textContent = descricao;
            }
        }

        // Atualiza a imagem
        if (imagem) {
            const elementodaimagem = document.getElementById('imagem-index');
            if (elementodaimagem) {
                elementodaimagem.src = imagem;
            }
        }
    }

    // Verifica se estamos na página "index" e executa a função carregarDados
    if (window.location.pathname.includes('index')) {
        carregarDados();
    }
});
