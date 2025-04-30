import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-blue-400">Mi</span>Portfolio
        </Link>

        {/* Menú para móvil */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú para escritorio */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className={({ isActive }) => 
            isActive ? "text-blue-400 font-medium" : "hover:text-blue-400 transition-colors"
          }>
            Inicio
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 
            isActive ? "text-blue-400 font-medium" : "hover:text-blue-400 transition-colors"
          }>
            Sobre mí
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => 
            isActive ? "text-blue-400 font-medium" : "hover:text-blue-400 transition-colors"
          }>
            Proyectos
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            isActive ? "text-blue-400 font-medium" : "hover:text-blue-400 transition-colors"
          }>
            Contacto
          </NavLink>
          <NavLink to="/admin" className={({ isActive }) => 
            isActive ? "text-blue-400 font-medium" : "hover:text-blue-400 transition-colors"
          }>
            Admin
          </NavLink>
        </nav>
      </div>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 px-4 py-2">
          <nav className="flex flex-col space-y-3 py-3">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "text-blue-400 font-medium" : "hover:text-blue-400 transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "text-blue-400 font-medium" : "hover:text-blue-400 transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre mí
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                isActive ? "text-blue-400 font-medium" : "hover:text-blue-400 transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? "text-blue-400 font-medium" : "hover:text-blue-400 transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </NavLink>
            <NavLink 
              to="/admin" 
              className={({ isActive }) => 
                isActive ? "text-blue-400 font-medium" : "hover:text-blue-400 transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
