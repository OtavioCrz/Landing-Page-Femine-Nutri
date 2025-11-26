// Arquivo principal de scripts do site Femine

// Exemplo futuro: abrir/fechar menu mobile
// const menuButton = document.querySelector('.menu-button');
// const mobileMenu = document.querySelector('.mobile-menu');

// menuButton.addEventListener('click', () => {
//     mobileMenu.classList.toggle('hidden');
// });


// Outras funcionalidades JavaScript podem ser adicionadas aqui

// Carrega automaticamente os arquivos HTML da pasta "partials"
// em todos os elementos que tiverem o atributo data-include

document.addEventListener('DOMContentLoaded', () => {
    const includes = document.querySelectorAll('[data-include]');

    includes.forEach(el => {
        const name = el.getAttribute('data-include'); // ex: "header"
        const filePath = `partials/${name}.html`;

        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro ao carregar ${filePath}`);
                }
                return response.text();
            })
            .then(html => {
                el.innerHTML = html;
            })
            .catch(err => {
                console.error(err);
                el.innerHTML = `<!-- Falha ao carregar ${filePath} -->`;
            });
    });
});
