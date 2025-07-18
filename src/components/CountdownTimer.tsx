import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  initialMinutes?: number;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  initialMinutes = 15, 
  className = '' 
}) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      <Clock className="w-5 h-5 text-warning" />
      <div className="bg-warning/10 text-warning px-4 py-2 rounded-lg font-mono font-bold">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
    </div>
  );
};

export default CountdownTimer;