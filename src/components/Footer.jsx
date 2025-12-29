
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Costs</h2>
            <p className="text-gray-400 mt-2">Gerenciamento de projetos inteligente</p>
          </div>
          
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            <span className="font-semibold">Costs</span> &copy; {new Date().getFullYear()} - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
