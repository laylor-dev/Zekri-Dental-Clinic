import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { useLang } from '../../i18n/LanguageContext';

export function Intro() {
  const { t, isRTL } = useLang();

  return (
    <section id="about" className="py-24 lg:py-40 px-6 lg:px-12 bg-brand-light relative overflow-hidden flex items-center justify-center">
      {/* Decorative bg */}
      <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-1/3 h-full bg-brand-beige/30 ${isRTL ? 'rounded-br-full' : 'rounded-bl-full'} z-0 opacity-50`} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className={`logo-watermark w-40 h-40 ${isRTL ? 'right-10' : 'left-10'} top-20`} />
      <div className={`logo-watermark w-56 h-56 ${isRTL ? 'left-8' : 'right-8'} bottom-10 opacity-[0.045]`} />

      <div className={`max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10 ${isRTL ? 'lg:flex-row-reverse text-right' : ''}`}>

        {/* Left Typography Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative"
        >
          <span className={`font-script text-6xl md:text-8xl text-primary opacity-20 absolute -top-12 md:-top-16 ${isRTL ? '-right-4 md:-right-8 rotate-6' : '-left-4 md:-left-8 -rotate-6'} select-none`}>
            {t('intro_script')}
          </span>

          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-primary mb-6 mt-4 md:mt-0 font-semibold flex items-center gap-4">
            <img src="/Assets/logo.png" alt="" className="h-10 w-auto" />
            {t('intro_eyebrow')}
          </p>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-8 leading-[1.1]">
            <span className="italic block mb-2">{t('intro_title_italic')}</span>
            {t('intro_title')}
          </h2>

          <p
            className="text-brand-dark/70 leading-relaxed text-sm md:text-base font-light mb-5 max-w-lg"
            dangerouslySetInnerHTML={{ __html: t('intro_body1') }}
          />
          <p className="text-brand-dark/70 leading-relaxed text-sm md:text-base font-light mb-10 max-w-lg">
            {t('intro_body2')}
          </p>

          {/* Micro stats */}
          <div className={`flex gap-8 mb-10 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {[
              { num: '136K', label: isRTL ? 'متابع' : 'Abonnés' },
              { num: '500+', label: isRTL ? 'حالة' : 'Cas traités' },
              { num: '✨', label: isRTL ? 'زيركون فاخر' : 'Zircone Premium' },
            ].map((stat) => (
              <div key={stat.num} className="flex flex-col">
                <span className="font-serif text-2xl text-primary font-semibold">{stat.num}</span>
                <span className="text-[10px] uppercase tracking-widest text-brand-dark/50 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>

          <Button variant="outline" className="lg:w-auto w-full text-center">
            {t('intro_cta')}
          </Button>
        </motion.div>

        {/* Right Asymmetrical Images Block */}
        <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center mt-10 md:mt-16 lg:mt-0">
          {/* Main Large Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className={`w-[75%] h-[80%] absolute ${isRTL ? 'left-0' : 'right-0'} top-0 overflow-hidden group shadow-2xl`}
          >
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
              alt="Les Mains d'Or Clinic"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Gold corner accent */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/60" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/60" />
          </motion.div>

          {/* Smaller overlapping Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`w-[42%] aspect-[3/4] absolute ${isRTL ? 'right-0' : 'left-0'} bottom-10 z-10 border-4 md:border-8 border-brand-light shadow-2xl overflow-hidden group bg-brand-light`}
          >
            <img
              src="/Assets/results_small.png"
              alt="Les Mains d'Or Results"
              className="w-full h-full object-contain object-center transition-transform duration-1000"
            />
          </motion.div>

          {/* Gold orb */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className={`absolute ${isRTL ? '-left-6 lg:-left-12' : '-right-6 lg:-right-12'} bottom-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float`}
          />
        </div>
      </div>
    </section>
  );
}
