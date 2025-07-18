import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import CountdownTimer from '@/components/CountdownTimer';
import { 
  ArrowRight, 
  Shield, 
  CheckCircle, 
  Users, 
  PlayCircle, 
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Crown,
  Zap
} from 'lucide-react';

const Offer: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    'Acesso vitalício aos dashboards',
    'Templates para Meta Ads, Google Ads e Analytics',
    'Tutoriais passo a passo em vídeo',
    'Comunidade exclusiva no Telegram',
    'Suporte por 30 dias',
    'Atualizações gratuitas'
  ];

  const faqItems = [
    {
      question: t('offer.faq.q1'),
      answer: t('offer.faq.a1')
    },
    {
      question: t('offer.faq.q2'),
      answer: t('offer.faq.a2')
    },
    {
      question: t('offer.faq.q3'),
      answer: t('offer.faq.a3')
    }
  ];

  const handlePurchase = () => {
    // Simulate payment redirect
    navigate('/thank-you');
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent-cyan/5 to-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header with Countdown */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-warning/10 text-warning px-4 py-2 rounded-full mb-6">
              <Crown className="w-5 h-5" />
              <span className="font-medium">Oferta Especial</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('offer.title')}
            </h1>
            
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-2">{t('offer.urgency')}</p>
              <CountdownTimer initialMinutes={15} />
            </div>
          </div>

          {/* Pricing Card */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Left - Offer Details */}
            <div className="space-y-8">
              <div className="card-elevated">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-3xl font-bold text-muted-foreground line-through">
                      {language === 'pt' ? 'R$ 297' : '$59'}
                    </span>
                    <div className="bg-warning text-warning-foreground px-3 py-1 rounded-full text-sm font-bold">
                      47% OFF
                    </div>
                  </div>
                  
                  <div className="text-5xl font-bold text-gradient mb-2">
                    {language === 'pt' ? 'R$ 147' : '$29'}
                  </div>
                  
                  <p className="text-lg text-muted-foreground">
                    {t('offer.price')}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-bold text-foreground">{t('offer.includes')}</h3>
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handlePurchase}
                  className="w-full btn-gradient text-xl py-6 mb-6 animate-pulse-soft"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <Zap className="w-6 h-6" />
                    <span>{t('offer.cta')}</span>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </button>

                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 text-success mb-2">
                    <Shield className="w-5 h-5" />
                    <span className="font-medium">{t('offer.guarantee')}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Compra 100% segura • SSL Criptografado
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Bonuses */}
            <div className="space-y-6">
              <div className="card-elevated border-success/20 bg-success/5">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center space-x-2">
                  <PlayCircle className="w-6 h-6 text-success" />
                  <span>Bônus #1: Curso Completo</span>
                </h3>
                <p className="text-muted-foreground mb-3">
                  Aprenda a configurar e personalizar seus dashboards com nosso curso passo a passo.
                </p>
                <div className="text-lg font-bold text-success">
                  Valor: {language === 'pt' ? 'R$ 197' : '$39'} • Grátis hoje
                </div>
              </div>

              <div className="card-elevated border-accent-cyan/20 bg-accent-cyan/5">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center space-x-2">
                  <MessageCircle className="w-6 h-6 text-accent-cyan" />
                  <span>Bônus #2: Comunidade VIP</span>
                </h3>
                <p className="text-muted-foreground mb-3">
                  Acesso exclusivo ao nosso grupo no Telegram com dicas avançadas e networking.
                </p>
                <div className="text-lg font-bold text-accent-cyan">
                  Valor: {language === 'pt' ? 'R$ 97' : '$19'} • Grátis hoje
                </div>
              </div>

              <div className="card-elevated border-warning/20 bg-warning/5">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center space-x-2">
                  <Users className="w-6 h-6 text-warning" />
                  <span>Bônus #3: Templates Extras</span>
                </h3>
                <p className="text-muted-foreground mb-3">
                  5 templates adicionais para TikTok Ads, LinkedIn Ads e E-commerce.
                </p>
                <div className="text-lg font-bold text-warning">
                  Valor: {language === 'pt' ? 'R$ 147' : '$29'} • Grátis hoje
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="card-elevated">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              {t('offer.faq.title')}
            </h2>
            
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border border-border rounded-lg">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-base"
                  >
                    <span className="font-semibold text-foreground">{item.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-muted-foreground">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;