import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Lightbox from '@/components/common/Lightbox';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/common/SectionHeader';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'todos', label: 'Todos os Trabalhos' },
    { id: 'realismo', label: 'Realismo' },
    { id: 'blackwork', label: 'Blackwork' },
    { id: 'fine-line', label: 'Fine-Line' }
  ];

  const portfolioImages = [
    {
      id: 1,
      src: "/assets/portfolio/realismo/realismo-retrato-feminino.webp",
      alt: "Tatuagem realismo - Retrato feminino em preto e cinza",
      title: "Homenagem Eterna",
      description: "Retrato feito para homenagear a mãe da cliente, eternizando seu sorriso.",
      category: 'realismo'
    },
    {
      id: 2,
      src: "/assets/portfolio/realismo/realismo-leao.webp",
      alt: "Tatuagem realismo - Leão em preto e cinza no braço",
      title: "Força e Coragem",
      description: "Um leão simbolizando a superação de um momento desafiador na vida do cliente.",
      category: 'realismo'
    },
    {
      id: 3,
      src: "/assets/portfolio/fine-line/fine-line-desenho-delicado.webp",
      alt: "Tatuagem fine-line - Desenho delicado no antebraço",
      title: "Primeira Tatuagem",
      description: "Uma arte delicada para marcar o início da jornada da cliente no mundo da tatuagem.",
      category: 'fine-line'
    },
    {
      id: 4,
      src: "/assets/portfolio/blackwork/blackwork-padrao-geometrico.webp",
      alt: "Tatuagem blackwork - Padrão geométrico na perna",
      title: "Padrão de Vida",
      description: "Formas geométricas que representam o equilíbrio e a busca por novas perspectivas.",
      category: 'blackwork'
    },
    {
      id: 5,
      src: "/assets/portfolio/realismo/realismo-olho.webp",
      alt: "Tatuagem realismo - Olho hiper-realista",
      title: "O Olhar da Alma",
      description: "Um olhar que representa a visão de futuro e a clareza de propósito do cliente.",
      category: 'realismo'
    },
    {
      id: 6,
      src: "/assets/portfolio/fine-line/fine-line-flores-minimalistas.webp",
      alt: "Tatuagem fine-line - Flores minimalistas na costela",
      title: "Florescer",
      description: "Flores que simbolizam um novo ciclo de crescimento e renovação pessoal.",
      category: 'fine-line'
    },
    {
      id: 7,
      src: "/assets/portfolio/blackwork/blackwork-mandala.webp",
      alt: "Tatuagem blackwork - Mandala nas costas",
      title: "Centro de Energia",
      description: "Uma mandala para simbolizar o equilíbrio espiritual e a conexão interior.",
      category: 'blackwork'
    },
    {
      id: 8,
      src: "/assets/portfolio/realismo/realismo-retrato-masculino.webp",
      alt: "Tatuagem realismo - Retrato masculino no peito",
      title: "Legado de um Pai",
      description: "Retrato feito para homenagear o pai do cliente, um símbolo de força e inspiração.",
      category: 'realismo'
    },
    {
      id: 9,
      src: "/assets/portfolio/fine-line/fine-line-borboleta.webp",
      alt: "Tatuagem fine-line - Borboleta delicada no pulso",
      title: "Metamorfose",
      description: "Uma borboleta que representa a transformação e a liberdade de ser quem se é.",
      category: 'fine-line'
    }
  ];

  const filteredImages = selectedCategory === 'todos' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index) => {
    const originalIndex = portfolioImages.findIndex(p => p.id === filteredImages[index].id);
    setCurrentImageIndex(originalIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === portfolioImages.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? portfolioImages.length - 1 : prev - 1
    );
  };

  // Atualizado para o novo número e link do WhatsApp
  const whatsappUrl = "https://wa.me/5538997514857?text=Olá! Vi seu portfólio e gostaria de agendar uma sessão.";

  return (
    <>
      <Helmet>
        <title>Portfólio - Jean Art Tattoo Design | Realismo, Blackwork, Fine-Line</title>
        <meta name="description" content="Conheça o portfólio de Jean Art Tattoo Design. Especialista em tatuagens em realismo, fine-line e blackwork, atendendo em Bonfinópolis de Minas – MG e Brasília – DF." />
        <meta property="og:title" content="Portfólio - Jean Art Tattoo Design" />
        <meta property="og:description" content="Galeria completa de trabalhos em realismo, fine-line e blackwork, cada um com sua história. Atendendo em Bonfinópolis de Minas – MG e Brasília – DF." />
        <meta name="keywords" content="portfólio tatuagem, tatuador realismo Bonfinópolis de Minas, fine-line tattoo Brasília, tatuagem blackwork, Jean Art Tattoo Design" />
      </Helmet>

      <PageLayout>
        <SectionHeader 
          title="Histórias na Pele"
          subtitle="Cada tatuagem é uma colaboração, uma história contada através da arte. Explore alguns dos nossos trabalhos."
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'secondary'}
              onClick={() => setSelectedCategory(category.id)}
              className={`font-semibold text-base ${
                selectedCategory === category.id
                  ? 'bg-yellow-500 text-black hover:bg-yellow-600'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="portfolio-grid max-w-6xl mx-auto"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-900"
              onClick={() => openLightbox(index)}
              aria-label={`Ver detalhes da tatuagem: ${image.title}`}
            >
              <img 
                alt={image.alt}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl md:text-2xl font-bold">{image.title}</h3>
                  <p className="text-sm text-gray-300 capitalize">{image.category.replace('-', ' ')}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24 p-12 glass-effect rounded-lg max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Qual história você quer contar?
          </h2>
          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-screen-md mx-auto">
            Sua ideia merece se tornar uma obra de arte única. Vamos conversar sobre seu projeto e criar algo especial juntos.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-base"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Solicitar orçamento via WhatsApp">
              Solicitar Orçamento <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>

        {/* Lightbox */}
        <Lightbox
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          images={portfolioImages}
          currentIndex={currentImageIndex}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      </PageLayout>
    </>
  );
};

export default Portfolio;