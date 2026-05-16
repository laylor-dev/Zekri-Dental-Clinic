import { Button } from '../ui/Button';
import { motion } from 'motion/react';
import { ArrowDownRight, Star } from 'lucide-react';
import { useLang } from '../../i18n/LanguageContext';

export function Hero() {
  const { t, isRTL } = useLang();

  return (
    <section className={`relative h-[95vh] min-h-[700px] flex items-center ${isRTL ? 'justify-end' : 'justify-start'} overflow-hidden bg-brand-darker`}>
      {/* Background image with smooth scale animation */}
      <motion.div
        className="absolute inset-0 w-full h-full transform-gpu origin-center"
        initial={{ opacity: 0, scale: 1.12, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)', scale: [1.05, 1.075, 1.05] }}
        transition={{
          opacity: { duration: 1.35, ease: [0.22, 1, 0.36, 1] },
          filter: { duration: 1.35, ease: [0.22, 1, 0.36, 1] },
          scale: { duration: 18, ease: 'easeInOut', repeat: Infinity },
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
          alt="Beautiful smile"
          className={`w-full h-full object-cover ${isRTL ? 'object-[30%_20%]' : 'object-[70%_20%]'} opacity-60`}
        />
        <div className={`absolute inset-0 bg-gradient-to-${isRTL ? 'l' : 'r'} from-brand-darker/95 via-brand-darker/65 to-transparent`} />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/90 via-transparent to-brand-darker/30" />
      </motion.div>

      {/* Gold shimmer line accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold-gradient opacity-60" />

      {/* Central Content */}
      <div
        className={`relative z-10 px-6 lg:px-24 w-full flex flex-col pt-20 h-full justify-center ${isRTL ? 'items-end text-right' : ''}`}
      >
        <div className={`flex w-full justify-between items-end ${isRTL ? 'flex-row-reverse' : ''}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl"
          >
            <div className="relative">
              {/* Decorative Script */}
              <motion.span
                initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className={`font-script text-6xl md:text-8xl lg:text-9xl text-primary opacity-30 absolute -top-16 md:-top-24 ${isRTL ? '-right-8 md:-right-12 rotate-6' : '-left-8 md:-left-12 -rotate-6'} z-[-1]`}
              >
                {t('hero_script')}
              </motion.span>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-sm lg:text-base font-sans tracking-[0.3em] uppercase text-primary mb-4 font-light"
              >
                {t('hero_eyebrow')}
              </motion.p>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl text-white leading-[1.05] mb-8 relative z-10">
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block uppercase tracking-wide"
                >
                  {t('hero_line1')}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.65 }}
                  className="block text-shimmer uppercase tracking-wide"
                >
                  {t('hero_line2')}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="block text-outline uppercase tracking-wide"
                >
                  {t('hero_line3')}
                </motion.span>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className={`flex flex-wrap gap-4 mb-10 items-center ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <a href="#book">
                <Button variant="primary" className="flex items-center gap-3">
                  {t('hero_cta')} <ArrowDownRight size={16} />
                </Button>
              </a>
              <a
                href="https://wa.me/2130550420401"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors text-sm tracking-wider"
              >
                <span className="text-lg">💬</span> WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Realistic Wireframe Tooth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            className={`hidden lg:flex relative w-64 h-64 items-center justify-center ${isRTL ? 'ml-10' : 'mr-10'}`}
          >
            <div className="absolute inset-0 rounded-full bg-[#e8d7a1]/18 blur-[88px] tooth-glow-pulse" />
            <div className="absolute inset-5 rounded-full border border-primary/25" />

            <div className="relative z-10 w-56 h-56 tooth-float">
              <svg
                viewBox="0 0 240 240"
                className="w-full h-full tooth-tilt"
                role="img"
                aria-label="Realistic wireframe tooth"
              >
                <defs>
                  <linearGradient id="meshFront" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fffdf7" stopOpacity="0.98" />
                    <stop offset="52%" stopColor="#f3ead2" stopOpacity="0.82" />
                    <stop offset="100%" stopColor="#d2bf86" stopOpacity="0.68" />
                  </linearGradient>
                  <linearGradient id="meshBack" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e9dcc0" stopOpacity="0.42" />
                    <stop offset="100%" stopColor="#b99f5f" stopOpacity="0.26" />
                  </linearGradient>
                  <filter id="softShadow" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
                    <feOffset dx="0" dy="10" result="offsetblur" />
                    <feComponentTransfer>
                      <feFuncA type="linear" slope="0.35" />
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <g filter="url(#softShadow)">
                  <path
                    d="M120 28c29 0 56 14 71 36 13 19 17 45 9 73-11 37-20 70-40 93-13 15-25 19-40 9-15 10-27 6-40-9-20-23-29-56-40-93-8-28-4-54 9-73 15-22 42-36 71-36z"
                    fill="none"
                    stroke="url(#meshBack)"
                    strokeWidth="1.8"
                    opacity="0.55"
                    transform="translate(8, 6) scale(0.95)"
                  />
                  <g fill="none" stroke="url(#meshFront)" strokeLinecap="round" className="tooth-wire-real">
                    <path d="M120 28c29 0 56 14 71 36 13 19 17 45 9 73-11 37-20 70-40 93-13 15-25 19-40 9-15 10-27 6-40-9-20-23-29-56-40-93-8-28-4-54 9-73 15-22 42-36 71-36z" strokeWidth="2.3" />
                    <path d="M120 28v165" strokeWidth="1.45" opacity="0.9" />
                    <path d="M86 52c11 6 23 10 34 10s23-4 34-10" strokeWidth="1.4" />
                    <path d="M65 88c18 15 37 22 55 22s37-7 55-22" strokeWidth="1.35" />
                    <path d="M57 126c22 17 42 25 63 25s41-8 63-25" strokeWidth="1.3" />
                    <path d="M74 170c16 13 31 18 46 18s30-5 46-18" strokeWidth="1.25" />
                    <path d="M89 60c-5 14-8 30-8 47m78-47c5 14 8 30 8 47" strokeWidth="1.2" opacity="0.75" />
                    <path d="M98 114c-2 16-1 33 3 48m38-48c2 16 1 33-3 48" strokeWidth="1.15" opacity="0.68" />
                  </g>
                </g>
              </svg>
            </div>

            {/* Rotating text label around the crown */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow opacity-40">
              <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text fontSize="7.2" className="uppercase tracking-[0.35em] font-semibold" fill="#c4a44a">
                <textPath href="#circle">{t('hero_badge')}</textPath>
              </text>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Glassmorphism Bottom Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-full lg:w-3/4 glass border-t border-r border-white/10 px-6 lg:px-24 py-4 md:py-6"
      >
        <div className={`flex gap-8 md:gap-16 items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="text-[0.45rem] md:text-[0.55rem] text-brand-beige uppercase tracking-[0.2em] leading-relaxed hidden sm:block opacity-60 max-w-[180px]">
            {t('hero_stat1')}
          </div>
          <div className="flex gap-6 md:gap-10">
            <div className="text-[0.55rem] md:text-[0.65rem] uppercase tracking-widest leading-relaxed">
              <span className="text-primary">136K</span><br />
              <span className="text-white font-semibold">{t('hero_stat2')}</span>
            </div>
            <div className="text-[0.55rem] md:text-[0.65rem] uppercase tracking-widest leading-relaxed">
              <span className="text-primary">500+</span><br />
              <span className="text-white font-semibold">{t('hero_stat3')}</span>
            </div>
            <div className="text-[0.55rem] md:text-[0.65rem] uppercase tracking-widest leading-relaxed">
              <span className="text-primary text-base">✨</span><br />
              <span className="text-white font-semibold">{t('hero_stat4')}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
