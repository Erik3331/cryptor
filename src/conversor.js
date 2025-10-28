async function converterParaCriptomoeda(valorEmReais, criptomoeda) {
  const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${criptomoeda}`;

  const response = await fetch(url, {
    headers: {
      'X-CMC_PRO_API_KEY': 'cbf12941174c43c594e507140a232241'
    }
  });

  const data = await response.json();
  console.log(data);
}

converterParaCriptomoeda(100, 'ETH');