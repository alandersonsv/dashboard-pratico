import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, className = '' }) => {
  const percentage = (current / total) * 100;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between text-sm text-muted-foreground mb-2">
        <span>Passo {current} de {total}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className="bg-gradient-primary h-2 rounded-full transition-smooth"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
