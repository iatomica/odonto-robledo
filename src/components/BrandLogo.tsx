import React from 'react';

interface BrandLogoProps {
  variant?: 'white' | 'black' | 'default';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'default',
  className = '',
  size = 'md'
}) => {
  const isWhite = variant === 'white';
  const logoSrc = isWhite 
    ? '/logos/centro-odontologico-robledo-white.png' 
    : '/logos/centro-odontologico-robledo-black.png';

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
        alt="Centro Odontológico Robledo - Dra. Trinidad Robledo"
        className={`${sizeClasses[size]} max-w-full object-contain transition-transform duration-300 hover:scale-[1.02]`}
        style={isWhite ? { filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' } : undefined}
      />
    </div>
  );
};
