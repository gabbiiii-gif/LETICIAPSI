import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '@/components/SectionHeading';

const BODY_FONT = "'Montserrat', sans-serif";

const paragrafos = [
  <>
    Sou Letícia Pais, psicóloga clínica de mulheres, CRP 10/11502. Minha prática
    é voltada para mulheres, especialmente mulheres neurodivergentes, que muitas
    vezes chegam à terapia depois de anos tentando compreender a si mesmas,
    corresponder às expectativas e dar conta de tudo.
  </>,
  <>
    Ao longo da minha trajetória, fui percebendo que muitas das dificuldades que
    aparecem no consultório não estão isoladas. Elas atravessam a forma como uma
    mulher se relaciona consigo mesma, com o próprio corpo, com seus vínculos,
    com o trabalho, com a família e com as expectativas que aprendeu a carregar.
  </>,
  <>
    Por isso, meu trabalho envolve temas como regulação emocional, autocrítica,
    perfeccionismo, autoestima, sobrecarga, dificuldades nas relações, limites,
    ansiedade, masking, dificuldades executivas e os impactos de viver em uma
    sociedade que nem sempre compreende diferentes formas de funcionamento.
  </>,
  <>
    Minha formação e minha prática clínica são fundamentadas na{' '}
    <strong className="font-semibold text-primary">
      Terapia Cognitivo-Comportamental
    </strong>{' '}
    e nas{' '}
    <strong className="font-semibold text-primary">Terapias Contextuais</strong>,
    com recursos de abordagens como ACT e DBT, sempre considerando as
    necessidades e particularidades de cada pessoa.
  </>,
  <>
    Também acredito que fazer psicologia clínica é estar em constante construção.
    Por isso, busco uma atuação pautada pela{' '}
    <strong className="font-semibold text-primary">
      Prática Baseada em Evidências em Psicologia
    </strong>
    , integrando o conhecimento científico disponível, minha formação e
    experiência clínica e, principalmente, as características, necessidades,
    valores e preferências de cada paciente.
  </>,
  <>
    Na prática, isso significa que não parto de protocolos prontos para encaixar
    pessoas. A avaliação, a formulação do caso e as escolhas terapêuticas são
    construídas de maneira individualizada, acompanhando o que faz sentido para
    aquela mulher e monitorando, ao longo do processo, o que de fato está
    contribuindo para sua mudança.
  </>,
  <>
    Também sou uma mulher neurodivergente. Essa experiência faz parte da minha
    história e amplia meu olhar sobre determinadas vivências, mas meu trabalho
    clínico não se apoia apenas na experiência pessoal. Ele é sustentado pela
    formação profissional, pelo estudo contínuo, pela ciência e pela construção
    cuidadosa de cada processo terapêutico.
  </>,
  <>
    Acredito em uma psicologia que acolhe sem infantilizar, que considera a
    complexidade de cada história e que oferece ferramentas para que a pessoa
    possa compreender melhor seu funcionamento, desenvolver recursos e construir
    uma relação mais consciente consigo mesma e com a própria vida.
  </>,
  <>
    Meu trabalho é, sobretudo, acompanhar mulheres em processos de compreensão,
    mudança e construção de uma vida que faça sentido para quem elas são — e não
    apenas para aquilo que aprenderam que deveriam ser.
  </>,
];

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const Paragrafo = ({ children, i }) => (
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 + i * 0.04 }}
      className="text-[15px] leading-[1.9] text-muted-foreground sm:text-base"
      style={{ fontFamily: BODY_FONT, fontWeight: 300 }}
    >
      {children}
    </motion.p>
  );

  const Foto = ({ src, alt, ratio, posicao, delay, preenche = false }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay }}
      className={`mx-auto w-full max-w-[420px] lg:max-w-none ${preenche ? 'lg:h-full' : 'lg:self-start'}`}
    >
      <div className={`${ratio} overflow-hidden rounded-2xl shadow-2xl ${preenche ? 'lg:aspect-auto lg:h-full' : ''}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
          style={{ objectPosition: posicao }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="about" ref={ref} className="relative overflow-hidden px-6 py-24 sm:px-10 md:px-16 md:py-32">
      {/* Duas fotos alternando os lados: retrato em cima a esquerda,
          consultorio embaixo a direita, com o texto correndo entre elas. */}
      <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-2 lg:gap-16">
        <Foto
          src="/sobre-mim.webp"
          alt="Psicóloga Letícia Pais em seu consultório"
          ratio="aspect-[4/5]"
          posicao="center 22%"
          delay={0.1}
          preenche
        />

        <div>
          <SectionHeading
            align="left"
            eyebrow="Sobre mim"
            title="Acompanhar mulheres em processos de compreensão e mudança."
          />
          <div className="mt-8 space-y-5">
            {paragrafos.slice(0, 4).map((texto, i) => (
              <Paragrafo key={i} i={i}>{texto}</Paragrafo>
            ))}
          </div>
        </div>

        <div className="space-y-5 lg:pt-2">
          {paragrafos.slice(4).map((texto, i) => (
            <Paragrafo key={i} i={i + 4}>{texto}</Paragrafo>
          ))}
        </div>

        <Foto
          src="/sobre-mim-2.webp"
          alt="Poltrona do consultório de Letícia Pais, vista de quem atende"
          ratio="aspect-[3/4]"
          posicao="center"
          delay={0.2}
        />
      </div>
    </section>
  );
};

export default About;
