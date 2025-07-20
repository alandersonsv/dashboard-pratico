import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, CheckCircle } from 'lucide-react';

const Decisao: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <div className="card-elevated p-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Gostaria de ter acesso vitalício aos nossos dashboards com aulas de configuração e edição?
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Chegou o momento da decisão. Escolha como você gostaria de prosseguir:
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Demonstração */}
            <div className="card-elevated p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Play className="w-10 h-10 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                Ver demonstração primeiro
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Prefere ver exatamente como funciona antes de decidir? 
                Assista nossa demonstração completa.
              </p>
              
              <ul className="text-sm text-muted-foreground space-y-2 mb-8">
                <li>✓ Vídeo de 10 minutos</li>
                <li>✓ Mostraremos todos os recursos</li>
                <li>✓ Casos reais de uso</li>
                <li>✓ Sem compromisso</li>
              </ul>

              <button 
                onClick={() => navigate('/demonstracao')}
                className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>💻 Quero uma demonstração</span>
              </button>
            </div>

            {/* Decisão */}
            <div className="card-elevated p-8 hover:shadow-xl transition-all duration-300 group border-2 border-primary/20">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                Já estou decidido!
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Perfeito! Você já viu o suficiente e está pronto para 
                ter acesso aos dashboards agora mesmo.
              </p>
              
              <ul className="text-sm text-muted-foreground space-y-2 mb-8">
                <li>✓ Acesso imediato</li>
                <li>✓ Oferta especial limitada</li>
                <li>✓ Bônus exclusivos</li>
                <li>✓ Garantia de 7 dias</li>
              </ul>

              <button 
                onClick={() => navigate('/oferta-limitada')}
                className="w-full py-4 px-6 btn-gradient font-semibold transition-colors flex items-center justify-center space-x-2 text-lg"
              >
                <CheckCircle className="w-5 h-5" />
                <span>🤝 Sim, já estou decidido!</span>
              </button>
            </div>
          </div>

          {/* Confiança */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              🔒 Compra 100% segura • 🛡️ Garantia de 7 dias • 💳 Processamento seguro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decisao;