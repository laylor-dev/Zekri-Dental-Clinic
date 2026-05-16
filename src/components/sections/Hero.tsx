import { Button } from '../ui/Button';
import { motion } from 'motion/react';
import { ArrowDownRight, ArrowDownLeft, Star } from 'lucide-react';
import { useLang } from '../../i18n/LanguageContext';

export function Hero() {
  const { t, lang, isRTL } = useLang();

  const heroImg = lang === 'ar' ? '/Assets/hero_arabic.png' : '/Assets/hero_desktop.png';

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-brand-darker"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold-gradient opacity-80 z-20" />

      {/* ─── DESKTOP ─── */}
      <div className="hidden md:block">
        {/* Background banner image */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: [1.02, 1.04, 1.02] }}
          transition={{
            opacity: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 22, ease: 'easeInOut', repeat: Infinity },
          }}
        >
          <img
            src={heroImg}
            alt="Zekri Dental Clinic"
            className="w-full h-full object-cover object-top"
            style={{ minHeight: '100vh' }}
          />
          {/*
            Gradient covers the TEXT side:
            - LTR (FR/EN): text on LEFT  → gradient from-left  → to-r from-brand-darker/95 to-transparent
            - RTL (AR):    text on RIGHT → gradient from-right → to-l from-brand-darker/95 to-transparent
          */}
          <div
            className={`absolute inset-0 ${
              isRTL
                ? 'bg-gradient-to-l from-brand-darker/95 via-brand-darker/75 to-transparent'
                : 'bg-gradient-to-r from-brand-darker/95 via-brand-darker/75 to-transparent'
            }`}
          />
          {/* Bottom vignette for stats bar */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-darker/90 to-transparent" />
          {/* Top vignette for navbar */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />
        </motion.div>

        {/* ── Professional Text Panel ── */}
        <div
          className="relative z-10 min-h-screen flex items-center pt-32 lg:pt-40 pb-24 px-12 lg:px-24 justify-start"
        >
          <div className={`max-w-xl ${isRTL ? 'text-right' : 'text-left'}`}>
            {/* Stars */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className={`flex gap-1 mb-5 ${isRTL ? 'justify-end' : 'justify-start'}`}
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="text-primary fill-primary" />
              ))}
            </motion.div>

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-[11px] lg:text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-5"
            >
              {t('hero_eyebrow')}
            </motion.p>

            {/* Main headline */}
            <motion.h1
              className="font-serif text-white leading-[1.08] mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <motion.span
                initial={{ opacity: 0, x: isRTL ? 24 : -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 0.6 }}
                className="block text-4xl lg:text-6xl xl:text-7xl uppercase tracking-wider"
              >
                {t('hero_line1')}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: isRTL ? 24 : -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 0.75 }}
                className="block text-5xl lg:text-7xl xl:text-8xl text-shimmer uppercase tracking-wide"
              >
                {t('hero_line2')}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: isRTL ? 24 : -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 0.9 }}
                className="block text-4xl lg:text-6xl xl:text-7xl text-outline uppercase tracking-wider"
              >
                {t('hero_line3')}
              </motion.span>
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className={`h-px w-16 bg-primary/60 mb-7 ${isRTL ? 'mr-0 ml-auto' : 'ml-0 mr-auto'}`}
              style={{ transformOrigin: isRTL ? 'right' : 'left' }}
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="text-white/60 text-sm lg:text-base font-light leading-relaxed mb-10 max-w-md"
            >
              {lang === 'ar'
                ? 'عيادة زكري — الوجهة الأولى لزراعة الأسنان والزيركون عالي الجودة في الجزائر، البليدة.'
                : lang === 'en'
                ? "Zekri Dental Clinic — Algeria's #1 destination for zirconia restorations & dental implants in Blida."
                : "Clinique Zekri — la référence en zircone et implants dentaires en Algérie, à Blida."}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className={`flex flex-wrap gap-4 items-center justify-start`}
            >
              <a href="#book">
                <Button variant="primary" className="flex items-center gap-3 shadow-2xl text-sm px-7 py-3">
                  {t('hero_cta')}
                  {isRTL ? <ArrowDownLeft size={16} /> : <ArrowDownRight size={16} />}
                </Button>
              </a>
              <a
                href="https://wa.me/213020509162"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors text-sm font-light tracking-wide"
              >
                <span className="text-base">💬</span> WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── MOBILE ─── */}
      <div className="md:hidden flex flex-col min-h-screen relative">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src="/Assets/hero_mobile.png"
            alt="Zekri Dental Clinic"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/95 via-brand-darker/50 to-brand-darker/30" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />
        </motion.div>

        {/* Mobile text */}
        <div className={`relative z-10 flex flex-col justify-end min-h-screen px-6 pb-10 pt-32 ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="w-full"
          >
            {/* Stars */}
            <div className={`flex gap-1 mb-4 ${isRTL ? 'justify-end' : 'justify-center'}`}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="text-primary fill-primary" />
              ))}
            </div>

            <p className={`text-[10px] tracking-[0.3em] uppercase text-primary font-semibold mb-3 ${isRTL ? 'text-right' : 'text-center'}`}>
              {t('hero_eyebrow')}
            </p>

            <h1 className={`font-serif text-white leading-tight mb-6 ${isRTL ? 'text-right' : 'text-center'}`}>
              <span className="block text-3xl uppercase tracking-wide">{t('hero_line1')}</span>
              <span className="block text-4xl text-shimmer uppercase tracking-wide">{t('hero_line2')}</span>
              <span className="block text-3xl text-outline uppercase tracking-wide">{t('hero_line3')}</span>
            </h1>

            <div className={`h-px w-12 bg-primary/60 mb-6 ${isRTL ? 'mr-0 ml-auto' : 'mx-auto'}`} />

            <div className={`flex gap-3 w-full max-w-xs ${isRTL ? 'mr-0 ml-auto flex-row-reverse' : 'mx-auto'}`}>
              <a href="#book" className="flex-1">
                <Button variant="primary" className="w-full justify-center flex items-center gap-2 text-sm shadow-2xl">
                  {t('hero_cta')}
                  {isRTL ? <ArrowDownLeft size={14} /> : <ArrowDownRight size={14} />}
                </Button>
              </a>
              <a
                href="https://wa.me/213020509162"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xl hover:bg-primary/20 transition-colors flex-shrink-0"
              >
                💬
              </a>
            </div>

            {/* Mobile stats */}
            <div className="flex gap-6 justify-center mt-6">
              <div className="text-center">
                <span className="text-primary text-sm font-semibold">#1</span>
                <p className="text-white/50 text-[9px] uppercase tracking-widest">{t('hero_stat4')}</p>
              </div>
              <div className="text-center">
                <span className="text-primary text-sm font-semibold">500+</span>
                <p className="text-white/50 text-[9px] uppercase tracking-widest">{t('hero_stat3')}</p>
              </div>
              <div className="text-center">
                <span className="text-primary text-sm font-semibold">🏆</span>
                <p className="text-white/50 text-[9px] uppercase tracking-widest">
                  {lang === 'ar' ? 'أكبر عيادة' : 'Top Clinic'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-0 left-0 w-full hidden md:block glass border-t border-white/10 z-20"
      >
        <div className={`max-w-7xl mx-auto px-12 lg:px-24 py-4 flex gap-10 lg:gap-16 items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="text-[10px] text-white/50 uppercase tracking-[0.22em] leading-relaxed hidden lg:block max-w-[220px]">
            {t('hero_stat1')}
          </div>
          <div className={`flex gap-10 lg:gap-14 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {[
              { value: '#1', label: t('hero_stat4') },
              { value: '500+', label: t('hero_stat3') },
              { value: '🏆', label: lang === 'ar' ? 'أكبر عيادة' : lang === 'en' ? 'Largest Clinic' : 'Plus Grande Clinique' },
            ].map((stat) => (
              <div key={stat.value} className="text-center">
                <span className="block text-primary font-semibold text-base lg:text-lg">{stat.value}</span>
                <span className="text-white text-[10px] uppercase tracking-widest font-light">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
