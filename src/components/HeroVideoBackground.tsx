import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { MEDIA_ASSETS } from '../assets/media';
import { MediaImage } from './MediaImage';

interface HeroVideoBackgroundProps {
  posterImage?: string;
  videoSrc?: string;
}

export const HeroVideoBackground: React.FC<HeroVideoBackgroundProps> = ({
  posterImage = MEDIA_ASSETS.images.heroCorporateFacility,
  videoSrc = MEDIA_ASSETS.videos.heroBackground,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Initialize video playback & respect prefers-reduced-motion
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (videoEl.readyState >= 2) {
      setIsLoaded(true);
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      videoEl.pause();
      setIsPlaying(false);
    } else {
      videoEl
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Browser power-saver or autoplay policy blocked initial play; keep static poster visible
          setIsPlaying(false);
        });
    }
  }, [videoSrc]);

  const togglePlay = () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (!videoEl.paused) {
      videoEl.pause();
      setIsPlaying(false);
    } else {
      videoEl
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* 1. Static Bundled Poster Base Layer (ensures zero flash before first video frame) */}
      <MediaImage
        src={posterImage}
        alt="Corporate and government facility architecture"
        priority
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
          isLoaded && !hasError ? 'opacity-20' : 'opacity-40'
        }`}
        aria-hidden="true"
      />

      {/* 2. Vite-Bundled Background Video */}
      {!hasError && (
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={posterImage}
          onLoadedData={() => setIsLoaded(true)}
          onCanPlay={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            isLoaded ? 'opacity-45 scale-100' : 'opacity-0 scale-105'
          }`}
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* 3. Measured Deep Aubergine & Vignette Color Grading Scrims */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#30202D] via-[#30202D]/90 to-[#30202D]/65"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-[#30202D] via-transparent to-[#30202D]/80"
        aria-hidden="true"
      />

      <div
        className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-[#A65D67]/15 rounded-full blur-3xl"
        aria-hidden="true"
      />

      {/* 4. Subtle Architectural Precision Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:28px_28px]"
        aria-hidden="true"
      />

      {/* 5. Interactive Video Play/Pause Control */}
      {!hasError && (
        <div className="absolute bottom-5 right-6 pointer-events-auto z-20">
          <button
            type="button"
            onClick={togglePlay}
            className="flex items-center gap-2 px-2.5 py-1.5 bg-[#30202D]/80 hover:bg-[#30202D] backdrop-blur-md border border-white/15 text-stone-300 hover:text-white text-[10px] font-mono tracking-wider transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A65D67]"
            title={isPlaying ? 'Pause background video' : 'Play background video'}
            aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
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
