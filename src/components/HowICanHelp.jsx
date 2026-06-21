import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import FlowingMenu from '@/components/ui/FlowingMenu';

const items = [
  {
    link: '#contact',
    text: 'Regulação emocional',
    image: 'https://picsum.photos/600/400?random=11',
  },
  {
    link: '#contact',
    text: 'Neurodivergência feminina',
    image: 'https://picsum.photos/600/400?random=12',
  },
  {
    link: '#contact',
    text: 'Autoestima e autoconhecimento',
    image: 'https://picsum.photos/600/400?random=13',
  },
  {
    link: '#contact',
    text: 'Relacionamentos saudáveis',
    image: 'https://picsum.photos/600/400?random=14',
  },
  {
    link: '#contact',
    text: 'Ansiedade e sobrecarga',
    image: 'https://picsum.photos/600/400?random=15',
  },
];

const HowICanHelp = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="how-i-can-help" ref={ref} className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Como posso te ajudar
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="h-[520px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg max-w-6xl mx-auto">
          <FlowingMenu
            items={items}
            speed={18}
            bgColor="#2b363b"
            textColor="#F0EDE4"
            marqueeBgColor="#F0EDE4"
            marqueeTextColor="#1b2127"
            borderColor="rgba(240,237,228,0.25)"
          />
        </div>
      </div>
    </section>
  );
};

export default HowICanHelp;
