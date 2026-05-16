import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useLang } from '../../i18n/LanguageContext';

export function Testimonial() {
  const { t, isRTL } = useLang();

  return (
    <section className="bg-brand-beige text-brand-dark relative overflow-hidden border-y border-brand-darker/5">
      <div className={`max-w-none lg:grid lg:grid-cols-[0.68fr_1.32fr] lg:min-h-[720px] ${isRTL ? 'lg:[direction:rtl]' : ''}`}>
        {/* Left image panel */}
        <div className="relative min-h-[380px] sm:min-h-[420px] lg:min-h-[720px]">
          <img
            src="/Assets/testimonial_img.png"
            alt="Patiente satisfaite"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/25 via-transparent to-transparent lg:hidden" />
        </div>

        {/* Right content panel */}
        <div className="relative z-10 -mt-14 sm:-mt-16 lg:mt-0 flex items-center py-14 sm:py-16 lg:py-24 bg-brand-beige rounded-t-[2.2rem] sm:rounded-t-[2.6rem] lg:rounded-none shadow-[0_-14px_36px_rgba(26,22,16,0.14)] lg:shadow-none">
          {/* Vertical gradient barrier between image and text */}
          <div
            className={`hidden lg:block absolute top-0 bottom-0 w-24 pointer-events-none ${isRTL ? '-right-12' : '-left-12'}`}
            style={{
              background: isRTL
                ? 'linear-gradient(to left, rgba(245,239,224,0.96) 20%, rgba(245,239,224,0.7) 55%, rgba(245,239,224,0) 100%)'
                : 'linear-gradient(to right, rgba(245,239,224,0.96) 20%, rgba(245,239,224,0.7) 55%, rgba(245,239,224,0) 100%)',
            }}
          />

          <div className="w-full px-6 lg:px-16 xl:px-20">
            <motion.div
              className={`max-w-2xl ${isRTL ? 'ml-auto text-right' : 'mr-auto text-left'} relative`}
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Quote className={`absolute -top-14 ${isRTL ? '-right-3 rotate-0' : '-left-3 rotate-180'} w-24 h-24 text-primary opacity-10`} />

              <p className={`text-[10px] sm:text-xs tracking-[0.3em] uppercase text-primary mb-6 font-semibold flex items-center gap-3 ${isRTL ? 'justify-end' : ''}`}>
                <img src="/Assets/logo.png" alt="" className="h-10 w-auto" />
                {t('testimonial_eyebrow') || 'Temoignages'}
              </p>

              <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl mb-8 leading-[1.1] text-brand-dark relative z-10 break-words">
                {t('testimonial_title')}
                <br />
                <span className="italic text-shimmer">{t('testimonial_title_italic')}</span>
              </h2>

              <p className="text-lg md:text-xl xl:text-2xl font-serif italic leading-relaxed mb-10 text-brand-dark/80 relative z-10">
                {t('testimonial_quote')}
              </p>

              <div className={`flex flex-col ${isRTL ? 'items-end' : 'items-start'} space-y-6 relative z-10 border-t border-brand-darker/10 pt-8`}>
                <div className={`flex flex-col lg:flex-row items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="flex text-primary text-xl space-x-1">
                    {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                  </div>
                  <div className="hidden lg:block w-px h-8 bg-brand-darker/20" />
                  <div className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-semibold text-brand-dark gap-3">
                    <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary font-bold shadow-md text-base">
                      ✨
                    </span>
                    {t('testimonial_stat')}
                  </div>
                </div>
                <p className="text-brand-dark/60 text-xs tracking-widest uppercase">{t('testimonial_author')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
