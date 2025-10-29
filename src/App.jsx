// Bibliotecas
import { FaArrowsLeftRight } from 'react-icons/fa6'
import { useState, useEffect } from 'react'

// Componentes
import { Footer } from './components/Footer'

// Imagens
import logo from './assets/logo.png'
import { converterValorParaCriptomoeda } from './conversor'

const App = () => {
  const [valor, setValor] = useState('');
  const [moeda, setMoeda] = useState('');
  const [criptomoeda, setCriptomoeda] = useState('');
  const [resultado, setResultado] = useState('');

  useEffect(() => {
    async function atualizarResultado() {
      if (!valor || !criptomoeda) {
        setResultado('');
        return;
      }
      const res = await converterValorParaCriptomoeda(parseFloat(valor), criptomoeda);
      setResultado(res);
    }

    atualizarResultado();
  }, [valor, criptomoeda]);

  return (
    <div className='text-center text-xl'>
      <header className=''>
        <div className='flex justify-center items-center py-10 gap-4'>
          <img className="h-35" src={logo} alt="logo" />
          <h1 className='text-7xl font-bold font-audiowide'>CRYPTOR</h1>
        </div>
        <p className='text-2xl'>Converta seu dinheiro para criptomoedas com valores atualizados em tempo real!</p>
      </header>

      <main className="grid place-items-center py-35 px-40 gap-6">
        <div className="grid grid-cols-5 a items-center gap-4 w-full ">
          <input
            type="number"
            placeholder="R$"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            className="border border-gray-400 rounded-full p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={moeda}
            className="rounded-full p-2 bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Moeda</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="ethereum">Ethereum</option>
            <option value="tether">Tether</option>
            <option value="solana">Solana</option>
            <option value="binancecoin">BNB</option>
          </select>
          <div className='flex justify-center '><FaArrowsLeftRight /></div>
          <input
            type="number"
            value={resultado}
            className="border border-gray-400 rounded-full p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={criptomoeda}
            onChange={(e) => setCriptomoeda(e.target.value)}
            className="rounded-full p-2 bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Criptomoeda</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="ethereum">Ethereum</option>
            <option value="tether">Tether</option>
            <option value="solana">Solana</option>
            <option value="binancecoin">BNB</option>
          </select>
        </div>

      </main>

      <Footer />
    </div>
  )
}

export default App;