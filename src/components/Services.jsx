import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { MapPin, Globe, Users, User } from 'lucide-react';

const services = [
  {
    icon: User,
    title: 'Terapia Individual',
    description: 'Atendimento personalizado focado em suas necessidades específicas.',
    details: 'Presencial ou Online',
  },
  {
    icon: Users,
    title: 'Terapia em Grupo',
    description: 'Sessões em grupo para compartilhar experiências e crescer junto.',
    details: 'Consulte disponibilidade',
  },
  {
    icon: MapPin,
    title: 'Atendimento Presencial',
    description: 'Djalma Dutra, Centro (próximo à Nissei), Altamira - PA.',
    details: 'Ambiente seguro e acolhedor',
  },
  {
    icon: Globe,
    title: 'Atendimento Online',
    description: 'Sessões por videochamada com total privacidade e segurança.',
    details: 'Para Brasil e exterior',
  },
];

const ServiceCard = ({ icon: Icon, title, description, details, delay }) => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: delay * 0.15 }}
      className="group"
    >
      <div className="bg-card h-full rounded-2xl p-8 flex flex-col items-center text-center shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 border border-border/80"
          style={{ boxShadow: '4px 4px 12px rgba(0,0,0,0.05), -4px -4px 12px rgba(255,255,255,0.7)' }}>
        <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-6 ring-4 ring-primary/20 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground text-base mb-4 flex-grow">
          {description}
        </p>
        <p className="text-sm font-semibold text-primary mt-auto">
          {details}
        </p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Modalidades de Atendimento
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
           <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Soluções personalizadas para o seu bem-estar, onde quer que você esteja.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;