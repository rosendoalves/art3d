import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A3D</span>
            </div>
            <span className="text-2xl font-display font-bold text-gradient">ART3D</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-primary-600 transition-colors">Inicio</a>
            <a href="#servicios" className="text-gray-700 hover:text-primary-600 transition-colors">Servicios</a>
            <a href="#productos" className="text-gray-700 hover:text-primary-600 transition-colors">Productos</a>
            <a href="#empresas" className="text-gray-700 hover:text-primary-600 transition-colors">Empresas</a>
            <a href="#contacto" className="text-gray-700 hover:text-primary-600 transition-colors">Contacto</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contacto" className="btn-primary">
              Cotizar Ahora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-primary-600 transition-colors">Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-primary-600 transition-colors">Servicios</a>
              <a href="#productos" className="text-gray-700 hover:text-primary-600 transition-colors">Productos</a>
              <a href="#empresas" className="text-gray-700 hover:text-primary-600 transition-colors">Empresas</a>
              <a href="#contacto" className="text-gray-700 hover:text-primary-600 transition-colors">Contacto</a>
              <a href="#contacto" className="btn-primary text-center">
                Cotizar Ahora
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
