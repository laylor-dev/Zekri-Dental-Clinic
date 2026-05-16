import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useLang } from '../../i18n/LanguageContext';

const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80', // Zirconia
  '/Assets/veneers.png', // Facettes (images (5ee).png)
  '/Assets/implants.jpg', // Implants (implantdisnedir.jpg)
  '/Assets/smile_design.png', // Smile Design (imageseazeza (5).png)
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80', // Bonding
  '/Assets/whitening.png', // Whitening (Gemini_Generated_Image_5djrge5djrge5djr.png)
];

const SPANS = [
  'md:col-span-2 md:row-span-2',  // Zircone — big hero card (top-left 2×2)
  'md:col-span-1 md:row-span-1',  // Facettes (top-right slot 1)
  'md:col-span-1 md:row-span-1',  // Implants (top-right slot 2)
  'md:col-span-1 md:row-span-1',  // Morphologie (mid-right slot 1)
  'md:col-span-1 md:row-span-1',  // Stratification (mid-right slot 2)
  'md:col-span-4 md:row-span-1',  // Blanchiment — full-width banner row
];

export function Services() {
  const { t, isRTL } = useLang();
  const services: { title: string; subtitle: string }[] = t('services');

  return (
    <section id="services" className="bg-brand-darker py-24 lg:py-32 px-4 md:px-8 relative overflow-hidden">
      <div className={`logo-watermark w-44 h-44 ${isRTL ? 'right-8' : 'left-8'} top-12 opacity-[0.05]`} />
      <div className={`logo-watermark w-64 h-64 ${isRTL ? 'left-10' : 'right-10'} bottom-8 opacity-[0.04]`} />
      <div className={`max-w-7xl mx-auto mb-16 flex flex-col md:flex-row items-end justify-between gap-8 ${isRTL ? 'md:flex-row-reverse text-right' : ''}`}>
        <div>
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-primary mb-4 font-semibold flex items-center gap-4">
            <img src="/Assets/logo.png" alt="" className="h-10 w-auto" />
            {t('services_eyebrow')}
          </p>
          <h2 className="font-serif text-4xl lg:text-6xl text-white">
            {t('services_title')}{' '}
            <br />
            <span className="text-shimmer italic">{t('services_title_italic')}</span>
          </h2>
        </div>
        <p className="text-white/50 font-light max-w-xs text-sm leading-relaxed">
          {t('services_desc')}
        </p>
      </div>

      {/* Editorial Bento Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 auto-rows-[280px] md:auto-rows-[320px]">
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service} img={SERVICE_IMAGES[idx]} span={SPANS[idx]} isLarge={idx === 0} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  img,
  span,
  isLarge,
}: {
  service: { title: string; subtitle: string };
  img: string;
  span: string;
  isLarge: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`relative group overflow-hidden bg-brand-dark cursor-pointer ${span}`}
    >
      <img
        src={img}
        alt={service.title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 group-hover:opacity-75 grayscale lg:grayscale-0 lg:saturate-50 group-hover:saturate-100"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/95 via-brand-darker/20 to-transparent pointer-events-none" />

      {/* Gold corner on hover */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/0 group-hover:border-primary/60 transition-all duration-500" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/0 group-hover:border-primary/60 transition-all duration-500" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 z-10 pointer-events-none">
        <span className="text-primary font-serif italic text-sm mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {service.subtitle}
        </span>
        <div className="flex items-end justify-between">
          <h3 className={`text-white uppercase font-sans tracking-wide font-light drop-shadow-lg pr-4 ${isLarge ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
            {service.title}
          </h3>
          <div className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 bg-brand-darker/60 backdrop-blur-sm">
            <ArrowUpRight className="text-primary w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
