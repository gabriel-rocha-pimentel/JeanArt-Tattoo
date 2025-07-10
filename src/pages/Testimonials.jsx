import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/common/SectionHeader';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      highlight: "Tatuar com o Jean foi uma experiência inesquecível.",
      text: "Simplesmente incrível! O Jean conseguiu capturar exatamente o que eu queria. O realismo da tatuagem é impressionante, parece uma foto na pele. Profissional excepcional!",
      tattoo: "Retrato da minha avó",
      date: "Dezembro 2023"
    },
    {
      id: 2,
      name: "Carlos Mendes",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      highlight: "O resultado superou todas as minhas expectativas.",
      text: "Experiência incrível do início ao fim. O Jean é muito detalhista e cuidadoso. Recomendo de olhos fechados!",
      tattoo: "Leão realista no braço",
      date: "Janeiro 2024"
    },
    {
      id: 3,
      name: "Ana Costa",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      highlight: "O Jean tem um dom especial para o realismo.",
      text: "Que trabalho fantástico! A atenção aos detalhes é impressionante. Minha tatuagem ficou perfeita!",
      tattoo: "Rosa fine line",
      date: "Novembro 2023"
    },
    {
      id: 4,
      name: "Roberto Santos",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      highlight: "Profissional incrível e ambiente de primeira.",
      text: "Ambiente limpo, equipamentos de primeira qualidade e um resultado que superou todas as expectativas. Voltarei com certeza!",
      tattoo: "Mandala blackwork",
      date: "Outubro 2023"
    },
    {
      id: 5,
      name: "Juliana Oliveira",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      highlight: "Simplesmente o melhor tatuador que já conheci!",
      text: "O Jean é um verdadeiro artista. Cada detalhe foi pensado e executado com perfeição. Recomendo muito!",
      tattoo: "Olho realista",
      date: "Setembro 2023"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const previousTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const whatsappUrl = "https://wa.me/5538997514857?text=Olá! Vi os depoimentos e gostaria de agendar minha sessão.";

  return (
    <>
      <Helmet>
        <title>Depoimentos - Jean Art Tattoo Design | Clientes Satisfeitos</title>
        <meta name="description" content="Veja o que nossos clientes falam sobre Jean Art Tattoo Design. Histórias reais de pessoas que transformaram sua pele em arte em Bonfinópolis de Minas – MG e Brasília – DF." />
        <meta property="og:title" content="Depoimentos - Jean Art Tattoo Design" />
        <meta property="og:description" content="Depoimentos reais de clientes satisfeitos com trabalhos em realismo, blackwork e fine-line. Atendendo em Bonfinópolis de Minas – MG e Brasília – DF." />
        <meta name="keywords" content="depoimentos tatuagem, avaliações Jean Art Tattoo Design, clientes satisfeitos, tatuador realismo Bonfinópolis de Minas, tatuador realismo Brasília DF" />
      </Helmet>

      <PageLayout>
        <SectionHeader 
          title="Histórias que nos Inspiram"
          subtitle="A confiança de cada cliente é a nossa maior recompensa. Veja o que eles dizem sobre sua jornada conosco."
        />

        {/* Main Testimonial Slider */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="testimonial-card rounded-lg p-8 md:p-12 text-center"
              >
                <Quote className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                
                <h2 className="text-2xl md:text-3xl text-white mb-6 font-semibold" style={{fontFamily: "'Poppins', sans-serif"}}>
                  "{testimonials[currentTestimonial].highlight}"
                </h2>

                <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-screen-md mx-auto">
                  {testimonials[currentTestimonial].text}
                </p>

                <div className="flex items-center justify-center mb-6">
                  <img 
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1693106038722-f9e4801b2194" loading="lazy" />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-base text-gray-400">
                      {testimonials[currentTestimonial].tattoo}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center space-x-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={previousTestimonial}
              className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-yellow-500' : 'bg-gray-600'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">500+</div>
            <p className="text-base text-gray-400">Histórias Contadas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">5.0</div>
            <p className="text-base text-gray-400">Avaliação Média</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">100%</div>
            <p className="text-base text-gray-400">Confiança e Satisfação</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-12 glass-effect rounded-lg max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Seja o próximo cliente satisfeito
          </h2>
          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-screen-md mx-auto">
            Junte-se às centenas de clientes que já transformaram sua pele em arte. 
            Agende sua consulta e viva essa experiência única.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-base"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Agendar minha sessão via WhatsApp">
              Agendar Minha Sessão <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </PageLayout>
    </>
  );
};

export default Testimonials;