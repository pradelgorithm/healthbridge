'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '', 
  size = 'md' 
}) => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className={`btn btn-ghost btn-circle ${size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : ''} ${className}`}
        disabled
      >
        <Sun className="w-5 h-5 opacity-50" />
      </button>
    );
  }

  const isDark = theme === 'healthbridge-dark';

  const sizeClasses = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg'
  };

  return (
    <button
      onClick={toggleTheme}
      className={`btn btn-ghost btn-circle ${sizeClasses[size]} ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="swap swap-rotate">
        <input 
          type="checkbox" 
          checked={isDark}
          onChange={() => {}} // Controlled by button click
          className="hidden"
        />
        
        {/* Sun icon */}
        <Sun 
          className={`swap-off w-5 h-5 transition-transform duration-300 ${
            isDark ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
          }`} 
        />
        
        {/* Moon icon */}
        <Moon 
          className={`swap-on w-5 h-5 transition-transform duration-300 ${
            isDark ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
          }`} 
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
