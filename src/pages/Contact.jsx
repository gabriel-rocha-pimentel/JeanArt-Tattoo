import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ShieldCheck, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/common/SectionHeader';

const Contact = () => {
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-yellow-400" />,
      title: "WhatsApp",
      info: "+55 (38) 99751‑4857",
      action: () => window.open("https://wa.me/5538997514857?text=Olá! Gostaria de agendar uma consulta para tatuagem.", "_blank")
    },
    {
      icon: <MapPin className="w-6 h-6 text-yellow-400" />,
      title: "Localização",
      info: "Bonfinópolis de Minas – MG e Brasília – DF",
      action: () => toast({
        title: "📍 Localização",
        description: "Atendimento em Bonfinópolis de Minas – MG e Brasília – DF. Consulte disponibilidade via WhatsApp!"
      })
    },
    {
      icon: <Clock className="w-6 h-6 text-yellow-400" />,
      title: "Horário de Funcionamento",
      info: "Atendimento mediante agendamento prévio",
      action: () => toast({
        title: "🕒 Horários",
        description: "Atendimento mediante agendamento prévio via WhatsApp!"
      })
    }
  ];

  const whatsappUrl = "https://wa.me/5538997514857?text=Olá! Gostaria de agendar uma consulta para tatuagem.";
  const instagramUrl = "https://www.instagram.com/jean_arttattoodesign/";

  return (
    <>
      <Helmet>
        <title>Contato - Jean Art Tattoo Design | Agende sua Tatuagem em MG e DF</title>
        <meta name="description" content="Entre em contato com Jean Art Tattoo Design. Atendimento em Bonfinópolis de Minas – MG e Brasília – DF. Agende sua sessão de tatuagem realista em preto e cinza." />
        <meta property="og:title" content="Contato - Jean Art Tattoo Design" />
        <meta property="og:description" content="Agende sua sessão de tatuagem em Bonfinópolis de Minas – MG ou Brasília – DF. Especialista em realismo preto e cinza." />
        <meta name="keywords" content="contato Jean Art Tattoo Design, agendar tatuagem MG, agendar tatuagem DF, WhatsApp tatuador, estúdio tatuagem Bonfinópolis de Minas, tatuador realismo Brasília" />
      </Helmet>

      <PageLayout>
        <SectionHeader 
          title="Vamos Começar?"
          subtitle="Sua jornada para uma tatuagem inesquecível começa aqui. Entre em contato e vamos transformar sua ideia em arte."
        />

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-24 p-8 glass-effect rounded-lg max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Agende sua sessão agora via WhatsApp
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-screen-md mx-auto">
            O primeiro passo para sua nova tatuagem é uma conversa. Vamos discutir 
            sua ideia, estilo, tamanho e todos os detalhes importantes.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-6 text-lg font-semibold"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Conversar no WhatsApp">
              <MessageCircle className="w-6 h-6 mr-3" />
              Conversar no WhatsApp
            </a>
          </Button>
          <div className="flex items-center justify-center mt-6 text-green-400">
            <ShieldCheck className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">Atendimento personalizado | Estúdio seguro e profissional</span>
          </div>
        </motion.div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 max-w-6xl mx-auto">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Informações de Contato</h2>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={item.action}
                  className="flex items-start space-x-4 p-4 glass-effect rounded-lg cursor-pointer hover:border-yellow-500/50 transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-1">{item.title}</h3>
                    <p className="text-base text-gray-400">{item.info}</p>
                  </div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: contactInfo.length * 0.1 }}
                className="flex items-start space-x-4 p-4 glass-effect rounded-lg cursor-pointer hover:border-yellow-500/50 transition-colors"
                onClick={() => window.open(instagramUrl, "_blank")}
              >
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" /></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-1">Instagram</h3>
                  <p className="text-base text-gray-400">@jean_arttattoodesign</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Localização</h2>
            <div className="relative h-96 bg-gray-800 rounded-lg overflow-hidden border border-yellow-500/20">
              <img  alt="Mapa da localização do estúdio Jean Art Tattoo Design em Bonfinópolis de Minas e Brasília"
                className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1601995826089-b95985c117f5" loading="lazy" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                  <h3 className="text-xl font-bold mb-2">Jean Art Tattoo Design</h3>
                  <p className="text-base text-gray-300">Bonfinópolis de Minas – MG e Brasília – DF</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 ornament">
            Perguntas Frequentes
          </h2>
          <div className="max-w-screen-md mx-auto space-y-6">
            {[
              {
                question: "Como funciona o processo de orçamento e agendamento?",
                answer: "Tudo começa com uma conversa no WhatsApp para entendermos sua ideia. Em seguida, desenvolvemos um orçamento personalizado. Com a aprovação, agendamos a sua sessão."
              },
              {
                question: "Quanto tempo dura uma sessão de tatuagem?",
                answer: "A duração varia conforme o tamanho, os detalhes e a complexidade do desenho. Projetos pequenos podem levar algumas horas, enquanto peças maiores podem exigir múltiplas sessões."
              },
              {
                question: "Quais são as formas de pagamento?",
                answer: "Aceitamos diversas formas de pagamento, incluindo PIX, transferência bancária e cartões de crédito. Tudo para facilitar sua experiência."
              },
              {
                question: "É necessário um sinal para agendar?",
                answer: "Sim, para garantir a reserva da sua data e o tempo dedicado à criação do seu desenho exclusivo, solicitamos um sinal no momento do agendamento. O valor é abatido do total da tatuagem."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-lg"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-base text-gray-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </PageLayout>
    </>
  );
};

export default Contact;