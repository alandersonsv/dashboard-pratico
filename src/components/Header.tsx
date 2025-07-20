import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  const handleLanguageChange = (lang: 'pt' | 'en') => {
    setLanguage(lang);
    if (lang === 'en') {
      navigate('/home-en');
    } else {
      navigate('/');
    }
  };

  const handleLogoClick = () => {
    if (language === 'en') {
      navigate('/home-en');
    } else {
      navigate('/');
    }
  };

  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={handleLogoClick}>
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">LS</span>
          </div>
          <span className="font-bold text-lg text-foreground">LookerDash</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-muted rounded-lg p-1">
            <button
              onClick={() => handleLanguageChange('pt')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-base flex items-center space-x-1 ${
                language === 'pt' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span className="text-xs">🇧🇷</span>
              <span>PT</span>
            </button>
            <button
              onClick={() => handleLanguageChange('en')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-base flex items-center space-x-1 ${
                language === 'en' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span className="text-xs">🇺🇸</span>
              <span>🇺🇸 EN</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
