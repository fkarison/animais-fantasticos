export default class Scrollsuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault(); // previne o comportamento padrão
    const href = event.currentTarget.getAttribute('href'); // salva na variavel href o atributo "href" do target do click
    const section = document.querySelector(href); // Retorna o elemento html que tem o id igual ao atributo da variavel href
    // const topo = section.offsetTop;
    section.scrollIntoView(this.options);
    // Forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   bejavior: 'smooth',
    // })
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
