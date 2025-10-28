import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col items-center gap-4 p-10 bg-gray-900 text-white absolute bottom-0 w-full">
        <p>Desenvolvido por: Erik3331</p>
        <ul className="flex gap-6">
          <li>
            <a
              href="https://github.com/Erik3331"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition duration-300 hover:scale-125 hover:text-blue-800"
            >
              <FaGithub size={25} />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/erik3331/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition duration-300 hover:scale-125 hover:text-blue-800"
            >
              <FaLinkedin size={25} />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/e.ramon18"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition duration-300 hover:scale-125 hover:text-blue-800"
            >
              <FaInstagram size={25} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}
