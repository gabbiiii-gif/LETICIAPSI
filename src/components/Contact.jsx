import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, Instagram, MapPin, Send } from 'lucide-react';
const Contact = () => {
  const [ref, isInView] = useInView({
    threshold: 0.1
  });
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const contactInfo = [{
    icon: Phone,
    label: 'WhatsApp',
    value: '(93) 99171-0671',
    link: 'https://wa.me/5593991710671'
  }, {
    icon: Instagram,
    label: 'Instagram',
    value: '@psi.leticiapais',
    link: 'https://instagram.com/psi.leticiapais'
  }, {
    icon: Mail,
    label: 'E-mail',
    value: 'psileticiapais@gmail.com',
    link: 'mailto:psileticiapais@gmail.com'
  }, {
    icon: MapPin,
    label: 'Endereço',
    value: 'Djalma Dutra, Centro - Altamira/PA',
    link: null
  }];
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'E-mail é obrigatório';else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'E-mail inválido';
    if (!formData.phone.trim()) newErrors.phone = 'Telefone é obrigatório';
    if (!formData.message.trim()) newErrors.message = 'Mensagem é obrigatória';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      const message = `Olá! Meu nome é ${formData.name}.\n\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\n\nMensagem: ${formData.message}`;
      const whatsappUrl = `https://wa.me/5593991710671?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      toast({
        title: "Mensagem enviada com sucesso. obrigado!!",
        description: "Você será redirecionado para o WhatsApp."
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } else {
      toast({
        title: "Erro no formulário",
        description: "Por favor, corrija os campos destacados.",
        variant: "destructive"
      });
    }
  };
  return <section id="contact" ref={ref} className="py-20 px-4 bg-secondary/50 dark:bg-background">
      <div className="container mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Estou aqui para ajudar você. Entre em contato para agendar sua consulta ou tirar dúvidas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="space-y-6">
            <div className="bg-card p-6 sm:p-8 rounded-xl shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: -20
              }} animate={isInView ? {
                opacity: 1,
                x: 0
              } : {}} transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1
              }}>
                    {info.link ? <a href={info.link} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-3 rounded-lg hover:bg-accent transition-all duration-300 group">
                        <div className="bg-primary w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                        </div>
                        <div className="break-words min-w-0">
                          <p className="font-semibold text-foreground text-sm sm:text-base">{info.label}</p>
                          <p className="text-muted-foreground group-hover:text-primary transition-colors text-sm sm:text-base truncate">
                            {info.value}
                          </p>
                        </div>
                      </a> : <div className="flex items-start gap-4 p-3">
                        <div className="bg-primary w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                        </div>
                        <div className="break-words min-w-0">
                          <p className="font-semibold text-foreground text-sm sm:text-base">{info.label}</p>
                          <p className="text-muted-foreground text-sm sm:text-base">{info.value}</p>
                        </div>
                      </div>}
                  </motion.div>)}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.3
        }}>
            <form onSubmit={handleSubmit} className="bg-card p-6 sm:p-8 rounded-xl shadow-lg border border-border space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Vamos conversar?</h3>

              <div className="space-y-2">
                <Label htmlFor="name" className="text-muted-foreground">Nome Completo *</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Seu nome" className={errors.name ? 'border-destructive' : ''} />
                {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-muted-foreground">E-mail *</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" className={errors.email ? 'border-destructive' : ''} />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-muted-foreground">Telefone/WhatsApp *</Label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(93) 99999-9999" className={errors.phone ? 'border-destructive' : ''} />
                {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-muted-foreground">Mensagem *</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Como posso ajudar você?" rows={5} className={errors.message ? 'border-destructive' : ''} />
                {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group" size="lg">
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Enviar para WhatsApp
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Contact;