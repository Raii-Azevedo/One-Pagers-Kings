document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show');
    });
});


function showHome() {
    document.querySelector('.rules-section').style.display = 'none'; // Esconde a seção de regras
    document.querySelector('.hero .text-box').style.display = 'block'; // Mostra o texto do Hero
}

function showRules() {
    document.querySelector('.hero .text-box').style.display = 'none'; // Esconde o texto do Hero
    document.querySelector('.rules-section').style.display = 'block'; // Mostra a seção de regras
}

