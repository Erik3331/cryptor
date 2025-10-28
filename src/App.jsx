// Bibliotecas
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// Imagens
import logo from './assets/logo.png'

const App = () => {
  return (
    <div className='text-center text-xl'>
      <header className=''>
        <div className='flex justify-center items-center py-10 gap-4'>
          <img className="h-25" src={logo} alt="logo" />
          <h1 className='text-5xl font-bold'>CRYPTOR</h1>
        </div>
        <p>Converta seu dinheiro para criptomoedas com valores atualizados em tempo real!</p>
      </header>

      <footer className="flex flex-col items-center gap-2">
        <p>Desenvolvido por: Erik3331</p>
        <ul className="flex gap-4">
          <li>
            <a className="hover:text-blue-50" href="https://github.com/Erik3331" target="_blank" rel="noopener noreferrer">
              <FaGithub size={25} />
            </a>
          </li>
          <li>
            <a className="hover:text-blue-50" href="https://linkedin.com/in/erik3331/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={25} />
            </a>
          </li>
          <li>
            <a className="hover:text-blue-50" href="https://instagram.com/e.ramon18" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default App