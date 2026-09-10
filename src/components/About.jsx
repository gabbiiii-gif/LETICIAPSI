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

  return (
    <section id="about" ref={ref} className="relative overflow-hidden px-6 py-24 sm:px-10 md:px-16 md:py-32">
      <div className="mx-auto max-w-[1120px]">
        {/* Texto longo: a foto acompanha a leitura em vez de ficar solta no topo */}
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mx-auto w-full max-w-[420px] lg:sticky lg:top-28 lg:max-w-none"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/sobre-mim.webp"
                alt="Psicóloga Letícia Pais em seu consultório"
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center 22%' }}
              />
            </div>
          </motion.div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Sobre mim"
              title="Acompanhar mulheres em processos de compreensão e mudança."
            />

            <div className="mt-8 space-y-5">
              {paragrafos.map((texto, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.05 }}
                  className="text-[15px] leading-[1.9] text-muted-foreground sm:text-base"
                  style={{ fontFamily: BODY_FONT, fontWeight: 300 }}
                >
                  {texto}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
