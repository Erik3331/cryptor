let valorCriptomoeda;
let valorConvertido;

async function selecionarCriptomoeda(criptomoeda) {
  const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${criptomoeda}&vs_currencies=brl`);

  const data = await response.json();
  valorCriptomoeda = data[criptomoeda].brl;

  return valorCriptomoeda;
}

export async function converterValorParaCriptomoeda(valor, criptomoeda) {
  await selecionarCriptomoeda(criptomoeda);

  valorConvertido = valor / valorCriptomoeda;

  return valorConvertido.toFixed(6)
}

converterValorParaCriptomoeda(100, 'bitcoin');