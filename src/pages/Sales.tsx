import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useQuiz } from '@/contexts/QuizContext';
import { ArrowRight, Check, X } from 'lucide-react';

const Sales: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { addAnswer } = useQuiz();
  const [selectedGoal, setSelectedGoal] = useState<string>('');
  const [finalChoice, setFinalChoice] = useState<string>('');

  const handleGoalSelect = (goal: string) => {
    setSelectedGoal(goal);
    addAnswer({
      step: 999,
      question: 'Objetivos das campanhas',
      answer: goal
    });
  };

  const handleFinalChoice = (choice: string) => {
    setFinalChoice(choice);
    addAnswer({
      step: 1000,
      question: 'Avaliação final',
      answer: choice
    });

    if (choice.includes('Gostei')) {
      navigate('/offer');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent-cyan/5 to-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Seção de Apresentação Pessoal */}
          <div className="card-elevated mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  👤 Prazer, sou o Alanderson!
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Sou especialista em marketing com foco em dados e performance.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Nos últimos 4 anos, ajudei negócios de diferentes segmentos a tomar decisões mais inteligentes com base em dados reais.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Fui responsável por implementar estruturas completas de tracking, automações, relatórios estratégicos e dashboards que simplificam o acompanhamento de resultados e aumentam a credibilidade de quem vende serviços de tráfego.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Com essa bagagem, criei uma solução prática e definitiva para quem trabalha com anúncios e precisa apresentar resultados de forma clara, visual e profissional.
                </p>
              </div>
            </div>
          </div>

          {/* Seção de Proposta de Valor */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Sem complicações */}
            <div className="card-elevated">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                🛠️ Sem complicações
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-destructive" />
                  <span className="text-muted-foreground">Nada de planilhas manuais</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-destructive" />
                  <span className="text-muted-foreground">Nada de ferramentas caras</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-destructive" />
                  <span className="text-muted-foreground">Nada de relatórios improvisados</span>
                </div>
              </div>
            </div>

            {/* Uma solução inteligente */}
            <div className="card-elevated">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                ✅ Uma solução inteligente
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Dashboards Automáticos no Looker Studio</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Atualizados em tempo real</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Sem limite de contas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Prontos para usar — e personalizar se quiser</span>
                </div>
              </div>
            </div>
          </div>

          {/* Seção de Personalização Final */}
          <div className="card-elevated mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Quais são os principais objetivos das suas campanhas?
              </h2>
              <p className="text-lg text-muted-foreground">
                Vamos montar sua solução ideal com base nisso:
              </p>
            </div>

            <div className="grid gap-4 mb-8">
              {[
                "📲 Geração de Leads (Mensagens)",
                "💲 Conversões (Vendas)",
                "🚀 Ambos: Leads e Vendas"
              ].map((goal, index) => (
                <button
                  key={index}
                  onClick={() => handleGoalSelect(goal)}
                  className={`w-full p-6 rounded-xl border-2 transition-base text-left ${
                    selectedGoal === goal
                      ? 'border-primary bg-primary/10 shadow-button'
                      : 'border-border hover:border-primary/50 bg-card hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedGoal === goal
                        ? 'border-primary bg-primary'
                        : 'border-border'
                    }`}>
                      {selectedGoal === goal && (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="text-lg font-medium text-foreground">
                      {goal}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Seção de Oferta e Recursos */}
          {selectedGoal && (
            <div className="card-elevated mb-12 animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Seu dashboard ideal está pronto!
                </h2>
                <p className="text-lg text-muted-foreground">
                  Feito sob medida com base nas suas respostas.
                </p>
              </div>

              {/* Dashboards inclusos */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-primary/5 rounded-xl">
                  <div className="text-4xl mb-4">💻</div>
                  <h3 className="font-semibold text-foreground">Meta Ads</h3>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-xl">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="font-semibold text-foreground">Google Ads</h3>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-xl">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="font-semibold text-foreground">Google Analytics</h3>
                </div>
              </div>

              {/* Recursos inclusos */}
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  🧰 Recursos inclusos:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Visão geral e detalhamento avançado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Acesso vitalício</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Sem assinatura</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Sem limite de contas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Bônus: versão 1.0 + tutoriais de uso</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Seção de Validação Final */}
          {selectedGoal && (
            <div className="card-elevated animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  O que você achou?
                </h2>
              </div>

              <div className="grid gap-4">
                {[
                  "👏 Gostei! É tudo que eu preciso",
                  "😓 Parece bom, mas ainda estou em dúvida"
                ].map((choice, index) => (
                  <button
                    key={index}
                    onClick={() => handleFinalChoice(choice)}
                    className={`w-full p-6 rounded-xl border-2 transition-base text-left ${
                      finalChoice === choice
                        ? 'border-primary bg-primary/10 shadow-button'
                        : 'border-border hover:border-primary/50 bg-card hover:bg-muted/50'
                    } ${choice.includes('Gostei') ? 'bg-gradient-primary text-white hover:scale-105' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-lg font-medium ${choice.includes('Gostei') ? 'text-white' : 'text-foreground'}`}>
                        {choice}
                      </span>
                      {choice.includes('Gostei') && (
                        <ArrowRight className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sales;