import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Cor amostrada das bordas do proprio video, para que as faixas do
// object-contain em telas estreitas nao apareçam como emenda.
const FUNDO = '#06080c';

// Trava de seguranca: se o video travar ou nunca disparar "ended",
// a abertura sai sozinha em vez de prender o visitante.
const LIMITE_MS = 6000;

// Desliga a restauracao de scroll do navegador ainda no carregamento do
// bundle, antes do evento load, para que recarregar sempre caia no hero.
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

const prefereMenosMovimento = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const IntroOverlay = () => {
  const [visivel, setVisivel] = useState(() => !prefereMenosMovimento());
  const videoRef = useRef(null);

  const fechar = useCallback(() => {
    setVisivel(false);
    window.scrollTo(0, 0);
  }, []);

  // Trava a rolagem e mantem a pagina no topo enquanto a abertura roda
  useEffect(() => {
    if (!visivel) return undefined;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    const aoTeclar = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') fechar();
    };
    window.addEventListener('keydown', aoTeclar);

    const trava = setTimeout(fechar, LIMITE_MS);

    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener('keydown', aoTeclar);
      clearTimeout(trava);
    };
  }, [visivel, fechar]);

  // Alguns navegadores so tocam apos chamada explicita; se recusarem, segue o site
  useEffect(() => {
    if (!visivel) return;
    const v = videoRef.current;
    if (!v) return;
    const p = v.play();
    if (p && typeof p.catch === 'function') p.catch(fechar);
  }, [visivel, fechar]);

  return (
    <AnimatePresence>
      {visivel && (
        <motion.div
          key="intro"
          role="presentation"
          onClick={fechar}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: FUNDO }}
        >
          <video
            ref={videoRef}
            src="/intro-logo.mp4"
            muted
            autoPlay
            playsInline
            preload="auto"
            onEnded={fechar}
            onError={fechar}
            className="h-full w-full object-contain"
          />

          <button
            type="button"
            onClick={fechar}
            className="absolute bottom-7 right-6 rounded-sm border border-white/25 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-white/55 transition-colors hover:border-white/60 hover:text-white sm:bottom-10 sm:right-10"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Pular
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroOverlay;
