import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const TITLE_FONT = "'Tai Heritage Pro', serif";
const BODY_FONT = "'Montserrat', sans-serif";
const CREME = '#F0EDE4';

/**
 * Cabecalho padrao das secoes: rotulo pequeno em caixa alta com tracinho,
 * titulo em serifada e descricao opcional.
 *
 * align: 'center' (tracinho dos dois lados) | 'left' (tracinho so a esquerda)
 * tone:  'light' (secao clara) | 'dark' (secao escura)
 */
const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
  className = '',
}) => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const centralizado = align === 'center';
  const escuro = tone === 'dark';

  const corRotulo = escuro ? CREME : 'hsl(var(--primary))';
  const corTitulo = escuro ? CREME : 'hsl(var(--foreground))';
  const corDescricao = escuro ? 'rgba(240,237,228,0.7)' : 'hsl(var(--muted-foreground))';

  const traco = (
    <span
      className="h-px w-[28px] shrink-0"
      style={{ backgroundColor: corRotulo, opacity: 0.85 }}
    />
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`${centralizado ? 'mx-auto max-w-[680px] text-center' : ''} ${className}`}
    >
      <div
        className={`mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase ${
          centralizado ? 'justify-center' : ''
        }`}
        style={{ fontFamily: BODY_FONT, fontWeight: 500, letterSpacing: '0.35em', color: corRotulo }}
      >
        {traco}
        <span>{eyebrow}</span>
        {centralizado && traco}
      </div>

      <h2
        className={`text-[clamp(2rem,4vw,3.25rem)] leading-[1.15] ${centralizado ? '' : 'max-w-[20ch]'}`}
        style={{ fontFamily: TITLE_FONT, fontWeight: 400, color: corTitulo }}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-[15.5px] leading-[1.9] ${centralizado ? '' : 'max-w-[560px]'}`}
          style={{ fontFamily: BODY_FONT, fontWeight: 300, color: corDescricao }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
