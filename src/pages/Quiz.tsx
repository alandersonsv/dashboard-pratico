import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useQuiz } from '@/contexts/QuizContext';
import ProgressBar from '@/components/ProgressBar';
import { ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';

const Quiz: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { currentStep, setCurrentStep, addAnswer, generateProfile } = useQuiz();
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const steps = [
    {
      step: 1,
      title: t('quiz.step1.title'),
      options: [
        t('quiz.step1.option1'),
        t('quiz.step1.option2'),
        t('quiz.step1.option3'),
        t('quiz.step1.option4')
      ]
    },
    {
      step: 2,
      title: t('quiz.step2.title'),
      options: [
        t('quiz.step2.option1'),
        t('quiz.step2.option2'),
        t('quiz.step2.option3'),
        t('quiz.step2.option4')
      ]
    },
    {
      step: 3,
      title: t('quiz.step3.title'),
      subtitle: t('quiz.step3.subtitle'),
      options: [
        t('quiz.step3.option1'),
        t('quiz.step3.option2'),
        t('quiz.step3.option3'),
        t('quiz.step3.option4')
      ]
    },
    {
      step: 4,
      title: t('quiz.step4.title'),
      options: [
        t('quiz.step4.option1'),
        t('quiz.step4.option2'),
        t('quiz.step4.option3'),
        t('quiz.step4.option4')
      ]
    }
  ];

  const currentStepData = steps[currentStep - 1];

  const handleOptionSelect = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleNext = async () => {
    if (!selectedAnswer) return;

    // Save answer
    addAnswer({
      step: currentStep,
      question: currentStepData.title,
      answer: selectedAnswer
    });

    if (currentStep === 4) {
      // Show loading screen
      setIsLoading(true);
      
      // Simulate analysis time
      setTimeout(() => {
        generateProfile();
        navigate('/solution');
      }, 3000);
    } else {
      setCurrentStep(currentStep + 1);
      setSelectedAnswer('');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
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
            {t('quiz.loading')}
          </h2>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-gradient-primary h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent-cyan/5 to-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <ProgressBar current={currentStep} total={4} className="mb-12" />

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
                disabled={currentStep === 1}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-base ${
                  currentStep === 1
                    ? 'text-muted-foreground cursor-not-allowed'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>{t('quiz.previous')}</span>
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
                <span>{currentStep === 4 ? 'Finalizar' : t('quiz.next')}</span>
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