export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      const doacaoBitcoin = document.querySelector(target);
      const valorBitcoin = response.BRL.sell;
      doacaoBitcoin.innerText = (1000 / valorBitcoin).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}

// https://blockchain.info/ticker
