import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LightRays from '@/components/ui/LightRays';

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

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="hero" ref={heroRef} className="h-screen w-full">
      <motion.div
        style={{ scale, opacity }}
        className="h-full w-full sticky top-0 overflow-hidden"
      >
        {/* Dark backdrop so the light rays read clearly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b2127] via-[#222a31] to-[#2c353d]" />

        {/* Light rays */}
        <div className="absolute inset-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#fffafa"
            raysSpeed={1}
            lightSpread={1}
            rayLength={2}
            pulsating={false}
            fadeDistance={1}
            saturation={1}
            followMouse
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: 'easeOut' }}
            className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance"
            style={{ fontFamily: TITLE_FONT, color: PALETTE, textShadow: '0 4px 24px rgba(0,0,0,0.45)' }}
          >
            Compreender a si mesma muda a forma como você vive.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.9, ease: 'easeOut' }}
            className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-balance"
            style={{ fontFamily: TITLE_FONT, color: PALETTE, opacity: 0.92 }}
          >
            Psicoterapia para mulheres neurodivergentes que desejam desenvolver
            regulação emocional, fortalecer a autoestima e construir
            relacionamentos mais saudáveis.
          </motion.p>

          <motion.button
            onClick={scrollToContact}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 rounded-full px-10 py-4 text-base sm:text-lg font-bold tracking-wide text-[#1b2127] shadow-[0_8px_40px_rgba(240,237,228,0.45)] transition-shadow hover:shadow-[0_10px_60px_rgba(240,237,228,0.7)]"
            style={{ backgroundColor: PALETTE, fontFamily: TITLE_FONT }}
          >
            Agende sua sessão
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
