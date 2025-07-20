import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, X } from 'lucide-react';

const Conexao: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  
  const handleAnswer = (answer: string) => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      // Após responder as duas perguntas, vai para Quiz Parte 2
      navigate('/quiz-part2');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Quiz Section */}
          {currentStep === 1 && (
            <div className="card-elevated p-8 text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Você conhece os Relatórios de Tráfego Automáticos?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                São dashboards atualizados em tempo real, sem limite de contas, sem mensalidade. 
                Feitos para quem quer escalar com mais credibilidade e menos esforço.
              </p>
              
              <div className="space-y-4">
                {[
                  "🤯 Quero conhecer agora!",
                  "😏 Já conheço!",
                  "😎 Já conheço e uso!"
                ].map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="w-full p-4 text-left rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                  >
                    <span className="text-foreground group-hover:text-primary transition-colors text-lg">
                      {option}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="card-elevated p-8 text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Concorda que entregar relatórios profissionais aumenta a credibilidade do seu serviço?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Eles mostram profissionalismo, otimizam sua entrega e ajudam a fechar contratos maiores.
              </p>
              
              <div className="space-y-4">
                {[
                  "👏 Concordo!",
                  "🙅 Discordo"
                ].map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="w-full p-4 text-left rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                  >
                    <span className="text-foreground group-hover:text-primary transition-colors text-lg">
                      {option}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Apresentação do Fundador */}
          <div className="card-elevated p-8 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center text-white text-4xl font-bold">
                L
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Prazer, me chamo Lucas!
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sou especialista em marketing digital e nos últimos 4 anos ajudei centenas de profissionais 
                  a transformarem sua forma de apresentar resultados. Criei uma solução que já economizou 
                  milhares de horas de trabalho manual e aumentou a credibilidade de gestores e agências.
                </p>
              </div>
            </div>
          </div>

          {/* Proposta de Valor */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Sem complicações */}
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                🛠️ Sem complicações
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <X className="w-5 h-5 text-red-500" />
                  <span className="text-muted-foreground">Nada de planilhas manuais</span>
                </li>
                <li className="flex items-center space-x-3">
                  <X className="w-5 h-5 text-red-500" />
                  <span className="text-muted-foreground">Nada de ferramentas caras</span>
                </li>
                <li className="flex items-center space-x-3">
                  <X className="w-5 h-5 text-red-500" />
                  <span className="text-muted-foreground">Nada de relatórios improvisados</span>
                </li>
              </ul>
            </div>

            {/* Uma solução definitiva */}
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                ✅ Uma solução definitiva
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">Dashboards Automáticos no Looker Studio</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">Atualizados em tempo real</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">Sem limite de contas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">Prontos para usar — e personalizar se quiser</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Botão de Ação */}
          <div className="text-center">
            <button 
              onClick={() => navigate('/quiz-part2')}
              className="btn-gradient text-xl px-12 py-6 inline-flex items-center space-x-3 animate-pulse-soft"
            >
              <span>Quero ter acesso!</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conexao;