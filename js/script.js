function showHome() {
    const sections = document.querySelectorAll('.rules-section, .evaluation-criteria-section, .awards-section, .bracket-section, .game-section');
    const heroTextBox = document.querySelector('.hero .text-box');
  
    sections.forEach(section => section.style.display = 'none'); // Esconde todas as seções
    if (heroTextBox) heroTextBox.style.display = 'block'; // Mostra o texto do Hero
  }
  
  function showRules() {
    const sections = document.querySelectorAll('.evaluation-criteria-section, .awards-section, .bracket-section, .game-section');
    const heroTextBox = document.querySelector('.hero .text-box');
    const rulesSection = document.querySelector('.rules-section');
  
    if (heroTextBox) heroTextBox.style.display = 'none'; // Esconde o texto do Hero
    sections.forEach(section => section.style.display = 'none'); // Esconde outras seções
    if (rulesSection) rulesSection.style.display = 'block'; // Mostra a seção de regras
  }
  
  function showEvaluationCriteria() {
    const sections = document.querySelectorAll('.rules-section, .awards-section, .bracket-section, .game-section');
    const heroTextBox = document.querySelector('.hero .text-box');
    const evaluationSection = document.querySelector('.evaluation-criteria-section');
  
    if (heroTextBox) heroTextBox.style.display = 'none'; // Esconde o texto do Hero
    sections.forEach(section => section.style.display = 'none'); // Esconde outras seções
    if (evaluationSection) evaluationSection.style.display = 'block'; // Mostra critérios de avaliação
  }
  
  function showAwards() {
    const sections = document.querySelectorAll('.rules-section, .evaluation-criteria-section, .bracket-section, .game-section');
    const heroTextBox = document.querySelector('.hero .text-box');
    const awardsSection = document.querySelector('.awards-section');
  
    if (heroTextBox) heroTextBox.style.display = 'none'; // Esconde o texto do Hero
    sections.forEach(section => section.style.display = 'none'); // Esconde outras seções
    if (awardsSection) awardsSection.style.display = 'block'; // Mostra a seção de premiação
  }
  
  function showBracket() {
    const sections = document.querySelectorAll('.rules-section, .evaluation-criteria-section, .awards-section, .game-section');
    const heroTextBox = document.querySelector('.hero .text-box');
    const bracketSection = document.querySelector('.bracket-section');
  
    if (heroTextBox) heroTextBox.style.display = 'none'; // Esconde o texto do Hero
    sections.forEach(section => section.style.display = 'none'); // Esconde outras seções
    if (bracketSection) bracketSection.style.display = 'block'; // Certifica-se de mostrar a seção de bracket
  }
  
  function showGame() {
    const sections = document.querySelectorAll('.rules-section, .evaluation-criteria-section, .awards-section, .bracket-section');
    const heroTextBox = document.querySelector('.hero .text-box');
    const gameSection = document.querySelector('.game-section');

    if (heroTextBox) heroTextBox.style.display = 'none'; // Esconde o texto do Hero
    sections.forEach(section => section.style.display = 'none'); // Esconde outras seções
    if (gameSection) gameSection.style.display = 'block'; // Certifica-se de mostrar a seção de game
}
