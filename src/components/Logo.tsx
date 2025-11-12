import { Building2, Sparkles } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'colored';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ variant = 'colored', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { icon: 'h-5 w-5', text: 'text-lg', subtext: 'text-[9px]', container: 'space-x-2', iconPadding: 'p-1.5' },
    md: { icon: 'h-6 w-6', text: 'text-2xl', subtext: 'text-[10px]', container: 'space-x-2.5', iconPadding: 'p-2' },
    lg: { icon: 'h-10 w-10', text: 'text-4xl', subtext: 'text-xs', container: 'space-x-3', iconPadding: 'p-3' }
  };

  const variants = {
    light: 'text-white',
    dark: 'text-gray-900',
    colored: 'text-blue-600'
  };

  return (
    <div className={`flex items-center ${sizes[size].container} group cursor-pointer relative`}>
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-xl blur opacity-40 group-hover:opacity-70 transition duration-500 group-hover:duration-200 animate-pulse"></div>
        <div className={`relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 ${sizes[size].iconPadding} rounded-xl shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ring-2 ring-blue-400/50`}>
          <Building2 className={`${sizes[size].icon} text-white drop-shadow-lg`} strokeWidth={2.5} />
          <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-yellow-300 animate-pulse" />
        </div>
      </div>
      <div className="flex flex-col leading-none relative">
        <div className="relative">
          <span className={`${sizes[size].text} font-black tracking-tighter ${variants[variant]} transition-colors duration-300 relative z-10`}
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              textShadow: variant === 'light' ? '0 2px 10px rgba(0,0,0,0.3)' : 'none'
            }}>
            OGS
          </span>
          {variant === 'colored' && (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-sm"></div>
          )}
        </div>
        <div className="flex items-center space-x-1">
          <span className={`${sizes[size].subtext} font-bold tracking-[0.2em] uppercase ${
            variant === 'light' ? 'text-blue-200' : 'text-blue-600'
          } transition-colors duration-300`}
            style={{
              letterSpacing: '0.15em'
            }}>
            Solution
          </span>
          <div className={`h-1 w-1 rounded-full ${
            variant === 'light' ? 'bg-blue-300' : 'bg-blue-500'
          } animate-pulse`}></div>
        </div>
      </div>
    </div>
  );
}
