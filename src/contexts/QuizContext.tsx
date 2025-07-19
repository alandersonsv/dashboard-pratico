import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface QuizAnswer {
  step: number;
  question: string;
  answer: string;
}

export interface UserProfile {
  type: 'traffic-manager' | 'agency-owner' | 'entrepreneur' | 'infoproducer';
  path: 'path1' | 'path2';
  currentMethod: string;
  goal: string;
  finalGoal?: string;
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
  quizPath: 'initial' | 'path1' | 'path2' | 'final';
  setQuizPath: (path: 'initial' | 'path1' | 'path2' | 'final') => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [quizPath, setQuizPath] = useState<'initial' | 'path1' | 'path2' | 'final'>('initial');

  const addAnswer = (answer: QuizAnswer) => {
    setAnswers(prev => {
      const filtered = prev.filter(a => a.step !== answer.step);
      return [...filtered, answer].sort((a, b) => a.step - b.step);
    });
  };

  const generateProfile = () => {
    const initialAnswer = answers.find(a => a.step === 0)?.answer;
    
    if (initialAnswer) {
      let type: UserProfile['type'] = 'entrepreneur';
      let path: 'path1' | 'path2' = 'path2';

      if (initialAnswer.includes('Tráfego')) {
        type = 'traffic-manager';
        path = 'path1';
      } else if (initialAnswer.includes('Agência')) {
        type = 'agency-owner';
        path = 'path1';
      } else if (initialAnswer.includes('Negócio')) {
        type = 'entrepreneur';
        path = 'path2';
      } else if (initialAnswer.includes('Infoprodutor')) {
        type = 'infoproducer';
        path = 'path2';
      }

      const profile: UserProfile = {
        type,
        path,
        currentMethod: '',
        goal: ''
      };

      setUserProfile(profile);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(1);
    setAnswers([]);
    setUserProfile(null);
    setIsCompleted(false);
    setQuizPath('initial');
  };

  const value = {
    currentStep,
    setCurrentStep,
    answers,
    addAnswer,
    userProfile,
    generateProfile,
    resetQuiz,
    isCompleted,
    quizPath,
    setQuizPath
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