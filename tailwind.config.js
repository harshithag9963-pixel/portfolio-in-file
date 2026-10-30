/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#070a0e',
          900: '#0d1117', // Base deep matte carbon
          850: '#111620',
          800: '#161b22', // Card & frosted overlay surface
          700: '#21262d',
          600: '#30363d',
        },
        emerald: {
          neon: '#10b981',
          glow: '#059669',
          accent: '#34d399',
        },
        lime: {
          neon: '#a3e635',
          bright: '#84cc16',
          cyber: '#bef264',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
        sans: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'emerald-glow': '0 0 25px -4px rgba(16, 185, 129, 0.45)',
        'emerald-glow-lg': '0 0 45px -5px rgba(16, 185, 129, 0.55)',
        'lime-glow': '0 0 20px -3px rgba(163, 230, 53, 0.4)',
        'cyber-card': '0 8px 32px 0 rgba(0, 0, 0, 0.55), inset 0 1px 0 0 rgba(16, 185, 129, 0.15)',
      },
      animation: {
        'radar-ping': 'radarPing 2.2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'subtle-pulse': 'subtlePulse 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        radarPing: {
          '75%, 100%': {
            transform: 'scale(2.4)',
            opacity: '0',
          },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.35' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}

