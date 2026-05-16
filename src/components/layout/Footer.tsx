import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLang } from '../../i18n/LanguageContext';

export function Footer() {
  const { t, isRTL } = useLang();

  const hours: string = t('footer_hours');

  return (
    <footer id="contact" className="bg-brand-darker text-brand-beige">
      {/* CTA Section */}
      <div className="relative bg-gold-gradient py-16 px-6 overflow-hidden">
        <div className={`container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 ${isRTL ? 'md:flex-row-reverse text-right' : ''}`}>
          <h2 className="font-serif text-2xl md:text-4xl text-white">
            {t('footer_cta_title')}
          </h2>
          <div className="flex gap-4">
            <a href="https://wa.me/213020509162" target="_blank" rel="noopener noreferrer">
              <Button variant="white" className="flex items-center gap-2">
                <span>💬</span> WhatsApp
              </Button>
            </a>
            <a href="#book">
              <Button variant="white">{t('footer_cta_btn')}</Button>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 pt-20 pb-10">
        {/* Brand */}
        <div className="text-center mb-16">
          <img 
            src="/Assets/logo.png" 
            alt="Zekri Dental Clinic Logo" 
            className="h-20 w-auto mx-auto mb-4"
          />
          <h2 className="font-serif text-3xl mb-1 text-shimmer">Zekri Dental Clinic</h2>
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase">عيادة زكري لطب الأسنان</p>
          <div className="w-16 h-[1px] bg-primary/40 mx-auto mt-4" />
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center ${isRTL ? 'text-right md:text-right' : ''}`}>
          {/* Address */}
          <div>
            <h4 className="uppercase tracking-[0.2em] text-[10px] mb-4 text-primary font-semibold flex items-center justify-center gap-2">
              <MapPin size={12} /> {t('footer_address_label')}
            </h4>
            <p className="font-light text-sm text-white/60 leading-relaxed">
              {t('footer_address')}
            </p>
            <a
              href="https://maps.app.goo.gl/ouledyaichblida"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/70 hover:text-primary text-xs mt-2 inline-block tracking-wider transition-colors"
            >
              📍 Google Maps →
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="uppercase tracking-[0.2em] text-[10px] mb-4 text-primary font-semibold flex items-center justify-center gap-2">
              <Phone size={12} /> {t('footer_contact_label')}
            </h4>
            <a href="tel:+213020509162" className="font-light text-sm text-white/60 hover:text-primary transition-colors block mb-2">
              📞 020 50 91 62
            </a>
            <a href="https://wa.me/213020509162" target="_blank" rel="noopener noreferrer" className="font-light text-sm text-white/60 hover:text-primary transition-colors block mb-6">
              💬 WhatsApp
            </a>

            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/zekri_dental_clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 text-white"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://www.facebook.com/cabinetdentairezekri/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 text-white"
              >
                <Facebook size={14} />
              </a>
              <a
                href="https://wa.me/213020509162"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 text-white text-sm"
              >
                💬
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="uppercase tracking-[0.2em] text-[10px] mb-4 text-primary font-semibold">
              {t('footer_hours_label')}
            </h4>
            <div className="font-light text-sm text-white/60 leading-loose">
              {hours.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <p className="text-white/30 text-[10px] mt-4 tracking-wider">CNAS · CASNOS</p>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-white/10 pt-10 flex flex-col items-center gap-4">
          <div className="flex gap-4 items-center">
            <a
              href="https://www.instagram.com/zekri_dental_clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-light text-white/40 hover:text-primary transition-colors flex items-center gap-1"
            >
              <Instagram size={10} /> @zekri_dental_clinic
            </a>
            <span className="text-white/20 text-[10px]">·</span>
            <a
              href="https://www.facebook.com/cabinetdentairezekri/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-light text-white/40 hover:text-primary transition-colors flex items-center gap-1"
            >
              <Facebook size={10} /> Cabinet Dentaire Zekri
            </a>
          </div>
          <p className="text-[10px] font-light text-white/30">{t('footer_copy')}</p>
        </div>
      </div>
    </footer>
  );
}
