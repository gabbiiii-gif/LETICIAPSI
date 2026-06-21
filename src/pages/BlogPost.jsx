import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { blogPosts } from '@/lib/blogData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === parseInt(postId));

  if (!post) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-background text-foreground">
          <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
          <p className="text-muted-foreground mb-8">O artigo que você está procurando não existe.</p>
          <Button onClick={() => navigate('/blog')}>Voltar para o Blog</Button>
      </div>
    );
  }

  const postIndex = blogPosts.findIndex(p => p.id === post.id);
  const nextPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const prevPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  return (
    <>
      <Helmet>
        <title>{post.title} | Blog Letícia Pais</title>
        <meta name="description" content={post.summary} />
      </Helmet>
      <div className="bg-background text-foreground">
        <Header />
        <main className="pt-24 md:pt-32 pb-20">
          <motion.div 
            className="container mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-4xl mx-auto">
              <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline mb-8">
                <ArrowLeft size={18} />
                Voltar para todos os posts
              </Link>

              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight text-balance">{post.title}</h1>
              
              <div className="flex items-center gap-6 text-muted-foreground text-sm mb-8">
                  <div className="flex items-center gap-2">
                      <User size={14} />
                      <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                  </div>
              </div>

              <motion.div 
                className="rounded-xl overflow-hidden shadow-lg mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img src={post.imageUrl} alt={post.title} className="w-full h-auto object-cover max-h-[500px]" />
              </motion.div>

              <div 
                className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="border-t border-border mt-16 pt-8 flex justify-between items-center">
                {prevPost ? (
                  <Link to={`/blog/${prevPost.id}`} className="text-left group">
                    <span className="text-sm text-muted-foreground">Anterior</span>
                    <p className="text-primary group-hover:underline">{prevPost.title}</p>
                  </Link>
                ) : <div />}
                {nextPost ? (
                  <Link to={`/blog/${nextPost.id}`} className="text-right group">
                    <span className="text-sm text-muted-foreground">Próximo</span>
                    <p className="text-primary group-hover:underline">{nextPost.title}</p>
                  </Link>
                ) : <div />}
              </div>
            </div>
          </motion.div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;