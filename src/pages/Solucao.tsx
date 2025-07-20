import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Users, TrendingUp, BarChart3, Eye, Settings } from 'lucide-react';

const Solucao: React.FC = () => {
  const navigate = useNavigate();
  const [selectedValidation, setSelectedValidation] = useState<string>('');

  const recursos = [
    {
      icon: Eye,
      title: "Visão Geral",
      description: "Dashboard completo com todas as métricas principais em uma única tela"
    },
    {
      icon: BarChart3,
      title: "Detalhamento Meta Ads",
      description: "Análise profunda de campanhas, conjuntos de anúncios e creativos"
    },
    {
      icon: TrendingUp,
      title: "Detalhamento Google Ads",
      description: "Performance por palavras-chave, anúncios e quality score"
    },
    {
      icon: Settings,
      title: "Configuração Avançada",
      description: "Tutoriais completos para personalizar seus dashboards"
    }
  ];

  const handleValidation = (answer: string) => {
    setSelectedValidation(answer);
    // Aguarda um momento para mostrar a seleção e depois navega
    setTimeout(() => {
      navigate('/decisao');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Título Principal */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Descubra agora o poder do <span className="text-gradient">DashCortex Integrado!</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sua solução personalizada com base nas suas respostas está pronta. 
              Veja o que você vai receber:
            </p>
          </div>

          {/* Bloco de Produto Principal */}
          <div className="card-elevated p-8 mb-16 text-center">
            <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-foreground">Dashboard Integrado</h3>
                <p className="text-muted-foreground">Meta Ads + Google Ads + Analytics</p>
              </div>
            </div>
          </div>

          {/* Recursos Inclusos */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              🧰 Recursos Inclusos:
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recursos.map((recurso, index) => (
                <div key={index} className="card-elevated p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <recurso.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{recurso.title}</h4>
                  <p className="text-sm text-muted-foreground">{recurso.description}</p>
                </div>
              ))}
            </div>

            {/* Lista de benefícios */}
            <div className="card-elevated p-8 mt-8">
              <ul className="grid md:grid-cols-2 gap-4 text-foreground">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Visão geral e detalhamento avançado</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Acesso vitalício</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Sem assinatura</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Sem limite de contas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Bônus: versão 1.0 + tutoriais de uso</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Suporte especializado</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pergunta de Validação */}
          <div className="card-elevated p-8 text-center mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              O que você achou?
            </h3>
            
            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                "👏 Gostei! É tudo que eu preciso",
                "😓 Parece bom... Mas ainda não tenho certeza"
              ].map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleValidation(option)}
                  className={`w-full p-4 text-left rounded-lg border transition-all duration-200 ${
                    selectedValidation === option
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border hover:border-primary hover:bg-primary/5 text-foreground'
                  }`}
                >
                  <span className="text-lg">{option}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Seção de Prova Social */}
          <div className="card-elevated p-8 mb-16">
            <h3 className="text-3xl font-bold text-center text-foreground mb-6">
              Veja o que as pessoas estão dizendo...
            </h3>
            
            {/* Métricas */}
            <div className="grid grid-cols-3 gap-6 mb-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">2.847+</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
              </div>
              <div>
                <div className="flex items-center justify-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">4.9/5 Estrelas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">15.000h+</div>
                <div className="text-sm text-muted-foreground">Horas Economizadas</div>
              </div>
            </div>

            {/* Depoimentos */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    J
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">João Silva</div>
                    <div className="text-sm text-muted-foreground">Gestor de Tráfego</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Nunca mais mandei print para cliente. Agora apresento relatórios profissionais que impressionam!"
                </p>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Ana Costa</div>
                    <div className="text-sm text-muted-foreground">Dona de Agência</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Substituí 3 ferramentas caras com um só dashboard. ROI imediato!"
                </p>
              </div>
            </div>
          </div>

          {/* Botão de Ação */}
          <div className="text-center">
            <button 
              onClick={() => navigate('/decisao')}
              className="btn-gradient text-xl px-12 py-6 inline-flex items-center space-x-3 animate-pulse-soft"
            >
              <span>Continuar</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solucao;