import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, Award, MapPin, Brush, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const whatsappUrl = "https://wa.me/5538997514857?text=Olá! Gostaria de agendar uma sessão de tatuagem.";

  const portfolioImages = [
    {
      src: "/assets/portfolio/realismo/realismo-falcao.webp",
      alt: "Tatuagem realismo de um falcão no braço",
      style: "Realismo"
    },
    {
      src: "/assets/portfolio/blackwork/blackwork-padrao-geometrico.webp",
      alt: "Tatuagem blackwork com padrão geométrico",
      style: "Blackwork"
    },
    {
      src: "/assets/portfolio/fine-line/fine-line-borboleta.webp",
      alt: "Tatuagem fine-line de uma borboleta delicada",
      style: "Fine-Line"
    }
  ];

  const differentials = [
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: "Técnica Premiada",
      description: "Especialista em realismo preto e cinza com reconhecimento nacional."
    },
    {
      icon: <MapPin className="w-8 h-8 text-yellow-400" />,
      title: "Atendimento em Bonfinópolis de Minas e Brasília",
      description: "Atendimento profissional e seguro em Bonfinópolis de Minas – MG e Brasília – DF."
    },
    {
      icon: <Brush className="w-8 h-8 text-yellow-400" />,
      title: "Experiência Exclusiva",
      description: "Atendimento personalizado do conceito à execução final."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Jean Art Tattoo Design | Tatuagens com Significado em Bonfinópolis de Minas e Brasília</title>
        <meta name="description" content="Jean Art Tattoo Design é especializado em realismo preto & cinza, com projetos autorais detalhados e peças de grande impacto visual. Atua em Bonfinópolis de Minas – MG e Brasília – DF, oferecendo atendimento profissional e personalizado." />
        <meta property="og:title" content="Jean Art Tattoo Design | Tatuagens com Significado em Bonfinópolis de Minas e Brasília" />
        <meta property="og:description" content="Especialista em realismo, blackwork e fine-line. Transforme sua pele em arte através de técnicas premiadas. Atendimento em Bonfinópolis de Minas – MG e Brasília – DF." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jeanarttattoodesign.com.br" />
        <meta property="og:image" content="https://www.jeanarttattoodesign.com.br/assets/og-image.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="tatuador realismo MG, tatuagem blackwork Bonfinópolis de Minas, fine-line tattoo Brasília, Jean Art Tattoo, tatuador Bonfinópolis de Minas, tatuador Brasília" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-screen-md mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6 ornament"
            >
              <span className="text-gradient">Transforme sua pele em uma obra de arte com significado</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-gray-300 mb-8"
            >
              Jean é tatuador especializado em realismo preto e cinza, reconhecido por projetos autorais detalhados e peças de grande impacto visual. Atua nas cidades de Bonfinópolis de Minas e Brasília‑DF, oferecendo um atendimento profissional e personalizado.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-base"
              >
                <Link to="/portfolio">
                  Explore o Portfólio <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black font-semibold text-base"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Agendar sessão via WhatsApp">
                  Agendar Sessão
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center mt-8 space-x-2"
            >
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-300 ml-2 text-sm">Avaliação 5.0 - Mais de 500 clientes satisfeitos</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Styles Section */}
      <section className="py-16 md:py-24 bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 ornament">
              Estilos que Criam Memórias
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-screen-md mx-auto">
              Cada traço carrega uma história. Descubra o estilo que mais combina com a sua.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
              >
                <Link to="/portfolio" aria-label={`Ver portfólio de ${image.style}`}>
                  <img  alt={image.alt}
                    className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1595872018818-97555653a011" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <h3 className="text-xl md:text-2xl text-white font-bold">{image.style}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold text-base"
            >
              <Link to="/portfolio">
                Ver Portfólio Completo
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 ornament">
              Por que escolher Jean Art Tattoo?
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-screen-md mx-auto">
              Uma jornada criativa onde sua visão se encontra com a arte, resultando em uma experiência inesquecível.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 glass-effect rounded-lg hover:border-yellow-500/50 transition-colors"
              >
                <div className="flex justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-base text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-yellow-900/10 to-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-screen-md mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 ornament">
              Pronto para sua próxima tatuagem?
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-8">
              Entre em contato agora e vamos criar juntos uma obra de arte única na sua pele.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-10 text-lg font-semibold"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Agendar consulta via WhatsApp">
                Agendar Consulta via WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;