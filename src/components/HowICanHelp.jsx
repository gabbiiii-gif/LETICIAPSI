import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const CREAM = '#F0EDE4';
const TITLE_FONT = "'Tai Heritage Pro', serif";
const BODY_FONT = "'Montserrat', sans-serif";
const WHATSAPP = 'https://wa.me/5593991710671';

// Foto da coluna da direita. Com null, a lista ocupa a largura toda.
const PHOTO = '/como-posso-ajudar.webp';

const demandas = [
  'Ansiedade e regulação emocional',
  'TDAH',
  'TEA — Transtorno do Espectro Autista',
  'AH/SD — Altas Habilidades e Superdotação',
  'Relacionamentos',
  'Habilidades sociais',
  'Autoconhecimento e autoestima',
];

const HowICanHelp = () => {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: 22 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      id="how-i-can-help"
      ref={ref}
      className="relative overflow-hidden px-6 py-20 sm:px-10 md:px-16 md:py-[110px]"
      style={{ backgroundColor: '#2b363b' }}
    >
      {/* Brilho suave no canto superior direito */}
      <div
        className="pointer-events-none absolute -right-[15%] -top-[30%] h-[500px] w-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(155,168,182,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-[1120px]">
        <SectionHeading
          align="left"
          tone="dark"
          eyebrow="Como posso te ajudar"
          title="Nem sempre o que você sente cabe em uma palavra."
        />

        <div
          className={`mt-14 grid items-start gap-12 ${PHOTO ? 'md:grid-cols-2 md:gap-20' : ''}`}
        >
          <motion.div {...reveal(0.12)}>
            <p
              className="max-w-[760px] text-[15px] leading-[1.9] sm:text-base"
              style={{ fontFamily: BODY_FONT, fontWeight: 300, color: 'rgba(240,237,228,0.65)' }}
            >
              Às vezes o sofrimento aparece como um cansaço que não passa,
              dificuldade de se concentrar, a sensação de estar sempre no limite
              ou de não se encaixar. O acompanhamento psicológico pode ajudar
              quem enfrenta:
            </p>

            {/* Sem foto, a lista ocupa duas colunas para não deixar vazio à direita */}
            <div className={`mt-6 grid gap-x-14 ${PHOTO ? '' : 'md:grid-cols-2'}`}>
              {demandas.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-white/[0.07] py-4 text-[14px] transition-colors hover:text-white"
                  style={{ fontFamily: BODY_FONT, fontWeight: 300, color: 'rgba(240,237,228,0.75)' }}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary opacity-80" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-[12px] uppercase text-primary-foreground transition-colors hover:bg-primary/85"
              style={{ fontFamily: BODY_FONT, fontWeight: 500, letterSpacing: '0.15em' }}
            >
              Quero começar →
            </a>
          </motion.div>

          {PHOTO && (
            <motion.div
              {...reveal(0.24)}
              className="aspect-[3/4] overflow-hidden rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              <img
                src={PHOTO}
                alt="Livro aberto com uma caneta sobre o assento de uma poltrona"
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ filter: 'brightness(0.95)' }}
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowICanHelp;
