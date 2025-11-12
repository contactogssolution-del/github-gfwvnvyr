import { Building2 } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'colored';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ variant = 'colored', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { icon: 'h-6 w-6', text: 'text-lg', container: 'space-x-1.5' },
    md: { icon: 'h-8 w-8', text: 'text-2xl', container: 'space-x-2' },
    lg: { icon: 'h-12 w-12', text: 'text-4xl', container: 'space-x-3' }
  };

  const variants = {
    light: 'text-white',
    dark: 'text-gray-900',
    colored: 'text-blue-600'
  };

  return (
    <div className={`flex items-center ${sizes[size].container} group cursor-pointer`}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
        <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 p-1.5 rounded-lg shadow-lg transform group-hover:scale-110 transition-transform duration-300">
          <Building2 className={`${sizes[size].icon} text-white`} strokeWidth={2.5} />
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`${sizes[size].text} font-bold tracking-tight ${variants[variant]} transition-colors duration-300`}>
          OGS
        </span>
        <span className={`text-xs font-semibold tracking-wider uppercase ${
          variant === 'light' ? 'text-blue-200' : 'text-blue-500'
        } transition-colors duration-300`}>
          Solution
        </span>
      </div>
    </div>
  );
}
