import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Heart, Brain, Users } from 'lucide-react';
const About = () => {
  const [ref, isInView] = useInView({
    threshold: 0.3
  });
  const targetRef = React.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  return <section id="about" ref={ref} className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div ref={targetRef} initial={{
          opacity: 0,
          scale: 0.9
        }} animate={isInView ? {
          opacity: 1,
          scale: 1
        } : {}} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                    <motion.div style={{
            y: imageY
          }} className="absolute -inset-16">
                        <img src="https://horizons-cdn.hostinger.com/977e6718-02dc-4011-a467-14a30122a99c/v9a9xckn_img_0216-ysJYS.jpg" alt="Psicóloga Letícia Pais em seu consultório" className="w-full h-full object-cover" />
                    </motion.div>
                </motion.div>

                <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="space-y-6">
                    <div className="text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Sobre Mim
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full" />
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                    Minha jornada na psicologia começou com um profundo interesse em entender a mente humana e como podemos cultivar bem-estar. Sou uma psicóloga dedicada, com foco na <strong className="text-primary font-semibold">Terapia Cognitivo-Comportamental (TCC)</strong>.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                    Minha missão é criar um espaço seguro onde você se sinta à vontade para explorar seus desafios, descobrir seus pontos fortes e desenvolver estratégias para uma vida mais plena.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                    Estou em constante aprimoramento, buscando as mais recentes evidências científicas e técnicas na área da TCC para oferecer o melhor suporte a você. Meu compromisso é caminhar ao seu lado, respeitando seu ritmo e suas particularidades, enquanto juntos construímos caminhos para o seu crescimento pessoal.
                    </p>
                </motion.div>
            </div>
      </div>
    </section>;
};
export default About;