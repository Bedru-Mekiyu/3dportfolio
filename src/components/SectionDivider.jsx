/**
 * Signature section dividers for unique visual identity
 * Use between major sections to create memorable transitions
 */

const SectionDivider = ({ variant = 'wave', className = '' }) => {
  const variants = {
    wave: (
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <path
          d="M0 60C160 60 160 20 320 20C480 20 480 60 640 60C800 60 800 100 960 100C1120 100 1120 60 1280 60C1440 60 1440 40 1440 40V120H0V60Z"
          fill="url(#wave-gradient)"
          opacity="0.5"
        />
        <path
          d="M0 80C200 80 200 40 400 40C600 40 600 80 800 80C1000 80 1000 50 1200 50C1400 50 1400 70 1440 70V120H0V80Z"
          fill="url(#wave-gradient-2)"
          opacity="0.3"
        />
        <defs>
          <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="120">
            <stop offset="0%" stopColor="#cd7c2e" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#ffb347" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#45ded4" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="0" y1="0" x2="1440" y2="120">
            <stop offset="0%" stopColor="#45ded4" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#cd7c2e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffb347" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    ),
    curve: (
      <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <path
          d="M0 100C320 80 480 20 720 20C960 20 1120 80 1440 100V100H0V100Z"
          fill="url(#curve-gradient)"
          opacity="0.4"
        />
        <path
          d="M0 100C240 90 360 50 720 50C1080 50 1200 90 1440 100V100H0V100Z"
          fill="url(#curve-gradient-2)"
          opacity="0.2"
        />
        <defs>
          <linearGradient id="curve-gradient" x1="0" y1="0" x2="1440" y2="100">
            <stop offset="0%" stopColor="#cd7c2e" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6d45ce" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="curve-gradient-2" x1="0" y1="0" x2="1440" y2="100">
            <stop offset="0%" stopColor="#6d45ce" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#cd7c2e" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    ),
    mountain: (
      <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <path
          d="M0 150L160 80L320 120L480 50L640 100L800 30L960 90L1120 40L1280 100L1440 60V150H0Z"
          fill="url(#mountain-gradient)"
          opacity="0.3"
        />
        <path
          d="M0 150L200 100L400 140L600 70L800 120L1000 50L1200 110L1400 80L1440 100V150H0Z"
          fill="url(#mountain-gradient-2)"
          opacity="0.2"
        />
        <defs>
          <linearGradient id="mountain-gradient" x1="0" y1="0" x2="1440" y2="150">
            <stop offset="0%" stopColor="#cd7c2e" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#ffb347" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#52aeff" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="mountain-gradient-2" x1="0" y1="0" x2="1440" y2="150">
            <stop offset="0%" stopColor="#52aeff" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#cd7c2e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#45ded4" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    ),
    fade: (
      <div className="w-full h-20 bg-gradient-to-b from-transparent via-[#050507]/50 to-[#050507]" />
    ),
    dots: (
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <pattern id="dots-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="2" fill="#cd7c2e" opacity="0.3" />
        </pattern>
        <rect width="1440" height="80" fill="url(#dots-pattern)" />
        <rect width="1440" height="80" fill="url(#dots-fade)" />
        <defs>
          <linearGradient id="dots-fade" x1="720" y1="0" x2="720" y2="80">
            <stop offset="0%" stopColor="#050507" stopOpacity="0" />
            <stop offset="100%" stopColor="#050507" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>
    ),
  };

  return (
    <div className={`section-divider ${className}`} style={{ minHeight: 'var(--divider-height, 100px)' }}>
      {variants[variant] || variants.wave}
    </div>
  );
};

export default SectionDivider;
