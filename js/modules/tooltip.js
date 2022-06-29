export default function initToolTip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  // Para linkar o tooltipBox que está dentro do onMouseLeave com o tooltipBox que está dentro do onMouseOver criou essa variável onMouseLeave que pode ser acessada dentro do onMouseOver, declarou a propriedade tooltipBox do onMouseLeave e deu a ela o valor da variável tooltipBox que pertence ao onMouseOver.

  const onMouseMove = {
    handleEvent(event) {
      // Pega a posição de onde seria criado o elemento tooltipBox e define que ele aparecerá na posição do mouse com diferença de 10px
      this.tooltipBox.style.top = `${event.pageY + 10}px`;
      this.tooltipBox.style.left = `${event.pageX + 10}px`;
    },
  };

  const onMouseLeave = {
    // Para os nossos métodos funcionarem dentro de um objeto é necessário utilizar o método HandleEvent()
    handleEvent() {
      this.tooltipBox.remove(); // Esse método só consegue acessar o tooltipBox dentro dele se usar o this para referencia-lo
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function createToolTip(element) {
    const tooltipBox = document.createElement('div');
    const texto = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltips');
    tooltipBox.innerText = texto;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver() {
    const tooltipBox = createToolTip(this);

    onMouseLeave.tooltipBox = tooltipBox; // Ao mesmo tempo que está declarando uma nova propriedade tooltipBox dentro do objeto onMouseLeave também está definindo qual seu valor.
    this.addEventListener('mouseleave', onMouseLeave);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.element = this;
    onMouseMove.element = this;
  }

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
