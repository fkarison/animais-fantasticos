export default class Funcionamento {
  constructor(funcionamentoTarget) {
    this.funcionamento = document.querySelector(funcionamentoTarget);
    this.activeClass = 'aberto';
  }

  dadosAgora() {
    this.diaAgora = new Date().getDay();
    this.horarioAgora = new Date().getHours();
  }

  estaAberto() {
    this.dadosAgora();
    if (
      this.diaAgora > 0 &&
      this.diaAgora < 6 &&
      this.horarioAgora >= 8 &&
      this.horarioAgora < 18
    ) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.estaAberto();
    }
    return this;
  }
}
