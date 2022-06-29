export default function initModal() {
  const abrir = document.querySelector('[data-modal="abrir"]');
  const fechar = document.querySelector('[data-modal="fechar"]');
  const modal = document.querySelector('[data-modal="container"]');
  function toggleModal(event) {
    event.preventDefault();
    modal.classList.toggle('ativo');
  }

  function clicarForaModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }
  // Verifica se esses elementos existem, caso sim, executa a função, caso contrário, não retorna erro.
  if (abrir && fechar && modal) {
    abrir.addEventListener('click', toggleModal);
    fechar.addEventListener('click', toggleModal);
    modal.addEventListener('click', clicarForaModal);
  }
}
