export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");

  const diaAgora = new Date().getDay();
  const horarioAgora = new Date().getHours();

  if (diaAgora > 0 && diaAgora < 6 && horarioAgora >= 8 && horarioAgora < 18) {
    funcionamento.classList.add("aberto");
  }
}
