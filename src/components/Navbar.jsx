
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Container from './layout/Container';
import logo from '../img/costs_logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <Container>
        <div className="flex justify-between items-center h-16">
          <Link to='/' className="flex items-center">
            <img src={logo} alt='costs' className="h-10 w-auto"/>
            <span className="ml-2 text-xl font-bold text-gray-800">Costs</span>
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <Link to='/' className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to='/projects' className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Projetos
            </Link>
            <Link to='/contact' className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contato
            </Link>
            <Link to='/company' className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Empresa
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <Link 
                to='/' 
                className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to='/projects' 
                className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projetos
              </Link>
              <Link 
                to='/contact' 
                className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
              <Link 
                to='/company' 
                className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Empresa
              </Link>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}

export default Navbar;
