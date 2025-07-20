import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Shield, Star, HelpCircle } from 'lucide-react';

const OfertaLimitada: React.FC = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Cronômetro funcional
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const faqs = [
    {
      question: "É só pagar uma vez?",
      answer: "Sim! Pagamento único, sem mensalidades. Você paga apenas uma vez e tem acesso vitalício aos dashboards."
    },
    {
      question: "Como funciona o acesso?",
      answer: "Após a compra, você recebe o link direto por email em até 5 minutos. O acesso é imediato."
    },
    {
      question: "Funciona no Looker Studio?",
      answer: "Sim, todos os templates são 100% compatíveis com o Looker Studio (antigo Google Data Studio)."
    },
    {
      question: "Posso personalizar os dashboards?",
      answer: "Claro! Os dashboards são totalmente editáveis. Você pode personalizar cores, logos, métricas e layout."
    },
    {
      question: "E se eu não gostar?",
      answer: "Oferecemos garantia de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro."
    },
    {
      question: "Tem suporte incluído?",
      answer: "Sim! Incluímos acesso à nossa comunidade exclusiva e suporte via WhatsApp."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Banner de Urgência */}
          <div className="card-elevated p-6 mb-12 text-center bg-gradient-to-r from-red-500/10 to-orange-500/10 border-l-4 border-l-red-500">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              🚨 Agora a decisão é sua, mas pense bem: esta oferta é realmente limitada!
            </h2>
            <p className="text-lg text-muted-foreground">
              Apenas para os primeiros 100 pessoas que chegaram até aqui hoje.
            </p>
          </div>

          {/* Cronômetro */}
          <div className="card-elevated p-8 mb-12 text-center">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center justify-center space-x-2">
              <Clock className="w-6 h-6 text-red-500" />
              <span>Oferta expira em:</span>
            </h3>
            
            <div className="flex justify-center space-x-4 mb-6">
              <div className="bg-primary text-white rounded-lg p-4 min-w-[80px]">
                <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-sm">Horas</div>
              </div>
              <div className="bg-primary text-white rounded-lg p-4 min-w-[80px]">
                <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-sm">Minutos</div>
              </div>
              <div className="bg-primary text-white rounded-lg p-4 min-w-[80px]">
                <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-sm">Segundos</div>
              </div>
            </div>
          </div>

          {/* Oferta Principal */}
          <div className="card-elevated p-8 mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Parabéns! Você ganhou <span className="text-gradient">47% de desconto</span>
            </h1>
            
            <div className="mb-8">
              <div className="text-sm text-muted-foreground line-through mb-2">De R$ 297,00 por</div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-4">R$ 147,00</div>
              <div className="text-lg text-muted-foreground">ou 12x de R$ 14,90 sem juros</div>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg mb-8">
              <h4 className="font-bold text-foreground mb-4">📦 Inclui:</h4>
              <ul className="text-left space-y-2 text-foreground">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Acesso vitalício aos 3 dashboards profissionais</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Tutoriais passo a passo para configuração</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Comunidade exclusiva de usuários</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Suporte especializado via WhatsApp</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>BÔNUS: Templates adicionais da versão 1.0</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>BÔNUS: Checklist de otimização de campanhas</span>
                </li>
              </ul>
            </div>

            <button 
              onClick={() => navigate('/thank-you')}
              className="btn-gradient text-xl px-12 py-6 inline-flex items-center space-x-3 animate-pulse-soft mb-6"
            >
              <span>🚀 Quero ter acesso agora!</span>
              <ArrowRight className="w-6 h-6" />
            </button>

            <div className="flex items-center justify-center space-x-2 text-green-600 mb-4">
              <Shield className="w-5 h-5" />
              <span className="text-sm">🛡️ Garantia de 7 dias. Se não amar, devolvemos seu dinheiro.</span>
            </div>

            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <span>⭐ 4.9/5 estrelas</span>
              <span>•</span>
              <span>🔒 Compra segura</span>
              <span>•</span>
              <span>💳 Pix, cartão ou boleto</span>
            </div>
          </div>

          {/* FAQ */}
          <div className="card-elevated p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center flex items-center justify-center space-x-2">
              <HelpCircle className="w-6 h-6" />
              <span>Perguntas Frequentes</span>
            </h3>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-border rounded-lg">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-4 text-left font-semibold text-foreground hover:bg-muted/30 transition-colors rounded-t-lg"
                  >
                    {faq.question}
                  </button>
                  {openFaq === index && (
                    <div className="p-4 border-t border-border bg-muted/10">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Não perca esta oportunidade única! Apenas {String(timeLeft.hours).padStart(2, '0')}h{String(timeLeft.minutes).padStart(2, '0')}m restantes.
            </p>
            
            <button 
              onClick={() => navigate('/thank-you')}
              className="btn-gradient text-xl px-12 py-6 inline-flex items-center space-x-3"
            >
              <span>Garantir meu acesso com 47% OFF</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfertaLimitada;