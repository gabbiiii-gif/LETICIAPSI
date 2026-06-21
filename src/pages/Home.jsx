import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import HowICanHelp from '@/components/HowICanHelp';
import Services from '@/components/Services';
import BlogSection from '@/components/BlogSection';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function Home() {
  return (
    <>
      <Helmet>
        <title>Letícia Pais - Psicóloga CRP 10/11502 | Terapia Cognitivo-Comportamental</title>
        <meta name="description" content="Psicóloga Letícia Pais CRP 10/11502. Especialista em Terapia Cognitivo-Comportamental (TCC). Atendimento presencial em Altamira-PA e online para todo Brasil e exterior." />
        <meta name="keywords" content="psicóloga, TCC, terapia cognitivo-comportamental, Letícia Pais, Altamira, atendimento online, psicologia" />
        <meta property="og:title" content="Letícia Pais - Psicóloga CRP 10/11502" />
        <meta property="og:description" content="Especialista em Terapia Cognitivo-Comportamental. Atendimento presencial e online." />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      
      <div className="bg-background">
        <Header />
        <main>
          <Hero />
          <div className="relative z-10 bg-background">
            <About />
            <HowICanHelp />
            <Services />
            <BlogSection />
            <FAQ />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;