import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/common/SectionHeader';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: "Prêmios e Reconhecimentos",
      description: "Projetos autorais reconhecidos pelo detalhamento e impacto visual."
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: "Clientes Satisfeitos",
      description: "Histórias marcadas na pele com profissionalismo e dedicação."
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-400" />,
      title: "Experiência em Realismo",
      description: "Especialização em realismo preto e cinza, com peças de grande destaque."
    },
    {
      icon: <Heart className="w-8 h-8 text-yellow-400" />,
      title: "Paixão pela Arte",
      description: "Cada tatuagem é tratada como uma obra de arte única e pessoal."
    }
  ];

  const timeline = [
    {
      year: "Início",
      title: "Descoberta da Arte",
      description: "Primeiros passos no universo da tatuagem, desenvolvendo técnicas autorais."
    },
    {
      year: "Especialização",
      title: "Realismo Preto e Cinza",
      description: "Foco total no desenvolvimento da técnica de realismo preto e cinza para dar vida às ideias."
    },
    {
      year: "Reconhecimento",
      title: "Projetos de Impacto",
      description: "Reconhecimento por projetos detalhados e peças de grande impacto visual."
    },
    {
      year: "Atendimento",
      title: "Bonfinópolis de Minas e Brasília‑DF",
      description: "Atendimento profissional e personalizado nas duas cidades."
    },
    {
      year: "Atualidade",
      title: "Referência em Realismo",
      description: "Consolidação como referência em realismo preto e cinza, sempre em busca de evolução."
    }
  ];

  const whatsappUrl = "https://wa.me/5538997514857";

  return (
    <>
      <Helmet>
        <title>Sobre Jean Art Tattoo Design | Tatuador em Bonfinópolis de Minas – MG e Brasília – DF</title>
        <meta name="description" content="Conheça Jean Art Tattoo Design, tatuador especializado em realismo preto e cinza, atuando em Bonfinópolis de Minas – MG e Brasília – DF. Atendimento profissional e projetos autorais de grande impacto visual." />
        <meta property="og:title" content="Sobre Jean Art Tattoo Design" />
        <meta property="og:description" content="A trajetória e experiência de Jean Art Tattoo Design, referência em realismo preto e cinza em Bonfinópolis de Minas – MG e Brasília – DF." />
        <meta property="og:image" content="/assets/jean_profile.jpg" />
        <meta name="keywords" content="Jean Art Tattoo Design, tatuador realismo MG, tatuador realismo DF, realismo preto e cinza, Bonfinópolis de Minas, Brasília" />
      </Helmet>

      <PageLayout>
        <SectionHeader 
          title="A Arte Por Trás do Artista"
          subtitle="Uma jornada de paixão, dedicação e histórias contadas através da tinta."
        />

        {/* Main Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Jean Art Tattoo Design
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-300 leading-relaxed max-w-screen-md">
              <p>
                Jean é tatuador especializado em realismo preto e cinza, reconhecido por projetos autorais detalhados e peças de grande impacto visual. Atua nas cidades de Bonfinópolis de Minas e Brasília‑DF, oferecendo um atendimento profissional e personalizado.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl shadow-yellow-500/10">
              <img  alt="Jean Art Tattoo Design, tatuador especialista em realismo, trabalhando em seu estúdio"
                className="w-full h-auto max-h-[500px] object-cover" src="../../public/assets/jean_profile.jpg" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Studio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 ornament">
            O Estúdio: Nosso Espaço Criativo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <img  alt="Interior do estúdio de Jean Art Tattoo Design, um ambiente profissional e acolhedor"
                className="w-full h-80 object-cover rounded-lg shadow-lg" src="../../public/assets/og-image.webp" loading="lazy" />
            <p className="text-base md:text-lg text-gray-300 leading-relaxed text-left max-w-screen-md">
              O estúdio foi projetado para ser mais do que um local de trabalho: é um santuário de criatividade e confiança. Cada detalhe foi pensado para garantir sua segurança, conforto e inspiração, desde a higiene impecável até a atmosfera acolhedora que te deixa à vontade para compartilhar sua histórico.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 ornament">
            Nossa Trajetória
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-[calc(100%_-_2rem)] bg-gray-700"></div>
              {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start md:items-center mb-12 w-full`}>
                <div className="md:w-1/2 w-full px-4 mb-4 md:mb-0">
                   <div className="glass-effect p-6 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400 mb-2">{item.year}</div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-left md:text-${index % 2 === 0 ? 'right' : 'left'}">{item.title}</h3>
                    <p className="text-base text-gray-400 text-left md:text-${index % 2 === 0 ? 'right' : 'left'}">{item.description}</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-yellow-400 rounded-full relative z-10 flex items-center justify-center mx-auto md:mx-0">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
                <div className="md:w-1/2 w-full px-4"></div>
              </motion.div>
            ))}
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
            Vamos criar sua próxima obra de arte?
          </h2>
          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-screen-md mx-auto">
            Sua história merece ser contada com arte e precisão. Entre em contato e vamos começar essa jornada juntos.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-base"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Conversar com Jean Art Tattoo Design via WhatsApp">
              Conversar com Jean Art Tattoo Design <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <div className="mt-6">
            <a
              href="https://www.instagram.com/jean_arttattoodesign/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline text-base"
              aria-label="Instagram de Jean Art Tattoo Design"
            >
              Siga no Instagram: @jean_arttattoodesign
            </a>
          </div>
        </motion.div>
      </PageLayout>
    </>
  );
};

export default About;
