import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

interface MediaImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackLabel?: string;
  priority?: boolean;
}

/**
 * Production-resilient image wrapper that uses bundled Vite asset URLs,
 * smooth opacity transitions on decode, and an architectural fallback frame
 * if network interruption prevents loading.
 */
export const MediaImage: React.FC<MediaImageProps> = ({
  src,
  alt,
  fallbackLabel,
  priority = false,
  className = '',
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#30202D] text-[#F6F2EB] p-6 text-center select-none relative overflow-hidden ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:20px_20px]" />
        <Building2 className="w-7 h-7 text-[#A65D67] mb-2 relative z-10" />
        <span className="font-serif text-sm tracking-wide text-white relative z-10">
          {fallbackLabel || 'RSVP ROSES LLC'}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400 mt-1 relative z-10 line-clamp-2 max-w-xs">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      onLoad={() => setIsLoaded(true)}
      onError={() => setHasError(true)}
      className={`${className} transition-opacity duration-500 ${
        isLoaded ? 'opacity-100' : 'opacity-95'
      }`}
      {...rest}
    />
  );
};
