export default function initScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']"); // retorna as sections com a classe .js-scroll
  const windowsCorte = window.innerHeight * 0.65; // define que o topo da página será 65% do tamanho da tela

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top; // retorna a altura que cada section está em relação ao topo
      const isSectionVisible = sectionTop - windowsCorte < 0; // se a altura da section em relação ao topo - 65% da tela for menor que 0 retorne verdadeiro
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  // IF abaixo verifica se sections existe para executar o restante do código
  if (sections.length) {
    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
