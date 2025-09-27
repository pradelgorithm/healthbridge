import React from 'react';
import HealthBridgeLogo from './HealthBridgeLogo';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  variant?: 'default' | 'white' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  showText = true, 
  className = '',
  variant = 'default'
}) => {
  // Convert old size format to new format
  const newSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md';
  
  return (
    <HealthBridgeLogo 
      size={newSize}
      showText={showText}
      className={className}
      variant={variant}
    />
  );
};

export default Logo;
