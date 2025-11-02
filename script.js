// script.js

document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona todos os elementos que queremos animar
    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

    // Configura o "observador"
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o elemento está visível na tela
            if (entry.isIntersecting) {
                // Adiciona a classe 'is-visible' que dispara a animação CSS
                entry.target.classList.add("is-visible");
                
                // (Opcional) Para de observar o elemento depois que ele apareceu
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Dispara a animação quando 10% do elemento estiver visível
    });

    // Pede ao observador para "assistir" cada elemento
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
// script.js
/* ... (todo o seu código do IntersectionObserver fica aqui em cima) ... */

}); // << Fim do 'DOMContentLoaded' original

/* --- NOVO CÓDIGO DO GRÁFICO DE RADAR --- */
// (Ele também espera o DOM carregar)
document.addEventListener("DOMContentLoaded", () => {
    
    // Verifica se o elemento do gráfico existe na página
    if (document.getElementById('skillsChart')) {
        
        // Pega o "contexto" do canvas
        const ctx = document.getElementById('skillsChart').getContext('2d');
        
        // Define as cores (usando o azul que já temos no site)
        const chartBlue = '#003057';
        const chartBlueTransparent = 'rgba(0, 48, 87, 0.2)';

        // Cria o novo gráfico
        const skillsChart = new Chart(ctx, {
            type: 'radar', // Tipo do gráfico
            data: {
                labels: [
                    'Excel', 
                    'Sharepoint', 
                    'Power BI', 
                    'Comunicação', 
                    'Trabalho em Equipe'
                ],
                datasets: [{
                    label: 'Nível',
                    data: [5, 5, 1, 5, 5], // Nossas notas
                    backgroundColor: chartBlueTransparent, // Cor de preenchimento
                    borderColor: chartBlue, // Cor da linha
                    pointBackgroundColor: chartBlue, // Cor dos pontos
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: chartBlue
                }]
            },
            options: {
                responsive: true, 
                maintainAspectRatio: false, 
                
                // ----- NOVA CORREÇÃO AQUI -----
                // Força o gráfico a deixar espaço nas bordas para o texto
                layout: {
                    padding: 25 // Adiciona 25px de "respiro" em todos os lados
                },
                // ----- FIM DA CORREÇÃO -----

                // Adiciona um raio maior ao passar o mouse
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                pointHoverRadius: 8, // Aumenta o ponto no hover
                // Configuração da escala (de 0 a 5)
                scales: {
                    r: {
                        suggestedMin: 0,
                        suggestedMax: 5,
                        pointLabels: {
                            // NOVO: Fonte mais escura e maior
                            color: '#333', // Cor do texto (era cinza)
                            font: {
                                size: 16, // Tamanho da fonte
                                weight: '500' // Peso "Medium"
                            }
                        },
                        ticks: {
                            stepSize: 1, // Linhas (1, 2, 3, 4, 5)
                            backdropColor: 'transparent' // Remove o fundo dos números
                        }
                    }
                },
                // Esconde a legenda ("Nível") para ficar mais limpo
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
    /* --- NOVO CÓDIGO DO MENU MOBILE --- */
document.addEventListener("DOMContentLoaded", () => {

    // Pega os elementos do menu
    const menuButton = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (menuButton && navLinks) {
        // 1. Função para abrir/fechar o menu
        function toggleMenu() {
            menuButton.classList.toggle('active');
            navLinks.classList.toggle('active');
        }

        // 2. Adiciona o clique no botão hamburger
        menuButton.addEventListener('click', toggleMenu);

        // 3. (IMPORTANTE) Fecha o menu quando um link é clicado
        // Pega todos os links de dentro do menu mobile
        const mobileLinks = navLinks.querySelectorAll('a');
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Se o menu estiver aberto, fecha ele
                if (navLinks.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
    }
    
}); // Fim do 'DOMContentLoaded'
});
