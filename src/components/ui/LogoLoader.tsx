interface LogoLoaderProps {
  exiting?: boolean;
}

export function LogoLoader({ exiting = false }: LogoLoaderProps) {
  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-brand-light logo-loader-shell ${exiting ? 'is-exiting' : ''}`}>
      <div className="logo-loader-ambient" />
      <div className="flex flex-col items-center gap-6 logo-loader-content">
        <svg
          viewBox="0 0 220 220"
          className="w-36 h-36 sm:w-44 sm:h-44"
          role="img"
          aria-label="Loading Zekri Dental Clinic"
        >
          <defs>
            <linearGradient id="loaderRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f0d080" />
              <stop offset="55%" stopColor="#c4a44a" />
              <stop offset="100%" stopColor="#8e742d" />
            </linearGradient>
            <clipPath id="logoCircleClip">
              <circle cx="110" cy="110" r="48" />
            </clipPath>
          </defs>

          <circle cx="110" cy="110" r="73" fill="none" stroke="#d8cba7" strokeWidth="2" className="logo-loader-track" />
          <circle
            cx="110"
            cy="110"
            r="73"
            fill="none"
            stroke="url(#loaderRingGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="340 130"
            className="logo-loader-ring"
          />

          <g clipPath="url(#logoCircleClip)">
            <image
              href="/Assets/logo.png"
              x="58"
              y="58"
              width="104"
              height="104"
              preserveAspectRatio="xMidYMid slice"
              className="logo-loader-image"
            />
          </g>
          <circle
            cx="110"
            cy="110"
            r="48"
            fill="none"
            stroke="rgba(26,22,16,0.12)"
            strokeWidth="1.5"
          />
        </svg>

        <div className="text-center">
          <p className="font-serif text-brand-dark text-xl sm:text-2xl tracking-wide logo-loader-title">Zekri Dental Clinic</p>
          <p className="text-primary text-[11px] sm:text-xs tracking-[0.32em] uppercase mt-1">عيادة زكري لطب الأسنان</p>
        </div>
      </div>
    </div>
  );
}
