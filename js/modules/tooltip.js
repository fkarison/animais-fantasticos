export default class Tooltip {
  constructor(tooltip) {
    this.tooltips = document.querySelectorAll(tooltip);
    // bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Para linkar o tooltipBox que está dentro do onMouseLeave com o tooltipBox que está dentro do onMouseOver criou essa variável onMouseLeave que pode ser acessada dentro do onMouseOver, declarou a propriedade tooltipBox do onMouseLeave e deu a ela o valor da variável tooltipBox que pertence ao onMouseOver.

  // Move o tooltip com base em seus estilos de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 10}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 180}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 10}px`;
    }
  }

  // Remove a tooltip e os eventos de mousemove e mouseleave
  onMouseLeave(event) {
    this.tooltipBox.remove(); // Esse método só consegue acessar o tooltipBox dentro dele se usar o this para referencia-lo
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // Cria a tooltip box e coloca no body
  createToolTip(element) {
    const tooltipBox = document.createElement('div');
    const texto = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltips');
    tooltipBox.innerText = texto;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // Cria a tooltip e adiciona os eventos de mousemove e mouseleave ao target
  onMouseOver(event) {
    // Cria a tooltip box e coloca em uma propriedade
    this.createToolTip(event.currentTarget);

    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
  }

  // Adiciona os eventos de mouseover a cada tooltip do site
  addTooltipEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipEvent();
    }
    return this;
  }
}
