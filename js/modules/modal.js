export default class Modal {
  constructor(abrir, fechar, containerModal) {
    this.abrir = document.querySelector(abrir);
    this.fechar = document.querySelector(fechar);
    this.containerModal = document.querySelector(containerModal);
    // bind this ao callback para fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clicarForaModal = this.clicarForaModal.bind(this);
  }

  // Abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // Adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // Fecha o modal ao clicar fora
  clicarForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // Adiciona os eventos aos elementos do modal
  addModalEvent() {
    this.abrir.addEventListener('click', this.eventToggleModal);
    this.fechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clicarForaModal);
  }

  init() {
    // Verifica se esses elementos existem, caso sim, executa a função, caso contrário, não retorna erro.
    if (this.abrir && this.fechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
