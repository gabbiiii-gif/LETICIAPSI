import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/lib/blogData';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Letícia Pais | Psicologia e TCC</title>
        <meta name="description" content="Artigos e reflexões sobre psicologia, Terapia Cognitivo-Comportamental e bem-estar." />
      </Helmet>
      <div className="bg-background text-foreground">
        <Header />
        <main className="pt-24 md:pt-32">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
                Blog
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Um espaço para compartilhar conhecimentos, reflexões e ferramentas práticas sobre saúde mental, bem-estar e o universo da Terapia Cognitivo-Comportamental.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group border border-border"
                >
                  <div className="overflow-hidden">
                    <Link to={`/blog/${post.id}`}>
                      <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                    </Link>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                    <h2 className="text-xl font-bold text-foreground mb-3 flex-grow">
                      <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">{post.title}</Link>
                    </h2>
                    <p className="text-muted-foreground mb-4 line-clamp-3 text-justify">{post.summary}</p>
                    <Link to={`/blog/${post.id}`} className="mt-auto font-semibold text-primary hover:underline self-start">
                      Leia mais <ArrowRight className="inline w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;