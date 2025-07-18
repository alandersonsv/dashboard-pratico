import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface QuizAnswer {
  step: number;
  question: string;
  answer: string;
}

export interface UserProfile {
  type: 'traffic-manager' | 'agency-owner' | 'entrepreneur' | 'infoproducer';
  currentMethod: 'screenshots' | 'spreadsheets' | 'expensive-tools' | 'looker-studio';
  goal: 'leads' | 'sales' | 'results' | 'impress-clients';
  platforms: 'meta-ads' | 'google-ads' | 'tiktok-ads' | 'all-platforms';
}

interface QuizContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  answers: QuizAnswer[];
  addAnswer: (answer: QuizAnswer) => void;
  userProfile: UserProfile | null;
  generateProfile: () => void;
  resetQuiz: () => void;
  isCompleted: boolean;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const addAnswer = (answer: QuizAnswer) => {
    setAnswers(prev => {
      const filtered = prev.filter(a => a.step !== answer.step);
      return [...filtered, answer].sort((a, b) => a.step - b.step);
    });
  };

  const generateProfile = () => {
    if (answers.length === 4) {
      const step1Answer = answers.find(a => a.step === 1)?.answer;
      const step2Answer = answers.find(a => a.step === 2)?.answer;
      const step3Answer = answers.find(a => a.step === 3)?.answer;
      const step4Answer = answers.find(a => a.step === 4)?.answer;

      // Map answers to profile type
      let type: UserProfile['type'] = 'entrepreneur';
      if (step1Answer?.includes('Tráfego') || step1Answer?.includes('Traffic')) {
        type = 'traffic-manager';
      } else if (step1Answer?.includes('Agência') || step1Answer?.includes('Agency')) {
        type = 'agency-owner';
      } else if (step1Answer?.includes('Infoprodutor') || step1Answer?.includes('Infoproducer')) {
        type = 'infoproducer';
      }

      let currentMethod: UserProfile['currentMethod'] = 'spreadsheets';
      if (step2Answer?.includes('Print') || step2Answer?.includes('Screenshot')) {
        currentMethod = 'screenshots';
      } else if (step2Answer?.includes('caras') || step2Answer?.includes('Expensive')) {
        currentMethod = 'expensive-tools';
      } else if (step2Answer?.includes('Looker')) {
        currentMethod = 'looker-studio';
      }

      let goal: UserProfile['goal'] = 'results';
      if (step3Answer?.includes('leads')) {
        goal = 'leads';
      } else if (step3Answer?.includes('vendas') || step3Answer?.includes('sales')) {
        goal = 'sales';
      } else if (step3Answer?.includes('clientes') || step3Answer?.includes('clients')) {
        goal = 'impress-clients';
      }

      let platforms: UserProfile['platforms'] = 'all-platforms';
      if (step4Answer?.includes('Meta')) {
        platforms = 'meta-ads';
      } else if (step4Answer?.includes('Google')) {
        platforms = 'google-ads';
      } else if (step4Answer?.includes('TikTok')) {
        platforms = 'tiktok-ads';
      }

      const profile: UserProfile = {
        type,
        currentMethod,
        goal,
        platforms
      };

      setUserProfile(profile);
      setIsCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(1);
    setAnswers([]);
    setUserProfile(null);
    setIsCompleted(false);
  };

  const value = {
    currentStep,
    setCurrentStep,
    answers,
    addAnswer,
    userProfile,
    generateProfile,
    resetQuiz,
    isCompleted
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};