import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, CheckCircle, BarChart3, TrendingUp, Target, Zap } from 'lucide-react';

const Landing: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const benefits = [
    { icon: CheckCircle, text: t('landing.benefit1') },
    { icon: Target, text: t('landing.benefit2') },
    { icon: Zap, text: t('landing.benefit3') },
    { icon: TrendingUp, text: t('landing.benefit4') }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t('landing.title').split(' ').map((word, index) => (
              <span key={index} className={word === 'Looker' || word === 'Studio' ? 'text-gradient' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('landing.subtitle')}
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center space-y-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-button">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => navigate('/quiz')}
            className="btn-gradient text-lg px-12 py-6 inline-flex items-center space-x-3 animate-pulse-soft"
          >
            <span>{t('landing.cta')}</span>
            <ArrowRight className="w-6 h-6" />
          </button>
          
          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-6">Confiado por mais de 1.000 profissionais</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg"></div>
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg"></div>
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg"></div>
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">
            Dashboards Profissionais, Resultados Imediatos
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Visualize seus dados de forma profissional e tome decisões mais assertivas
          </p>
          
          {/* Mock Dashboard Preview */}
          <div className="bg-gradient-card rounded-3xl p-8 shadow-large animate-float">
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">Dashboard Meta Ads</h3>
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-1">47.2K</div>
                  <div className="text-sm text-muted-foreground">Impressões</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-success mb-1">3.8%</div>
                  <div className="text-sm text-muted-foreground">CTR</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent-cyan mb-1">R$ 2.45</div>
                  <div className="text-sm text-muted-foreground">CPC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;