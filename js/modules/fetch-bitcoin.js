export default function initFetchBitcoin() {}

fetch('https://blockchain.info/ticker')
  .then((response) => response.json())
  .then((response) => {
    const doacaoBitcoin = document.querySelector('.btc-preco');
    const valorBitcoin = response.BRL.sell;
    doacaoBitcoin.innerText = (1000 / valorBitcoin).toFixed(4);
  })
  .catch((erro) => {
    console.log(Error(erro));
  });

// https://blockchain.info/ticker
