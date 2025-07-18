import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, Download, MessageCircle, Mail, ArrowRight } from 'lucide-react';

const ThankYou: React.FC = () => {
  const { t } = useLanguage();

  const nextSteps = [
    {
      icon: Mail,
      title: 'Verifique seu e-mail',
      description: 'Enviamos todas as informações de acesso para seu e-mail cadastrado.'
    },
    {
      icon: Download,
      title: 'Baixe os templates',
      description: 'Acesse o link exclusivo e faça o download de todos os dashboards.'
    },
    {
      icon: MessageCircle,
      title: 'Entre na comunidade',
      description: 'Junte-se ao nosso grupo VIP no Telegram para dicas exclusivas.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-success/5 via-background to-primary/5">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Header */}
          <div className="animate-fade-in mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-success to-success/80 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-soft">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('thanks.title')}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              {t('thanks.subtitle')}
            </p>
            
            <div className="bg-success/10 border border-success/20 rounded-xl p-6 mb-8">
              <p className="text-lg text-success font-semibold">
                ✅ Pagamento confirmado com sucesso!
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Processamento instantâneo • Acesso liberado automaticamente
              </p>
            </div>
          </div>

          {/* Access Button */}
          <div className="card-elevated mb-12 bg-gradient-to-r from-primary/10 to-accent-cyan/10 border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Seus dashboards estão prontos!
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Clique no botão abaixo para acessar sua área exclusiva de downloads.
            </p>
            
            <button className="btn-gradient text-lg px-8 py-4 inline-flex items-center space-x-3 mb-4">
              <Download className="w-5 h-5" />
              <span>{t('thanks.access')}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <p className="text-sm text-muted-foreground">
              Link válido por tempo ilimitado • Faça quantos downloads precisar
            </p>
          </div>

          {/* Next Steps */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Próximos passos
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {nextSteps.map((step, index) => (
                <div key={index} className="card-elevated animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Section */}
          <div className="card-elevated bg-muted/30">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Precisa de ajuda?
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Nossa equipe está sempre disponível para ajudar você a configurar seus dashboards.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Chat ao Vivo</span>
              </button>
              
              <button className="btn-secondary flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>E-mail Suporte</span>
              </button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              {t('thanks.support')}
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Obrigado por confiar em nossa solução! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;