import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const slides = [
  {
    image: "https://horizons-cdn.hostinger.com/977e6718-02dc-4011-a467-14a30122a99c/e8b683fdc50c5ad939fd2125b286c016.jpg",
    phrase: (
      <>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center text-balance" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Transformando pensamentos em novos caminhos.
        </h1>
        <p className="text-sm text-center text-balance mt-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Um espaço seguro para sua jornada de autoconhecimento.
        </p>
      </>
    )
  },
  {
    image: "https://horizons-cdn.hostinger.com/977e6718-02dc-4011-a467-14a30122a99c/d270094fc425343b300cd1013d32f6ea.jpg",
    phrase: (
      <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold italic text-center text-balance max-w-4xl">
        Sua história importa. Vamos escrevê-la juntos.
      </h1>
    )
  },
  {
    image: "https://horizons-cdn.hostinger.com/977e6718-02dc-4011-a467-14a30122a99c/44a5d23cd39a31af1b6c545bfc2cfdaa.jpg",
    phrase: (
      <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold italic text-center text-balance max-w-4xl">
        Encontre seu espaço. Encontre-se.
      </h1>
    )
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

const Hero = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const heroRef = useRef(null);

  const paginate = (newDirection) => {
    setPage([(page + newDirection + slides.length) % slides.length, newDirection]);
  };

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        paginate(1);
      }, 5000); // Slower interval for a calmer feel
    }
    return () => clearInterval(interval);
  }, [page, isHovered]);

  return (
    <div id="hero" ref={heroRef} className="h-screen w-full">
        <motion.div 
            style={{ scale, opacity }} 
            className="h-full w-full sticky top-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    className="absolute inset-0 h-full w-full"
                >
                    <div
                        className="h-full w-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[page].image})` }}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center text-balance max-w-4xl"
                            style={{ textShadow: '0 3px 12px rgba(0,0,0,0.7)'}}
                        >
                            {slides[page].phrase}
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, i) => (
                <div
                    key={i}
                    onClick={() => setPage([i, i > page ? 1 : -1])}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    page === i ? 'bg-white scale-125 w-8' : 'bg-white/50 hover:bg-white/80'
                    }`}
                />
                ))}
            </div>
        </motion.div>
    </div>
  );
};

export default Hero;