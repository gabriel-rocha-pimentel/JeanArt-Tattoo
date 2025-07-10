import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfólio' },
    { path: '/depoimentos', label: 'Depoimentos' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/contato', label: 'Contato' }
  ];

  // Atualizado para o novo número e link do WhatsApp
  const whatsappUrl = "https://wa.me/5538997514857?text=Olá! Gostaria de agendar uma sessão de tatuagem.";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" aria-label="Página Inicial de Jean Art Tattoo Design">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-gradient"
              style={{ fontFamily: "'Cinzel Decorative', serif" }}
            >
              Jean Art Tattoo Design
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link text-sm font-medium transition-colors hover:text-yellow-400 ${
                  location.pathname === item.path ? 'active text-yellow-400' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Agendar Sessão
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 glass-effect rounded-lg p-4"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition-colors hover:text-yellow-400 ${
                      location.pathname === item.path ? 'text-yellow-400' : 'text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="bg-yellow-500 hover:bg-yellow-600 text-black w-full"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Agendar Sessão
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;