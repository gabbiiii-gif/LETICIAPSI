import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from '@/hooks/useInView';
import { MapPin, Globe, Users, User } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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
      <div
        className="bg-card h-full rounded-2xl p-8 flex flex-col items-center text-center shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 border border-border/80"
        style={{ boxShadow: '4px 4px 12px rgba(0,0,0,0.05), -4px -4px 12px rgba(255,255,255,0.7)' }}
      >
        <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-6 ring-4 ring-primary/20 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground text-base mb-4 flex-grow">{description}</p>
        <p className="text-sm font-semibold text-primary mt-auto">{details}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const wrapRef = useRef(null);
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const cardRefs = useRef([]);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const svg = svgRef.current;
    const path = pathRef.current;
    if (!wrap || !svg || !path) return undefined;

    const ctx = gsap.context(() => {
      // Monta a curva a partir da posição real dos cards, então ela
      // se refaz sozinha em qualquer largura de tela.
      const buildPath = () => {
        const wrapRect = wrap.getBoundingClientRect();
        const cards = cardRefs.current.filter(Boolean);
        if (cards.length < 2) return false;

        const points = cards.map((el) => {
          const r = el.getBoundingClientRect();
          return {
            x: r.left - wrapRect.left + r.width / 2,
            y: r.top - wrapRect.top + r.height / 2,
          };
        });

        svg.setAttribute('width', wrapRect.width);
        svg.setAttribute('height', wrapRect.height);
        svg.setAttribute('viewBox', `0 0 ${wrapRect.width} ${wrapRect.height}`);

        // Bézier com tangente vertical nas pontas: dá o "S" do rascunho
        let d = `M ${points[0].x} ${points[0].y}`;
        for (let i = 1; i < points.length; i += 1) {
          const a = points[i - 1];
          const b = points[i];
          const bend = (b.y - a.y) * 0.72;
          d += ` C ${a.x} ${a.y + bend}, ${b.x} ${b.y - bend}, ${b.x} ${b.y}`;
        }
        path.setAttribute('d', d);
        return true;
      };

      if (!buildPath()) return;

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const draw = () => {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: reduced ? 0 : len });
        if (reduced) return;
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: wrap,
            start: 'top 80%',
            end: 'bottom 65%',
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
      };

      draw();

      // Recalcula quando a seção muda de tamanho (resize, fontes, rotação)
      const ro = new ResizeObserver(() => {
        if (buildPath()) {
          const len = path.getTotalLength();
          gsap.set(path, { strokeDasharray: len });
          ScrollTrigger.refresh();
        }
      });
      ro.observe(wrap);

      return () => ro.disconnect();
    }, wrapRef);

    return () => ctx.revert();
  }, []);

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

        <div ref={wrapRef} className="relative mx-auto max-w-4xl">
          {/* Traço que liga os cards, desenhado conforme a rolagem */}
          <svg
            ref={svgRef}
            className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            aria-hidden="true"
            focusable="false"
          >
            <path
              ref={pathRef}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeOpacity="0.9"
            />
          </svg>

          <div className="relative z-10 flex flex-col gap-10 md:gap-14">
            {services.map((service, index) => (
              <div
                key={service.title}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`md:w-[52%] ${index % 2 === 1 ? 'md:ml-auto' : 'md:mr-auto'}`}
              >
                <ServiceCard {...service} delay={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
