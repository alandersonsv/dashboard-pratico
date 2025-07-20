import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Demonstracao: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Veja na prática como o <span className="text-gradient">DashCortex</span> funciona!
            </h1>
            <p className="text-xl text-muted-foreground">
              Em apenas 10 minutos você vai entender como nossos dashboards podem revolucionar sua forma de trabalhar.
            </p>
          </div>

          {/* Vídeo de Demonstração */}
          <div className="card-elevated p-8 mb-12">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Demonstração Completa</h3>
                <p className="text-muted-foreground">Clique para assistir ao vídeo</p>
              </div>
            </div>
            
            {/* Informações do vídeo */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">10 min</div>
                <div className="text-sm text-muted-foreground">Duração do vídeo</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">3 dashboards</div>
                <div className="text-sm text-muted-foreground">Demonstrados</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Casos reais</div>
              </div>
            </div>
          </div>

          {/* O que você vai ver */}
          <div className="card-elevated p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              O que você vai ver nesta demonstração:
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Dashboard Meta Ads</h4>
                    <p className="text-sm text-muted-foreground">Como monitorar campanhas, ROI e audiências em tempo real</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Dashboard Google Ads</h4>
                    <p className="text-sm text-muted-foreground">Quality Score, palavras-chave e otimizações automáticas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Dashboard Analytics</h4>
                    <p className="text-sm text-muted-foreground">Funis de conversão e comportamento do usuário</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">4</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Personalização</h4>
                    <p className="text-sm text-muted-foreground">Como adaptar os dashboards para sua marca</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">5</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Configuração</h4>
                    <p className="text-sm text-muted-foreground">Passo a passo para conectar suas contas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">6</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Casos de Uso</h4>
                    <p className="text-sm text-muted-foreground">Exemplos reais de agências e gestores</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chamada para ação */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Gostou do que viu? Agora é hora de ter acesso completo!
            </p>
            
            <button 
              onClick={() => navigate('/oferta-limitada')}
              className="btn-gradient text-xl px-12 py-6 inline-flex items-center space-x-3 animate-pulse-soft"
            >
              <span>Quero ter acesso agora!</span>
              <ArrowRight className="w-6 h-6" />
            </button>
            
            <p className="text-sm text-muted-foreground mt-4">
              🎯 Oferta especial para quem assistiu a demonstração
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demonstracao;