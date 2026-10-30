import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface HeroVideoBackgroundProps {
  posterImage: string;
}

export const HeroVideoBackground: React.FC<HeroVideoBackgroundProps> = ({ posterImage }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* 1. Background Video or Fallback Image */}
      {!hasError && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={posterImage}
          onLoadedData={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${
            isLoaded ? 'opacity-45 scale-100' : 'opacity-0 scale-105'
          }`}
          aria-hidden="true"
        >
          <source src="/assets/videos/hero_background.mp4" type="video/mp4" />
        </video>
      )}

      {/* Static Fallback Poster if Video has error or not yet loaded */}
      {(!isLoaded || hasError) && (
        <img
          src={posterImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 transition-opacity duration-700"
          aria-hidden="true"
          referrerPolicy="no-referrer"
        />
      )}

      {/* 2. Measured Deep Aubergine & Vignette Color Grading Scrims */}
      {/* Primary horizontal gradient ensuring headline legibility on the left */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#30202D] via-[#30202D]/90 to-[#30202D]/65" 
        aria-hidden="true" 
      />

      {/* Vertical top and bottom gradients for seamless header and snapshot strip transitions */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-[#30202D] via-transparent to-[#30202D]/80" 
        aria-hidden="true" 
      />

      {/* Subtle warm rosewood atmospheric tint on the right corner */}
      <div 
        className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-[#A65D67]/15 rounded-full blur-3xl" 
        aria-hidden="true" 
      />

      {/* 3. Subtle Architectural Precision Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:28px_28px]" 
        aria-hidden="true" 
      />

      {/* 4. Interactive Video Play/Pause Control (pointer-events enabled) */}
      {!hasError && (
        <div className="absolute bottom-5 right-6 pointer-events-auto z-20">
          <button
            onClick={togglePlay}
            className="flex items-center gap-2 px-2.5 py-1.5 bg-[#30202D]/80 hover:bg-[#30202D] backdrop-blur-md border border-white/15 text-stone-300 hover:text-white text-[10px] font-mono tracking-wider transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A65D67]"
            title={isPlaying ? "Pause background video" : "Play background video"}
            aria-label={isPlaying ? "Pause background video" : "Play background video"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3 h-3 text-[#A65D67]" />
                <span className="hidden sm:inline">LIVE BACKGROUND</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-stone-400" />
                <span className="hidden sm:inline">PAUSED</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
