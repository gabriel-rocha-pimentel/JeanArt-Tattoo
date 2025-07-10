import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ isOpen, onClose, images, currentIndex, onPrevious, onNext }) => {
  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="lightbox-overlay"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative max-w-4xl max-h-[90vh] mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Fechar lightbox"
          >
            <X size={20} />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={onPrevious}
                className="absolute left-0 -translate-x-12 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={onNext}
                className="absolute right-0 translate-x-12 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="w-full h-full object-contain rounded-lg"
          />

          {(currentImage.title || currentImage.description) && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-white p-6 rounded-b-lg">
              <h3 className="text-xl font-bold" style={{fontFamily: "'Cinzel Decorative', serif"}}>{currentImage.title}</h3>
              {currentImage.description && <p className="text-sm text-gray-300 mt-1">{currentImage.description}</p>}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;