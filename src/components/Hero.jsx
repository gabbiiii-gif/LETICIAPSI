import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PALETTE = '#F0EDE4';
const TITLE_FONT = "'Tai Heritage Pro', serif";

const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);

  // Saída suave do texto ao rolar
  const textY = useTransform(scrollYProgress, [0, 0.6], [0, -40]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="hero" ref={heroRef} className="h-screen w-full">
      <motion.div
        style={{ scale, opacity }}
        className="h-full w-full sticky top-0 overflow-hidden"
      >
        {/* Imagem de fundo, levemente desfocada */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 blur-[1.5px]"
          style={{ backgroundImage: 'url(/hero.jpg)' }}
        />

        {/* Overlay para legibilidade do texto */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Content */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight text-balance"
            style={{ fontFamily: TITLE_FONT, fontWeight: 400, color: PALETTE, textShadow: '0 4px 24px rgba(0,0,0,0.55)' }}
          >
            Compreender a si mesma muda a forma como você vive.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl font-normal leading-relaxed text-balance"
            style={{ fontFamily: TITLE_FONT, fontWeight: 400, color: PALETTE, opacity: 0.92, textShadow: '0 2px 16px rgba(0,0,0,0.5)' }}
          >
            Um espaço seguro para compreender seu funcionamento e construir uma
            relação mais gentil consigo mesma.
          </motion.p>

          <motion.button
            onClick={scrollToContact}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 rounded-full border border-white/40 bg-white/10 px-9 py-3.5 text-base sm:text-lg font-normal tracking-wide backdrop-blur-sm transition-colors hover:bg-white/20"
            style={{ color: PALETTE, fontFamily: TITLE_FONT, fontWeight: 400 }}
          >
            Agende sua sessão
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
