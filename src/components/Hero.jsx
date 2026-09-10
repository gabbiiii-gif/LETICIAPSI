import React from 'react';
import { motion } from 'framer-motion';

const CREAM = '#F0EDE4';
const TITLE_FONT = "'Tai Heritage Pro', serif";
const BODY_FONT = "'Montserrat', sans-serif";
const WHATSAPP = 'https://wa.me/5593991710671';

const rise = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 1, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="hero" className="relative flex h-screen min-h-[620px] w-full items-end overflow-hidden">
      {/* Foto de fundo, nítida */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/hero.jpg)', backgroundPosition: 'center 30%' }}
      />

      {/* Gradiente de baixo para cima, para leitura do texto */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(18,22,26,0.92) 0%, rgba(18,22,26,0.55) 45%, rgba(18,22,26,0.20) 100%)',
        }}
      />

      {/* Scrim lateral: escurece a esquerda, onde fica o texto */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(18,22,26,0.70) 0%, rgba(18,22,26,0.35) 38%, rgba(18,22,26,0) 68%)',
        }}
      />

      {/* Conteúdo ancorado embaixo à esquerda */}
      <div className="relative z-[2] w-full max-w-[880px] px-6 pb-14 sm:px-10 md:px-16 md:pb-[72px]">
        <motion.div
          {...rise(0.2)}
          className="mb-5 flex items-center gap-3 text-[10.5px] uppercase"
          style={{
            fontFamily: BODY_FONT,
            fontWeight: 500,
            letterSpacing: '0.35em',
            color: CREAM,
            textShadow: '0 1px 8px rgba(0,0,0,0.5)',
          }}
        >
          <span className="h-px w-[30px] shrink-0 bg-primary" />
          Psicóloga · CRP 10/11502
        </motion.div>

        <motion.h1
          {...rise(0.35)}
          className="max-w-[15ch] text-[clamp(2.25rem,5.5vw,4.5rem)] font-normal leading-[1.08]"
          style={{
            fontFamily: TITLE_FONT,
            fontWeight: 400,
            color: CREAM,
            letterSpacing: '-0.01em',
            textShadow: '0 2px 20px rgba(0,0,0,0.4)',
          }}
        >
          Compreender a si mesma muda a forma como você vive.
        </motion.h1>

        <motion.p
          {...rise(0.5)}
          className="mt-6 max-w-[540px] text-[15px] leading-[1.85] sm:text-base"
          style={{
            fontFamily: BODY_FONT,
            fontWeight: 400,
            color: 'rgba(240,237,228,0.88)',
            textShadow: '0 1px 12px rgba(0,0,0,0.4)',
          }}
        >
          Um espaço seguro para compreender seu funcionamento e construir uma
          relação mais gentil consigo mesma.
        </motion.p>

        <motion.div {...rise(0.65)} className="mt-9 flex flex-wrap gap-3.5">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-[12px] uppercase text-primary-foreground transition-colors hover:bg-primary/85"
            style={{ fontFamily: BODY_FONT, fontWeight: 500, letterSpacing: '0.15em' }}
          >
            Agendar minha 1ª sessão
          </a>
          <button
            onClick={() => scrollTo('about')}
            className="inline-flex items-center gap-2 rounded-sm border border-white/40 bg-transparent px-8 py-4 text-[12px] uppercase transition-colors hover:border-white/80 hover:bg-white/5"
            style={{ fontFamily: BODY_FONT, fontWeight: 400, letterSpacing: '0.15em', color: CREAM }}
          >
            Conhecer Letícia
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
