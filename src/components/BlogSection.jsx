import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/lib/blogData';

const BlogSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const paginate = (newDirection) => {
    setPage([(page + newDirection + blogPosts.length) % blogPosts.length, newDirection]);
  };

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        paginate(1);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [page, isHovered]);
  
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

  return (
    <section id="blog" ref={ref} className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meu Blog
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Reflexões e artigos sobre psicologia, bem-estar e o universo da Terapia Cognitivo-Comportamental.
          </p>
        </motion.div>

        <motion.div 
          className="relative h-[480px] md:h-[420px] max-w-sm md:max-w-xl lg:max-w-4xl mx-auto"
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
              transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              className="absolute w-full h-full flex justify-center items-center"
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row group border border-border/70 w-full h-full">
                <div className="md:w-1/2 w-full h-1/2 md:h-full overflow-hidden">
                  <Link to={`/blog/${blogPosts[page].id}`}>
                    <img src={blogPosts[page].imageUrl} alt={blogPosts[page].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </Link>
                </div>
                <div className="p-6 md:p-8 flex flex-col md:w-1/2 w-full h-1/2 md:h-full">
                  <p className="text-sm text-muted-foreground mb-2">{blogPosts[page].date}</p>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 flex-grow group-hover:text-primary transition-colors">
                    <Link to={`/blog/${blogPosts[page].id}`}>{blogPosts[page].title}</Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{blogPosts[page].summary}</p>
                  <Link to={`/blog/${blogPosts[page].id}`} className="mt-auto font-semibold text-primary hover:underline self-start">
                    Leia mais <ArrowRight className="inline w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {blogPosts.map((_, i) => (
              <div
                key={i}
                onClick={() => setPage([i, i > page ? 1 : -1])}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                  page === i ? 'bg-primary scale-125' : 'bg-primary/40 hover:bg-primary/70'
                }`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-20"
        >
          <Button asChild size="lg" className="group">
            <Link to="/blog">
              Ver todos os posts
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;