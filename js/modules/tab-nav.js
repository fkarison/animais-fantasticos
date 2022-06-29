export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  // Adicionou a classe ativo a primeira section
  tabContent[0].classList.add("ativo");

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo"); // Remove a classe ativo de todas as sections
    });
    const direcao = tabContent[index].dataset.anime; // retorna o nome do atributo data-anime
    tabContent[index].classList.add("ativo", direcao); // Adiciona uma classe 'ativo' ao index selecionado
  }

  // ForEach para a cada click nas LIs de tabMenu ele ativa a função activeTab e recebe o index do itemMenu
  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
