export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="menu"] a[href^="#"]'
  );

  function scrollToSection(event) {
    event.preventDefault(); // previne o comportamento padrão
    const href = event.currentTarget.getAttribute("href"); // salva na variavel href o atributo "href" do target do click
    const section = document.querySelector(href); // Retorna o elemento html que tem o id igual ao atributo da variavel href
    // const topo = section.offsetTop;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    // Forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   bejavior: 'smooth',
    // })
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
