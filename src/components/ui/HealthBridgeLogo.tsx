import React from 'react';

interface HealthBridgeLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  variant?: 'default' | 'white' | 'dark';
}

const HealthBridgeLogo: React.FC<HealthBridgeLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  variant = 'default'
}) => {
  const sizeClasses = {
    xs: { icon: 'h-6 w-6', text: 'text-sm' },
    sm: { icon: 'h-8 w-8', text: 'text-base' },
    md: { icon: 'h-10 w-10', text: 'text-xl' },
    lg: { icon: 'h-12 w-12', text: 'text-2xl' },
    xl: { icon: 'h-16 w-16', text: 'text-3xl' }
  };

  const colorClasses = {
    default: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      accent: 'var(--color-accent)',
      text: 'text-base-content'
    },
    white: {
      primary: '#ffffff',
      secondary: '#ffffff',
      accent: '#ffffff',
      text: 'text-white'
    },
    dark: {
      primary: '#1a1a1a',
      secondary: '#374151',
      accent: '#6b7280',
      text: 'text-gray-900'
    }
  };

  const colors = colorClasses[variant];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon - Smartwatch with Health Cross */}
      <div className={`${sizeClasses[size].icon} relative flex items-center justify-center`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          role="img"
          aria-label="HealthBridge logo - smartwatch with health cross and data connections"
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id={`watchGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.secondary} />
              <stop offset="100%" stopColor={colors.primary} />
            </linearGradient>
            <linearGradient id={`crossGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary} />
              <stop offset="100%" stopColor={colors.accent} />
            </linearGradient>
            <radialGradient id={`glowGradient-${variant}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={colors.primary} stopOpacity="0.2" />
              <stop offset="100%" stopColor={colors.primary} stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Glow */}
          <circle cx="20" cy="20" r="18" fill={`url(#glowGradient-${variant})`} />
          
          {/* Watch Band */}
          <path
            d="M8 12C8 10.8954 8.89543 10 10 10H14V6C14 4.89543 14.8954 4 16 4H24C25.1046 4 26 4.89543 26 6V10H30C31.1046 10 32 10.8954 32 12V28C32 29.1046 31.1046 30 30 30H26V34C26 35.1046 25.1046 36 24 36H16C14.8954 36 14 35.1046 14 34V30H10C8.89543 30 8 29.1046 8 28V12Z"
            fill={`url(#watchGradient-${variant})`}
            className="drop-shadow-sm"
          />
          
          {/* Watch Screen */}
          <rect
            x="12"
            y="12"
            width="16"
            height="16"
            rx="2"
            fill={variant === 'dark' ? '#f8fafc' : '#ffffff'}
            stroke={variant === 'white' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.1)'}
            strokeWidth="0.5"
          />
          
          {/* Health Cross Icon */}
          <g transform="translate(20, 20)">
            {/* Vertical bar */}
            <rect
              x="-1"
              y="-4"
              width="2"
              height="8"
              rx="1"
              fill={`url(#crossGradient-${variant})`}
            />
            {/* Horizontal bar */}
            <rect
              x="-4"
              y="-1"
              width="8"
              height="2"
              rx="1"
              fill={`url(#crossGradient-${variant})`}
            />
          </g>
          
          {/* Data Connection Indicators */}
          <g opacity="0.8">
            {/* Top connections */}
            <circle cx="14" cy="8" r="1" fill={colors.accent}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="18" cy="7" r="0.8" fill={colors.primary}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="0.5s" />
            </circle>
            <circle cx="22" cy="7" r="0.8" fill={colors.secondary}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="1s" />
            </circle>
            <circle cx="26" cy="8" r="1" fill={colors.accent}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="1.5s" />
            </circle>
            
            {/* Bottom connections */}
            <circle cx="14" cy="32" r="1" fill={colors.secondary}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="0.2s" />
            </circle>
            <circle cx="18" cy="33" r="0.8" fill={colors.accent}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="0.7s" />
            </circle>
            <circle cx="22" cy="33" r="0.8" fill={colors.primary}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="1.2s" />
            </circle>
            <circle cx="26" cy="32" r="1" fill={colors.secondary}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="1.7s" />
            </circle>
          </g>

          {/* Connection Lines */}
          <g stroke={colors.primary} strokeWidth="0.5" strokeDasharray="1,1" opacity="0.4">
            <line x1="14" y1="8" x2="20" y2="20">
              <animate attributeName="stroke-dashoffset" values="0;4" dur="2s" repeatCount="indefinite" />
            </line>
            <line x1="26" y1="8" x2="20" y2="20">
              <animate attributeName="stroke-dashoffset" values="0;4" dur="2s" repeatCount="indefinite" begin="0.5s" />
            </line>
            <line x1="14" y1="32" x2="20" y2="20">
              <animate attributeName="stroke-dashoffset" values="0;4" dur="2s" repeatCount="indefinite" begin="1s" />
            </line>
            <line x1="26" y1="32" x2="20" y2="20">
              <animate attributeName="stroke-dashoffset" values="0;4" dur="2s" repeatCount="indefinite" begin="1.5s" />
            </line>
          </g>
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <span 
            className={`font-bold tracking-tight ${sizeClasses[size].text} ${variant === 'default' ? 'gradient-text' : colors.text}`}
          >
            HealthBridge
          </span>
          {size !== 'xs' && size !== 'sm' && (
            <span className={`text-xs font-medium tracking-wide ${variant === 'default' ? 'text-base-content/60' : colors.text} opacity-75`}>
              Connect. Track. Care.
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default HealthBridgeLogo;
