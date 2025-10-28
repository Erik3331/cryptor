// Bibliotecas
import { FaBitcoin, FaEthereum } from 'react-icons/fa'

// Componentes
import { Footer } from './components/Footer'

// Imagens
import logo from './assets/logo.png'

const App = () => {
  return (
    <div className='text-center text-xl'>
      <header className=''>
        <div className='flex justify-center items-center py-10 gap-4'>
          <img className="h-25" src={logo} alt="logo" />
          <h1 className='text-5xl font-bold font-audiowide'>CRYPTOR</h1>
        </div>
        <p>Converta seu dinheiro para criptomoedas com valores atualizados em tempo real!</p>
      </header>

      <main className="grid place-items-center py-30 gap-6">
        <div className="grid grid-cols-3 items-center gap-4 w-full max-w-md">
          <input
            type="text"
            placeholder="R$"
            className="border border-gray-400 rounded p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-center">em</p>
          <select
            className="border border-gray-400 rounded p-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Selecione</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="ethereum">Ethereum</option>
            <option value="tether">Tether</option>
            <option value="solana">Solana</option>
            <option value="bnb">BNB</option>
          </select>
        </div>

        <button onClick="converter()" className="bg-blue-950 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Enviar
        </button>

        <div>
          <p></p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App