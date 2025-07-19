import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations = {
  pt: {
    // Header
    'header.home': 'Início',
    'header.quiz': 'Quiz',
    'header.solution': 'Solução',
    'header.offer': 'Oferta',
    
    // Landing Page
    'landing.title': 'Dashboards Prontos para Looker Studio',
    'landing.subtitle': 'Transforme seus dados em decisões com templates profissionais e 100% editáveis.',
    'landing.benefit1': 'Sem mensalidade',
    'landing.benefit2': '100% personalizável',
    'landing.benefit3': 'Pronto para usar',
    'landing.benefit4': 'Acesso imediato',
    'landing.cta': 'Descobrir Meu Dashboard Ideal',
    
    // Quiz
    'quiz.step1.title': 'Qual melhor descreve você?',
    'quiz.step1.option1': 'Gestor de Tráfego',
    'quiz.step1.option2': 'Dono de Agência',
    'quiz.step1.option3': 'Empreendedor',
    'quiz.step1.option4': 'Infoprodutor',
    
    'quiz.step2.title': 'Como você entrega relatórios hoje?',
    'quiz.step2.option1': 'Prints',
    'quiz.step2.option2': 'Planilhas manuais',
    'quiz.step2.option3': 'Ferramentas caras',
    'quiz.step2.option4': 'Já uso Looker Studio',
    
    'quiz.step3.title': 'Qual seu principal objetivo?',
    'quiz.step3.subtitle': 'Leads? Vendas? Resultados? Vamos montar a solução perfeita.',
    'quiz.step3.option1': 'Gerar mais leads',
    'quiz.step3.option2': 'Aumentar vendas',
    'quiz.step3.option3': 'Melhorar resultados',
    'quiz.step3.option4': 'Impressionar clientes',
    
    'quiz.step4.title': 'Quais plataformas você usa?',
    'quiz.step4.option1': 'Meta Ads',
    'quiz.step4.option2': 'Google Ads',
    'quiz.step4.option3': 'TikTok Ads',
    'quiz.step4.option4': 'Todas as anteriores',
    
    'quiz.loading': 'Analisando suas respostas para montar seu pacote ideal...',
    'quiz.next': 'Próximo',
    'quiz.previous': 'Anterior',
    
    // Solution Page
    'solution.title': 'Seu pacote ideal está pronto!',
    'solution.subtitle': 'Esses dashboards foram selecionados com base no seu perfil e objetivos.',
    'solution.description': 'Relatórios automatizados para Meta Ads, Google Ads e muito mais — tudo em um só lugar.',
    'solution.social.title': 'Clientes satisfeitos com seus dashboards:',
    'solution.testimonial1': '"Nunca mais mandei print pra cliente." – João, gestor',
    'solution.testimonial2': '"Substituí 3 ferramentas caras com um só dashboard." – Ana, agência',
    'solution.cta': 'Ver Minha Oferta Especial',
    
    // Offer Page
    'offer.title': 'Parabéns! Você ganhou 47% de desconto',
    'offer.price': 'Apenas hoje: dashboards por R$147 à vista ou 12x R$14,90',
    'offer.includes': 'Inclui: Acesso vitalício, tutoriais passo a passo, comunidade exclusiva',
    'offer.cta': 'Quero Meu Acesso com 47% OFF',
    'offer.guarantee': '🛡️ Garantia de 7 dias. Se não amar, devolvemos seu dinheiro.',
    'offer.faq.title': 'Perguntas Frequentes',
    'offer.faq.q1': 'É só pagar uma vez?',
    'offer.faq.a1': 'Sim! Pagamento único, sem mensalidades.',
    'offer.faq.q2': 'Como acesso?',
    'offer.faq.a2': 'Você recebe o link direto após a compra.',
    'offer.faq.q3': 'Funciona no Looker Studio?',
    'offer.faq.a3': 'Sim, todos os templates são 100% compatíveis.',
    'offer.urgency': 'Oferta expira em:',
    
    // Thank You Page
    'thanks.title': 'Obrigado pela sua compra!',
    'thanks.subtitle': 'Você receberá as instruções de acesso em breve.',
    'thanks.access': 'Acesse seus dashboards',
    'thanks.support': 'Precisa de ajuda? Entre em contato.'
  },
  en: {
    // Header
    'header.home': 'Home',
    'header.quiz': 'Quiz',
    'header.solution': 'Solution',
    'header.offer': 'Offer',
    
    // Landing Page
    'landing.title': 'Ready-to-Use Looker Studio Dashboards',
    'landing.subtitle': 'Turn your data into decisions with professional, 100% editable templates.',
    'landing.benefit1': 'No monthly fees',
    'landing.benefit2': '100% customizable',
    'landing.benefit3': 'Ready to use',
    'landing.benefit4': 'Instant access',
    'landing.cta': 'Discover My Ideal Dashboard',
    
    // Quiz
    'quiz.step1.title': 'Which best describes you?',
    'quiz.step1.option1': 'Traffic Manager',
    'quiz.step1.option2': 'Agency Owner',
    'quiz.step1.option3': 'Entrepreneur',
    'quiz.step1.option4': 'Infoproducer',
    
    'quiz.step2.title': 'How do you deliver reports today?',
    'quiz.step2.option1': 'Screenshots',
    'quiz.step2.option2': 'Manual spreadsheets',
    'quiz.step2.option3': 'Expensive tools',
    'quiz.step2.option4': 'I already use Looker Studio',
    
    'quiz.step3.title': "What's your main goal?",
    'quiz.step3.subtitle': "Leads? Sales? Results? Let's build the perfect solution.",
    'quiz.step3.option1': 'Generate more leads',
    'quiz.step3.option2': 'Increase sales',
    'quiz.step3.option3': 'Improve results',
    'quiz.step3.option4': 'Impress clients',
    
    'quiz.step4.title': 'Which platforms do you use?',
    'quiz.step4.option1': 'Meta Ads',
    'quiz.step4.option2': 'Google Ads',
    'quiz.step4.option3': 'TikTok Ads',
    'quiz.step4.option4': 'All of the above',
    
    'quiz.loading': 'Analyzing your answers to build your ideal package...',
    'quiz.next': 'Next',
    'quiz.previous': 'Previous',
    
    // Solution Page
    'solution.title': 'Your ideal package is ready!',
    'solution.subtitle': 'These dashboards were selected based on your profile and goals.',
    'solution.description': 'Automated reports for Meta Ads, Google Ads, and more — all in one place.',
    'solution.social.title': 'Happy clients with their dashboards:',
    'solution.testimonial1': '"I never sent a screenshot to a client again." – John, Manager',
    'solution.testimonial2': '"I replaced 3 expensive tools with a single dashboard." – Ann, Agency',
    'solution.cta': 'See My Special Offer',
    
    // Offer Page
    'offer.title': "Congratulations! You've unlocked a 47% discount",
    'offer.price': 'Today only: dashboards for $29 USD',
    'offer.includes': 'Includes: Lifetime access, step-by-step tutorials, exclusive community',
    'offer.cta': 'I Want My Access with 47% OFF',
    'offer.guarantee': "🛡️ 7-day money-back guarantee. If you don't love it, we'll refund you.",
    'offer.faq.title': 'Frequently Asked Questions',
    'offer.faq.q1': 'Is it a one-time payment?',
    'offer.faq.a1': 'Yes! Pay once, no monthly fees.',
    'offer.faq.q2': 'How do I get access?',
    'offer.faq.a2': 'You receive the direct link right after purchase.',
    'offer.faq.q3': 'Does it work with Looker Studio?',
    'offer.faq.a3': 'Yes, all templates are 100% compatible.',
    'offer.urgency': 'Offer expires in:',
    
    // Thank You Page
    'thanks.title': 'Thank you for your purchase!',
    'thanks.subtitle': 'You will receive access instructions shortly.',
    'thanks.access': 'Access your dashboards',
    'thanks.support': 'Need help? Contact us.'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
