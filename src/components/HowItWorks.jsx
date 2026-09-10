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
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group flex gap-5 border-b border-border py-7 last:border-b-0 sm:gap-7"
    >
      <span
        className="shrink-0 text-[38px] leading-none text-primary transition-colors duration-300 group-hover:text-foreground sm:text-[46px]"
        style={{ fontFamily: TITLE_FONT, fontWeight: 400 }}
      >
        {n}
      </span>
      <div className="min-w-0">
        <div
          className="mb-2 text-[19px] text-foreground sm:text-[21px]"
          style={{ fontFamily: TITLE_FONT, fontWeight: 700 }}
        >
          {title}
        </div>
        <p
          className="text-[13.5px] leading-[1.85] text-muted-foreground sm:text-sm"
          style={{ fontFamily: BODY_FONT, fontWeight: 300 }}
        >
          {desc}
        </p>
      </div>
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
          className="mx-auto mb-14 max-w-[640px] text-center md:mb-20"
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

        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-[420px] md:sticky md:top-28 md:max-w-none"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl md:aspect-[3/4]">
              <img
                src="/como-funciona.jpeg"
                alt="Letícia Pais durante um atendimento"
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center 28%' }}
              />
            </div>
          </motion.div>

          <div>
            {steps.map((step, i) => (
              <Step key={step.n} {...step} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
