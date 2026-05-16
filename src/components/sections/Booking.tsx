import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { useLang } from '../../i18n/LanguageContext';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export function Booking() {
  const { t, isRTL } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Future: Connect to database here
  };

  if (submitted) {
    return (
      <section id="book" className="py-24 bg-brand-light flex items-center justify-center min-h-[600px]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-12 glass border-primary/20 max-w-xl mx-auto"
        >
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl text-primary">✨</span>
          </div>
          <h2 className="font-serif text-3xl mb-4 text-brand-dark">{t('booking_success_title') || 'Merci !'}</h2>
          <p className="text-brand-dark/60 mb-8">{t('booking_success_desc') || 'Votre demande de rendez-vous a été envoyée. Nous vous contacterons bientôt.'}</p>
          <Button onClick={() => setSubmitted(false)} variant="outline">{t('booking_back') || 'Retour'}</Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="book" className="py-24 bg-brand-darker relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-[150px]" />
      </div>
      <div className={`logo-watermark w-40 h-40 ${isRTL ? 'right-8' : 'left-8'} top-10 opacity-[0.06]`} />
      <div className={`logo-watermark w-64 h-64 ${isRTL ? 'left-4' : 'right-4'} bottom-4 opacity-[0.04]`} />

      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col lg:flex-row gap-16 items-start ${isRTL ? 'lg:flex-row-reverse text-right' : ''}`}>
          
          {/* Info Side */}
          <div className="lg:w-1/3">
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-4 font-semibold flex items-center gap-4">
              <img src="/Assets/logo.png" alt="" className="h-10 w-auto" />
              {t('booking_eyebrow') || 'Prendre Rendez-vous'}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
              {t('booking_title') || 'Réservez votre consultation'}<br />
              <span className="text-shimmer italic">{t('booking_title_italic') || 'Esthétique'}</span>
            </h2>
            <p className="text-white/50 font-light mb-10 leading-relaxed">
              {t('booking_desc') || 'Remplissez le formulaire ci-dessous. Notre équipe vous contactera pour confirmer l\'heure exacte.'}
            </p>

            <div className="space-y-6">
              <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">{t('call_us') || 'Appelez-nous'}</p>
                  <p className="text-white font-medium">0550 42 04 01</p>
                </div>
              </div>
              <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Email</p>
                  <p className="text-white font-medium">contact@lesmainsdor.dz</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 w-full">
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="glass p-8 md:p-12 border-white/10 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/60 ml-1">{t('form_name') || 'Nom Complet'}</label>
                  <div className="relative">
                    <User className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-primary/60`} size={16} />
                    <input 
                      type="text" 
                      required
                      placeholder={isRTL ? "الاسم الكامل" : "Jean Dupont"}
                      className={`w-full bg-white/5 border border-white/10 rounded-none py-4 ${isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4'} text-white focus:border-primary/50 outline-none transition-all placeholder:text-white/20`}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/60 ml-1">{t('form_phone') || 'Téléphone'}</label>
                  <div className="relative">
                    <Phone className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-primary/60`} size={16} />
                    <input 
                      type="tel" 
                      required
                      placeholder="0550 00 00 00"
                      className={`w-full bg-white/5 border border-white/10 rounded-none py-4 ${isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4'} text-white focus:border-primary/50 outline-none transition-all placeholder:text-white/20`}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/60 ml-1">Email</label>
                  <div className="relative">
                    <Mail className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-primary/60`} size={16} />
                    <input 
                      type="email" 
                      required
                      placeholder="email@example.com"
                      className={`w-full bg-white/5 border border-white/10 rounded-none py-4 ${isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4'} text-white focus:border-primary/50 outline-none transition-all placeholder:text-white/20`}
                    />
                  </div>
                </div>

                {/* Service */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/60 ml-1">Service</label>
                  <div className="relative">
                    <MessageSquare className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-primary/60`} size={16} />
                    <select className={`w-full bg-brand-darker border border-white/10 rounded-none py-4 ${isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4'} text-white focus:border-primary/50 outline-none transition-all appearance-none cursor-pointer`}>
                      <option>Zircone Haute Qualité</option>
                      <option>Facettes E-max</option>
                      <option>Implants Dentaires</option>
                      <option>Blanchiment</option>
                      <option>Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/60 ml-1">{t('form_date') || 'Date souhaitée'}</label>
                  <div className="relative">
                    <Calendar className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-primary/60`} size={16} />
                    <input 
                      type="date" 
                      required
                      className={`w-full bg-white/5 border border-white/10 rounded-none py-4 ${isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4'} text-white focus:border-primary/50 outline-none transition-all`}
                    />
                  </div>
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/60 ml-1">{t('form_time') || 'Heure souhaitée'}</label>
                  <div className="relative">
                    <Clock className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-primary/60`} size={16} />
                    <select className={`w-full bg-brand-darker border border-white/10 rounded-none py-4 ${isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4'} text-white focus:border-primary/50 outline-none transition-all appearance-none cursor-pointer`}>
                      <option>09:00 - 11:00</option>
                      <option>11:00 - 13:00</option>
                      <option>14:00 - 16:00</option>
                      <option>16:00 - 18:00</option>
                    </select>
                  </div>
                </div>
              </div>

              <Button type="submit" variant="primary" className="w-full py-5 text-sm uppercase tracking-widest mt-4">
                {t('form_submit') || 'Confirmer la demande'}
              </Button>

              <p className="text-[9px] text-white/30 text-center mt-6 uppercase tracking-widest">
                * {t('form_disclaimer') || 'Nous vous rappellerons pour confirmer l\'horaire final.'}
              </p>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
