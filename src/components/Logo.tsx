interface LogoProps {
  variant?: 'light' | 'dark' | 'colored';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ variant = 'colored', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { height: '32px' },
    md: { height: '48px' },
    lg: { height: '64px' }
  };

  const getLogoColor = () => {
    switch (variant) {
      case 'light':
        return 'brightness-0 invert';
      case 'dark':
        return 'brightness-0';
      case 'colored':
        return 'brightness-0 invert sepia saturate-[300%] hue-rotate-190deg brightness-90';
      default:
        return '';
    }
  };

  return (
    <div className="flex items-center group cursor-pointer relative">
      <svg
        height={sizes[size].height}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-all duration-300 group-hover:scale-105 ${getLogoColor()}`}
        style={{
          filter: variant === 'colored'
            ? `${getLogoColor()} drop-shadow(0 4px 12px rgba(37, 99, 235, 0.4))`
            : variant === 'light'
            ? `${getLogoColor()} drop-shadow(0 4px 12px rgba(255, 255, 255, 0.3))`
            : `${getLogoColor()} drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15))`,
          width: 'auto'
        }}
      >
        {/* OGS Logo - Recreated from your image with geometric precision */}
        <g transform="translate(50, 100)">
          {/* Letter O */}
          <path
            d="M 0,50 L 20,35 L 60,35 L 80,50 L 80,200 L 60,215 L 20,215 L 0,200 Z
               M 30,60 L 30,190 L 50,190 L 50,60 Z"
            fill="currentColor"
          />

          {/* Letter G */}
          <path
            d="M 110,50 L 130,35 L 170,35 L 190,50 L 190,125 L 150,125 L 150,145 L 190,145 L 190,200 L 170,215 L 130,215 L 110,200 Z
               M 140,60 L 140,95 L 160,95 L 160,190 L 140,190 L 140,60 Z"
            fill="currentColor"
          />

          {/* Letter S */}
          <path
            d="M 220,50 L 240,35 L 320,35 L 340,50 L 340,90 L 320,105 L 270,105 L 250,120 L 250,160 L 270,145 L 320,145 L 340,160 L 340,200 L 320,215 L 240,215 L 220,200 L 220,160 L 240,145 L 290,145 L 310,130 L 310,90 L 290,105 L 240,105 L 220,90 Z"
            fill="currentColor"
          />
        </g>
      </svg>

      {/* Animated glow effect for colored variant */}
      {variant === 'colored' && (
        <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-600/30 rounded-xl blur-2xl animate-pulse"></div>
        </div>
      )}
    </div>
  );
}
