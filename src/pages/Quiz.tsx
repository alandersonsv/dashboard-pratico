import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useQuiz } from '@/contexts/QuizContext';
import ProgressBar from '@/components/ProgressBar';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const Quiz: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { 
    currentStep, 
    setCurrentStep, 
    addAnswer, 
    generateProfile, 
    userProfile,
    quizPath,
    setQuizPath
  } = useQuiz();
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  // Segmentação inicial
  const initialStep = {
    title: "Vamos te direcionar para a solução perfeita!",
    subtitle: "Escolha a opção que melhor te representa:",
    options: [
      "📊 Gestor de Tráfego",
      "🌐 Dono de Agência", 
      "💼 Dono de Negócio",
      "🚀 Infoprodutor"
    ]
  };

  // Caminho 1: Gestor de Tráfego / Dono de Agência
  const path1Steps = [
    {
      step: 1,
      title: "Como você apresenta os resultados das campanhas para seus clientes?",
      subtitle: "Seja 100% sincero:",
      options: [
        "📸 Tiro print do gerenciador",
        "📲 Envio pelo WhatsApp",
        "📝 Faço manualmente no Excel ou Canva",
        "💸 Uso uma ferramenta por assinatura",
        "📊 Tenho um dashboard no Looker Studio"
      ]
    },
    {
      step: 2,
      title: "O que você acha que realmente aumenta o valor do seu serviço?",
      options: [
        "💡 Só prospectar clientes mais caros",
        "🗃️ Só adicionar novos serviços no pacote",
        "🚀 Combinar tudo e aumentar sua CREDIBILIDADE com relatórios profissionais"
      ]
    },
    {
      step: 3,
      title: "Você conhece os Relatórios de Tráfego Automáticos?",
      subtitle: "Dashboards que atualizam sozinhos, sem limite de contas e sem assinatura mensal. Feitos para quem quer escalar com mais credibilidade e menos esforço.",
      options: [
        "🤯 Quero conhecer agora",
        "😏 Já conheço",
        "😎 Já uso!"
      ]
    },
    {
      step: 4,
      title: "Concorda que relatórios automáticos aumentam a percepção de valor do seu serviço?",
      subtitle: "Eles mostram profissionalismo, otimizam sua entrega e ajudam a fechar contratos maiores.",
      options: [
        "👏 Concordo!",
        "🙅 Discordo"
      ]
    }
  ];

  // Caminho 2: Dono de Negócio / Infoprodutor
  const path2Steps = [
    {
      step: 1,
      title: "Como você analisa o desempenho geral das suas campanhas?",
      options: [
        "💻 No próprio Gerenciador de Anúncios",
        "💸 Uso uma ferramenta por assinatura",
        "📊 Tenho um dashboard automático (Looker ou Power BI)"
      ]
    },
    {
      step: 2,
      title: "Você já conhece os Relatórios de Tráfego Automáticos?",
      subtitle: "Feitos no Looker Studio, são dashboards prontos e atualizados em tempo real. Sem limite de contas, sem mensalidade, e com tudo pronto para você focar no que importa: vender mais.",
      options: [
        "🤯 Quero conhecer agora",
        "😏 Já conheço", 
        "😎 Já uso!"
      ]
    },
    {
      step: 3,
      title: "Concorda que analisar as métricas com clareza ajuda a tomar melhores decisões de tráfego?",
      subtitle: "Um bom relatório mostra onde ajustar, o que está dando certo, e como escalar.",
      options: [
        "👏 Concordo!",
        "🙅 Discordo"
      ]
    }
  ];

  const getCurrentStepData = () => {
    if (quizPath === 'initial') {
      return initialStep;
    } else if (quizPath === 'path1') {
      return path1Steps[currentStep - 1];
    } else if (quizPath === 'path2') {
      return path2Steps[currentStep - 1];
    }
    return null;
  };

  const getTotalSteps = () => {
    if (quizPath === 'initial') return 1;
    if (quizPath === 'path1') return 4;
    if (quizPath === 'path2') return 3;
    return 1;
  };

  const currentStepData = getCurrentStepData();

  const handleOptionSelect = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleNext = async () => {
    if (!selectedAnswer) return;

    if (quizPath === 'initial') {
      // Segmentação inicial
      addAnswer({
        step: 0,
        question: initialStep.title,
        answer: selectedAnswer
      });

      generateProfile();
      
      // Definir caminho baseado na resposta
      if (selectedAnswer.includes('Tráfego') || selectedAnswer.includes('Agência')) {
        setQuizPath('path1');
        setCurrentStep(1);
      } else {
        setQuizPath('path2');
        setCurrentStep(1);
      }
      
      setSelectedAnswer('');
      return;
    }

    // Salvar resposta atual
    addAnswer({
      step: currentStep,
      question: currentStepData?.title || '',
      answer: selectedAnswer
    });

    // Verificar se é o último passo do caminho atual
    const totalSteps = getTotalSteps();
    if (currentStep === totalSteps) {
      // Mostrar loading e navegar para página de vendas
      setIsLoading(true);
      
      setTimeout(() => {
        setQuizPath('final');
        navigate('/sales');
      }, 2000);
    } else {
      setCurrentStep(currentStep + 1);
      setSelectedAnswer('');
    }
  };

  const handlePrevious = () => {
    if (quizPath === 'initial') return;
    
    if (currentStep === 1) {
      // Voltar para segmentação inicial
      setQuizPath('initial');
      setCurrentStep(1);
      setSelectedAnswer('');
    } else {
      setCurrentStep(currentStep - 1);
      setSelectedAnswer('');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent-cyan/5 to-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="animate-spin w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-8"></div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Analisando suas respostas...
          </h2>
          <p className="text-muted-foreground mb-6">
            Preparando sua solução personalizada
          </p>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-gradient-primary h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>
    );
  }

  if (!currentStepData) {
    return <div>Erro: Dados do passo não encontrados</div>;
  }

  const currentStepForDisplay = quizPath === 'initial' ? 1 : currentStep;
  const totalStepsForDisplay = quizPath === 'initial' ? 1 : getTotalSteps();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent-cyan/5 to-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          {quizPath !== 'initial' && (
            <ProgressBar current={currentStepForDisplay} total={totalStepsForDisplay} className="mb-12" />
          )}

          {/* Question Card */}
          <div className="card-elevated animate-slide-up">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-4">
                {currentStepData.title}
              </h1>
              {currentStepData.subtitle && (
                <p className="text-lg text-muted-foreground">
                  {currentStepData.subtitle}
                </p>
              )}
            </div>

            {/* Options */}
            <div className="space-y-4 mb-8">
              {currentStepData.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full p-6 rounded-xl border-2 transition-base text-left ${
                    selectedAnswer === option
                      ? 'border-primary bg-primary/10 shadow-button'
                      : 'border-border hover:border-primary/50 bg-card hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === option
                        ? 'border-primary bg-primary'
                        : 'border-border'
                    }`}>
                      {selectedAnswer === option && (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="text-lg font-medium text-foreground">
                      {option}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevious}
                disabled={quizPath === 'initial'}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-base ${
                  quizPath === 'initial'
                    ? 'text-muted-foreground cursor-not-allowed'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Anterior</span>
              </button>

              <button
                onClick={handleNext}
                disabled={!selectedAnswer}
                className={`flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold transition-base ${
                  selectedAnswer
                    ? 'bg-gradient-primary text-white shadow-button hover:scale-105'
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                }`}
              >
                <span>
                  {quizPath === 'initial' ? 'Começar' : 
                   (currentStep === getTotalSteps() ? 'Finalizar' : 'Próximo')}
                </span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;