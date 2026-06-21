import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'O que é Terapia Cognitivo-Comportamental (TCC)?',
      answer: 'A TCC é uma abordagem terapêutica baseada em evidências científicas que trabalha a conexão entre pensamentos, emoções e comportamentos. É uma terapia prática e focada em soluções, ajudando você a desenvolver estratégias eficazes para lidar com desafios emocionais e comportamentais.'
    },
    {
      question: 'Como funciona o atendimento online?',
      answer: 'O atendimento online é realizado por videochamada em plataforma segura e confidencial. Você pode participar de qualquer lugar do Brasil ou do exterior, precisando apenas de uma conexão estável de internet e um ambiente privado. A eficácia é a mesma do atendimento presencial.'
    },
    {
      question: 'Quanto tempo dura cada sessão?',
      answer: 'Cada sessão tem duração de aproximadamente 50 minutes. A frequência é geralmente semanal, mas pode ser ajustada conforme suas necessidades e evolução no processo terapêutico.'
    },
    {
      question: 'Como agendar uma consulta?',
      answer: 'Você pode agendar sua consulta através do WhatsApp (93) 99171-0671, Instagram @psi.leticiapais ou pelo formulário de contato nesta página. Responderei o mais breve possível para confirmarmos data e horário.'
    },
    {
      question: 'A terapia é confidencial?',
      answer: 'Sim, absolutamente! O sigilo profissional é garantido pelo Código de Ética da Psicologia. Tudo o que é compartilhado nas sessões permanece confidencial, criando um espaço seguro para você se expressar livremente.'
    },
    {
      question: 'Quanto tempo dura o processo terapêutico?',
      answer: 'A duração varia de acordo com cada pessoa e seus objetivos. A TCC é geralmente uma terapia de curto a médio prazo, mas o tempo necessário depende da complexidade das questões trabalhadas e do seu ritmo de evolução.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={ref} className="py-20 px-4 bg-secondary/50 dark:bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border/70 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 flex items-center justify-between text-left group"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-foreground pr-8 group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;