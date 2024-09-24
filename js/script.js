const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle'); // Assumindo que você tenha um botão de menu

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


function showHome() {
    document.querySelector('.rules-section').style.display = 'none'; // Esconde a seção de regras
    document.querySelector('.hero .text-box').style.display = 'block'; // Mostra o texto do Hero
}

function showRules() {
    document.querySelector('.hero .text-box').style.display = 'none'; // Esconde o texto do Hero
    document.querySelector('.rules-section').style.display = 'block'; // Mostra a seção de regras
}

