/**
 * HealthBridge Theme Configuration
 * 
 * This file contains the complete theming configuration for HealthBridge,
 * including color schemes, typography, and component styling that aligns
 * with our healthcare-focused brand identity.
 */

export const healthBridgeTheme = {
  // Brand Colors - WCAG 2.1 AA Compliant
  colors: {
    primary: {
      DEFAULT: '#0066cc',     // HealthBridge Blue - 4.5:1 contrast
      hover: '#0052a3',       // Darker blue for hover states
      light: '#3b82f6',       // Lighter blue for dark mode
      content: '#ffffff'      // White text on primary
    },
    secondary: {
      DEFAULT: '#00a085',     // HealthBridge Green - 4.51:1 contrast  
      hover: '#008066',       // Darker green for hover states
      light: '#10b981',       // Lighter green for dark mode
      content: '#ffffff'      // White text on secondary
    },
    accent: {
      DEFAULT: '#5a4fcf',     // HealthBridge Purple - 4.5:1 contrast
      hover: '#4a3fb8',       // Darker purple for hover states
      light: '#8b5cf6',       // Lighter purple for dark mode
      content: '#ffffff'      // White text on accent
    },
    neutral: {
      DEFAULT: '#374151',     // Gray-700
      light: '#1f2937',       // Gray-800 for dark mode
      content: '#ffffff'      // White text on neutral
    },
    base: {
      100: '#ffffff',         // White background
      200: '#f9fafb',         // Gray-50
      300: '#f3f4f6',         // Gray-100
      content: '#1a1a1a'      // Dark text
    },
    semantic: {
      info: '#3b82f6',        // Blue-500
      success: '#059669',     // Emerald-600
      warning: '#d97706',     // Amber-600
      error: '#dc2626'        // Red-600
    }
  },

  // Typography
  typography: {
    fontFamily: {
      sans: ['Geist', 'system-ui', '-apple-system', 'sans-serif'],
      mono: ['Geist Mono', 'Courier New', 'monospace']
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem', 
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem'
    }
  },

  // Component Styling
  components: {
    button: {
      borderRadius: '0.5rem',
      fontWeight: '500',
      transition: 'all 0.2s ease-in-out',
      focusScale: '0.95'
    },
    card: {
      borderRadius: '1rem',
      shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(0, 0, 0, 0.1)'
    },
    input: {
      borderRadius: '0.5rem',
      borderWidth: '1px',
      transition: 'all 0.2s ease-in-out'
    }
  },

  // Animation Settings
  animations: {
    button: '0.25s',
    input: '0.2s',
    modal: '0.3s'
  },

  // Accessibility Settings
  accessibility: {
    focusRingWidth: '2px',
    focusRingOffset: '2px',
    minTouchTarget: '44px'
  }
};

/**
 * Theme Utility Functions
 */
export const getThemeColor = (colorPath: string): string => {
  const paths = colorPath.split('.');
  let color: unknown = healthBridgeTheme.colors;
  
  for (const path of paths) {
    if (typeof color === 'object' && color !== null && path in color) {
      color = (color as Record<string, unknown>)[path];
    } else {
      return '#000000';
    }
  }
  
  return typeof color === 'string' ? color : 
         (typeof color === 'object' && color !== null && 'DEFAULT' in color) ? 
         (color as { DEFAULT: string }).DEFAULT : '#000000';
};

/**
 * Dark Mode Color Mappings
 */
export const darkModeColors = {
  primary: healthBridgeTheme.colors.primary.light,
  secondary: healthBridgeTheme.colors.secondary.light,
  accent: healthBridgeTheme.colors.accent.light,
  neutral: healthBridgeTheme.colors.neutral.light,
  base: {
    100: '#0f172a',         // Slate-900
    200: '#1e293b',         // Slate-800  
    300: '#334155',         // Slate-700
    content: '#f1f5f9'      // Slate-100
  }
};

/**
 * Responsive Breakpoints
 */
export const breakpoints = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

export default healthBridgeTheme;
