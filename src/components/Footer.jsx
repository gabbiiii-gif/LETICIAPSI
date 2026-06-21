import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const [path, hash] = href.split('#');
    if (location.pathname !== '/' && hash) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      navigate(path);
    }
  };
  const navItems = [{
    label: 'Início',
    href: '/#hero'
  }, {
    label: 'Sobre',
    href: '/#about'
  }, {
    label: 'Atendimento',
    href: '/#services'
  }, {
    label: 'Blog',
    href: '/blog'
  }, {
    label: 'Contato',
    href: '/#contact'
  }];
  return <footer className="bg-secondary text-secondary-foreground py-12 md:py-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-semibold text-lg">LETÍCIA PAIS</span>
            <p className="text-sm text-muted-foreground">Criado carinhosamente por Gabriel Reis💕</p>
            <div className="flex gap-4 mt-2">
                <a href="https://instagram.com/psi.leticiapais" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram size={20} />
                </a>
                <a href="mailto:psileticiapais@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={20} />
                </a>
                 <a href="https://wa.me/5593991710671" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-muted-foreground hover:text-primary transition-colors">
                    <Phone size={20} />
                </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col md:flex-row justify-center md:justify-end items-center gap-8">
             <nav className="flex flex-wrap justify-center gap-x-6 gap-y-4">
                {navItems.map(item => <a key={item.href} href={item.href} onClick={e => handleNavClick(e, item.href)} className="text-muted-foreground hover:text-primary transition-colors">
                        {item.label}
                    </a>)}
             </nav>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Letícia Pais 2025/2026. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;