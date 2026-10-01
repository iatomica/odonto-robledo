import React from 'react';

interface BrandLogoProps {
  variant?: 'white' | 'black' | 'default' | 'symbol';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'default',
  className = '',
  size = 'md'
}) => {
  const isWhite = variant === 'white';
  const isSymbol = variant === 'symbol';
  
  let logoSrc = '/logos/md-logo.svg';
  if (isSymbol) {
    logoSrc = '/logos/md-symbol.svg';
  } else if (isWhite) {
    logoSrc = '/logos/md-logo-white.svg';
  }

  const sizeClasses = {
    sm: 'h-8 sm:h-9 w-auto',
    md: 'h-10 sm:h-12 w-auto',
    lg: 'h-14 sm:h-16 w-auto',
    hero: 'h-16 sm:h-20 w-auto'
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="MD Odontología - Health & Esthetics | Dra. Inés Escuder · Dr. Ray Miranda"
        className={`${sizeClasses[size]} max-w-full object-contain transition-transform duration-300 hover:scale-[1.02]`}
        style={isWhite ? { filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.25))' } : undefined}
      />
    </div>
  );
};
