import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const QuizPart2: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<string[]>([]);

  const steps = [
    {
      question: "Quais são os principais objetivos das campanhas que você gerencia?",
      options: [
        "📲 Mensagens (Leads)",
        "💲 Conversões (Vendas)", 
        "🚀 Mensagens e Conversões"
      ]
    },
    {
      question: "Quais plataformas de anúncios você gerencia?",
      subtitle: "Agora vamos guiá-lo para a solução ideal!",
      options: [
        "Meta Ads",
        "Google Ads",
        "Meta Ads e Google Ads",
        "Meta Ads, Google Ads e Analytics"
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep - 1] = answer;
    setAnswers(newAnswers);

    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Navegação para a página Solução
      navigate('/solucao');
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate('/conexao');
    }
  };

  const currentStepData = steps[currentStep - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Pergunta {currentStep} de {steps.length}</span>
            <span>{Math.round((currentStep / steps.length) * 100)}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="card-elevated p-8 text-center animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {currentStepData.question}
          </h2>
          
          {currentStepData.subtitle && (
            <p className="text-lg text-muted-foreground mb-8">
              {currentStepData.subtitle}
            </p>
          )}

          <div className="space-y-4">
            {currentStepData.options.map((option, index) => (
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

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={goBack}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-primary hover:bg-primary/10 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <div className="text-sm text-muted-foreground">
              {answers[currentStep - 1] && '✓ Respondida'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPart2;