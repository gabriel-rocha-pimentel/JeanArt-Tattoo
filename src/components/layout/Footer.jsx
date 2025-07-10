import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-yellow-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="text-2xl font-bold text-gradient">Jean Art Tattoo Design</span>
            <p className="mt-4 text-gray-400">
              Jean é tatuador especializado em realismo preto e cinza, reconhecido por projetos autorais detalhados e peças de grande impacto visual. Atua nas cidades de Bonfinópolis de Minas e Brasília‑DF, oferecendo um atendimento profissional e personalizado.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center md:text-left"
          >
            <span className="text-lg font-semibold text-white mb-4 block">Contato</span>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MessageCircle className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">+55 (38) 99751‑4857</span>
              </div>
              {/* E-mail removido conforme instrução */}
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">Bonfinópolis de Minas – MG e Brasília – DF</span>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <span className="text-lg font-semibold text-white mb-4 block">Redes Sociais</span>
            <div className="flex justify-center mb-2 md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/jean_arttattoodesign/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-black transition-colors"
                aria-label="Instagram de Jean Art Tattoo Design"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5538997514857"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-green-600 transition-colors"
                aria-label="WhatsApp de Jean Art Tattoo Design"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="section-divider my-8"></div>

        <div className="text-center text-gray-400 mt-2">
          <p>&copy; {currentYear} Jean Art Tattoo Design. Todos os direitos reservados.</p>
          <p className="mt-4 mb-4 text-sm">
            Desenvolvido com ❤️ por <a href='https://techconnect.app.br' target='_blank'>Tech&Connect Branch</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
