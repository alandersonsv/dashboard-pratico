import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, BarChart3, TrendingUp, Target, Zap } from 'lucide-react';

const HomeEN: React.FC = () => {
  const navigate = useNavigate();
  
  const benefits = [
    { icon: CheckCircle, text: 'No monthly fees' },
    { icon: Target, text: '100% customizable' },
    { icon: Zap, text: 'Ready to use' },
    { icon: TrendingUp, text: 'Instant access' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Ready-to-Use <span className="text-gradient">Looker Studio</span> Dashboards
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Turn your data into decisions with professional, 100% editable templates.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center space-y-3 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-button">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => navigate('/quiz-part1')} 
            className="btn-gradient text-lg px-12 py-6 inline-flex items-center space-x-3 animate-pulse-soft"
          >
            <span>🚀 I want to save time in my day</span>
            <ArrowRight className="w-6 h-6" />
          </button>
          
          {/* Microcopy */}
          <p className="text-center text-sm text-muted-foreground mt-3">
            🕒 Takes less than 5 minutes
          </p>
        </div>
      </section>

      {/* Dashboard Gallery Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-4">
            Explore Dashboards in Action
          </h3>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Swipe to see how automated reports can save hours of your day.
          </p>
          
          {/* Horizontal Gallery */}
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
            <div className="flex-shrink-0 w-80 md:w-96 snap-start">
              <div className="card-elevated h-64 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">📱</div>
                  <h4 className="font-semibold text-lg mb-2">Meta Ads Dashboard</h4>
                  <p className="text-sm text-muted-foreground">ROI, audiences and performance metrics</p>
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0 w-80 md:w-96 snap-start">
              <div className="card-elevated h-64 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">🔍</div>
                  <h4 className="font-semibold text-lg mb-2">Google Ads Dashboard</h4>
                  <p className="text-sm text-muted-foreground">Keywords, quality score and conversions</p>
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0 w-80 md:w-96 snap-start">
              <div className="card-elevated h-64 bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h4 className="font-semibold text-lg mb-2">Google Analytics Dashboard</h4>
                  <p className="text-sm text-muted-foreground">User behavior and conversion funnels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeEN;