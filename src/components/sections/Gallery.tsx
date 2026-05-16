import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { useRef, useState } from 'react';
import { useLang } from '../../i18n/LanguageContext';

const VIDEOS = [
  {
    src: '/Assets/zircon_quality_2.mp4',
    poster: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    labelFr: 'Zircone Haute Qualité',
    labelAr: 'تركيبات الزيركون عالية الجودة',
    labelEn: 'High Quality Zirconia',
    descFr: 'Réhabilitation complète par zircone premium',
    descAr: 'إعادة تأهيل كاملة بالزيركون الفاخر',
    descEn: 'Full rehabilitation with premium zirconia',
  },
  {
    src: '/Assets/zircon_quality_1.mp4',
    poster: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    labelFr: 'Transformation Sourire',
    labelAr: 'تحول الابتسامة',
    labelEn: 'Smile Transformation',
    descFr: 'Résultat naturel et lumineux',
    descAr: 'نتيجة طبيعية ومضيئة',
    descEn: 'Natural and radiant result',
  },
  {
    src: '/Assets/case_spain.mp4',
    poster: 'https://images.unsplash.com/photo-1598440947619-2ce1bb28cf18?auto=format&fit=crop&w=800&q=80',
    labelFr: 'Patiente d\'Espagne 🇪🇸',
    labelAr: 'مريضة من إسبانيا 🇪🇸',
    labelEn: 'Patient from Spain 🇪🇸',
    descFr: 'Réhabilitation maxillaire & mandibulaire complète',
    descAr: 'إعادة تأهيل الفك العلوي والسفلي',
    descEn: 'Full upper & lower jaw rehabilitation',
  },
  {
    src: '/Assets/case_mascara.mp4',
    poster: 'https://images.unsplash.com/photo-1590625694380-6060c2aa0c46?auto=format&fit=crop&w=800&q=80',
    labelFr: 'Patient de Mascara',
    labelAr: 'حالة من ولاية معسكر',
    labelEn: 'Patient from Mascara',
    descFr: 'Réalisation du sourire de rêve',
    descAr: 'تحقيق الابتسامة الحلم',
    descEn: 'Achieving the dream smile',
  },
];

export function Gallery() {
  const { t, lang, isRTL } = useLang();

  return (
    <section id="gallery" className="bg-brand-light py-24 lg:py-32 px-4 md:px-8 relative overflow-hidden">
      <div className={`logo-watermark w-40 h-40 ${isRTL ? 'left-8' : 'right-8'} top-16`} />
      <div className={`logo-watermark w-56 h-56 ${isRTL ? 'right-12' : 'left-12'} bottom-10 opacity-[0.045]`} />
      {/* Header */}
      <div className={`max-w-7xl mx-auto mb-16 flex flex-col md:flex-row items-end justify-between gap-8 ${isRTL ? 'md:flex-row-reverse text-right' : ''}`}>
        <div>
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-primary mb-4 font-semibold flex items-center gap-4">
            <img src="/Assets/logo.png" alt="" className="h-10 w-auto" />
            {t('gallery_eyebrow')}
          </p>
          <h2 className="font-serif text-4xl lg:text-6xl text-brand-dark">
            {t('gallery_title')}{' '}
            <span className="text-shimmer italic">{t('gallery_title_italic')}</span>
          </h2>
        </div>
        <p className="text-brand-dark/50 font-light max-w-xs text-sm leading-relaxed">
          {t('gallery_desc')}
        </p>
      </div>

      {/* Video Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {VIDEOS.map((video, idx) => (
          <VideoCard
            key={idx}
            video={video}
            lang={lang}
            playLabel={t('gallery_play')}
            idx={idx}
          />
        ))}
      </div>
    </section>
  );
}

function VideoCard({
  video,
  lang,
  playLabel,
  idx,
}: {
  video: (typeof VIDEOS)[0];
  lang: string;
  playLabel: string;
  idx: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const label = lang === 'ar' ? video.labelAr : lang === 'en' ? video.labelEn : video.labelFr;
  const desc = lang === 'ar' ? video.descAr : lang === 'en' ? video.descEn : video.descFr;

  const handleLoadedData = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setPlaying(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: idx * 0.1 }}
        className="relative group overflow-hidden bg-brand-darker cursor-pointer h-[380px] lg:h-[480px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setModalOpen(true)}
      >
        <video
          ref={videoRef}
          src={video.src}
          muted
          playsInline
          loop
          preload="metadata"
          onLoadedData={handleLoadedData}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 video-overlay pointer-events-none" />

        {/* Gold corner accents */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-primary/50" />
        <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-primary/50" />

        {/* Play button */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/30 flex items-center justify-center bg-brand-darker/40 backdrop-blur-sm transition-all duration-300 pointer-events-none ${playing ? 'opacity-0 scale-75' : 'opacity-80 group-hover:opacity-100 group-hover:scale-110'}`}>
          <Play className="text-white w-5 h-5 ml-1" />
        </div>

        {/* Labels */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold block mb-1">{desc}</span>
          <h3 className="text-white font-sans font-light text-base uppercase tracking-wide">{label}</h3>
          <span className="text-white/40 text-[9px] uppercase tracking-widest mt-2 block">{playLabel} →</span>
        </div>
      </motion.div>

      {/* Full-screen Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl transition-colors"
            onClick={() => setModalOpen(false)}
          >
            ✕
          </button>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <video
              src={video.src}
              controls
              autoPlay
              className="w-full rounded max-h-[80vh]"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white font-serif text-xl">{label}</h3>
              <p className="text-white/50 text-sm mt-1">{desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
