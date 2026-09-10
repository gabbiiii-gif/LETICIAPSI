import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const TITLE_FONT = "'Tai Heritage Pro', serif";
const BODY_FONT = "'Montserrat', sans-serif";

const steps = [
  {
    n: '01',
    title: 'Primeiro contato',
    desc: 'Você me chama no WhatsApp. Conversamos brevemente sobre o que te trouxe até aqui, sem compromisso e sem pressão.',
  },
  {
    n: '02',
    title: 'Sessão inicial',
    desc: 'Nos primeiros encontros, meu objetivo é entender quem você é, como você funciona e o que tem gerado sofrimento.',
  },
  {
    n: '03',
    title: 'Plano terapêutico',
    desc: 'Juntas, definimos objetivos e ritmo. Além das conversas, usamos ferramentas práticas da Terapia Cognitivo-Comportamental.',
  },
  {
    n: '04',
    title: 'Novos caminhos',
    desc: 'Ao longo do processo, você desenvolve outras formas de compreender e lidar com o que sente, com mais equilíbrio no dia a dia.',
  },
];

const Step = ({ n, title, desc, delay }) => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-card px-7 py-10 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(43,54,59,0.08)] sm:px-8"
    >
      <span
        className="mb-5 block text-[48px] leading-none text-primary"
        style={{ fontFamily: TITLE_FONT, fontWeight: 400 }}
      >
        {n}
      </span>
      <div
        className="mb-3 text-[20px] text-foreground"
        style={{ fontFamily: TITLE_FONT, fontWeight: 700 }}
      >
        {title}
      </div>
      <p
        className="text-[13.5px] leading-[1.85] text-muted-foreground"
        style={{ fontFamily: BODY_FONT, fontWeight: 300 }}
      >
        {desc}
      </p>
      <span className="absolute bottom-0 left-7 right-7 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 sm:left-8 sm:right-8" />
    </motion.div>
  );
};

const HowItWorks = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="bg-background px-6 py-20 sm:px-10 md:px-16 md:py-[110px]"
    >
      <div className="mx-auto max-w-[1120px]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-16 max-w-[640px] text-center"
        >
          <div
            className="mb-4 text-[10px] uppercase text-primary"
            style={{ fontFamily: BODY_FONT, fontWeight: 500, letterSpacing: '0.35em' }}
          >
            Como funciona
          </div>
          <h2
            className="mb-5 text-[clamp(2rem,4vw,3.25rem)] leading-[1.15] text-foreground"
            style={{ fontFamily: TITLE_FONT, fontWeight: 400 }}
          >
            Um processo personalizado, construído com você
          </h2>
          <p
            className="text-[15.5px] leading-[1.9] text-muted-foreground"
            style={{ fontFamily: BODY_FONT, fontWeight: 300 }}
          >
            Não existe roteiro pronto. Cada acompanhamento é único, adaptado ao
            seu momento e aos seus objetivos.
          </p>
        </motion.div>

        <div className="grid gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Step key={step.n} {...step} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
