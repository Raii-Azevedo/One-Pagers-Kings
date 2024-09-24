function showHome() {
    const sections = document.querySelectorAll('.rules-section, .evaluation-criteria-section, .awards-section');
    const heroTextBox = document.querySelector('.hero .text-box');

    sections.forEach(section => section.style.display = 'none'); // Esconde todas as seções
    if (heroTextBox) heroTextBox.style.display = 'block'; // Mostra o texto do Hero
}

function showRules() {
    const sections = document.querySelectorAll('.evaluation-criteria-section, .awards-section');
    const heroTextBox = document.querySelector('.hero .text-box');
    const rulesSection = document.querySelector('.rules-section');

    if (heroTextBox) heroTextBox.style.display = 'none'; // Esconde o texto do Hero
    sections.forEach(section => section.style.display = 'none'); // Esconde outras seções
    if (rulesSection) rulesSection.style.display = 'block'; // Mostra a seção de regras
}

function showEvaluationCriteria() {
    const sections = document.querySelectorAll('.rules-section, .awards-section');
    const heroTextBox = document.querySelector('.hero .text-box');
    const evaluationSection = document.querySelector('.evaluation-criteria-section');

    if (heroTextBox) heroTextBox.style.display = 'none'; // Esconde o texto do Hero
    sections.forEach(section => section.style.display = 'none'); // Esconde outras seções
    if (evaluationSection) evaluationSection.style.display = 'block'; // Mostra critérios de avaliação
}

function showAwards() {
    const sections = document.querySelectorAll('.rules-section, .evaluation-criteria-section');
    const heroTextBox = document.querySelector('.hero .text-box');
    const awardsSection = document.querySelector('.awards-section');

    if (heroTextBox) heroTextBox.style.display = 'none'; // Esconde o texto do Hero
    sections.forEach(section => section.style.display = 'none'); // Esconde outras seções
    if (awardsSection) awardsSection.style.display = 'block'; // Mostra a seção de premiação
}