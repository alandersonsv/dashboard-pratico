import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useQuiz } from '@/contexts/QuizContext';
import { ArrowRight, Star, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';

const Solution: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { userProfile } = useQuiz();

  const dashboards = [
    {
      name: 'Meta Ads Dashboard',
      description: 'Relatórios completos do Facebook e Instagram Ads',
      features: ['ROI em tempo real', 'Análise de audiências', 'Otimização automática']
    },
    {
      name: 'Google Ads Dashboard',
      description: 'Performance detalhada das campanhas Google',
      features: ['Quality Score', 'Palavras-chave top', 'Conversões por dispositivo']
    },
    {
      name: 'Analytics Dashboard',
      description: 'Comportamento completo dos usuários',
      features: ['Funil de conversão', 'Segmentação avançada', 'Objetivos personalizados']
    }
  ];

  const testimonials = [
    {
      text: t('solution.testimonial1'),
      author: 'João Silva',
      role: 'Gestor de Tráfego',
      avatar: '👨‍💼'
    },
    {
      text: t('solution.testimonial2'),
      author: 'Ana Costa',
      role: 'Dona de Agência',
      avatar: '👩‍💼'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full mb-6">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Análise Completa</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('solution.title')}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              {t('solution.subtitle')}
            </p>
            
            <p className="text-lg text-foreground font-medium">
              {t('solution.description')}
            </p>
          </div>

          {/* Selected Dashboards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {dashboards.map((dashboard, index) => (
              <div key={index} className="card-elevated animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {dashboard.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {dashboard.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {dashboard.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              {t('solution.social.title')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card-elevated animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{testimonial.avatar}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-foreground font-medium mb-3 italic">
                        {testimonial.text}
                      </p>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-semibold">{testimonial.author}</span>
                        <span className="mx-1">•</span>
                        <span>{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center card-elevated bg-gradient-to-r from-primary/10 to-accent-cyan/10 border-primary/20">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Pronto para transformar seus relatórios?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Você está a um clique de ter dashboards profissionais que vão impressionar seus clientes e otimizar seus resultados.
            </p>
            
            <button
              onClick={() => navigate('/offer')}
              className="btn-gradient text-xl px-12 py-6 inline-flex items-center space-x-3"
            >
              <span>{t('solution.cta')}</span>
              <ArrowRight className="w-6 h-6" />
            </button>
            
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>+1.000 usuários</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>Garantia 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;