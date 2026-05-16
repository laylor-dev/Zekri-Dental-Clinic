import { MapPin, Phone, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLang } from '../../i18n/LanguageContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const LANGS = [
  { code: 'fr' as const, label: 'FR' },
  { code: 'ar' as const, label: 'ع' },
  { code: 'en' as const, label: 'EN' },
];

export function Navbar() {
  const { t, lang, setLang } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { key: 'nav_home', href: '#' },
    { key: 'nav_about', href: '#about' },
    { key: 'nav_services', href: '#services' },
    { key: 'nav_gallery', href: '#gallery' },
    { key: 'nav_contact', href: '#contact' },
  ] as const;

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Top Contact Bar */}
      <div className="hidden lg:flex justify-between items-center bg-brand-darker text-white/80 py-2 px-8 text-xs tracking-wider">
        <div className="flex items-center gap-2 text-primary/80 text-[10px] tracking-[0.3em] uppercase font-light">
          {/* Text removed as per request */}
        </div>
        <div className="flex space-x-6">
          <a href="tel:+2130550420401" className="flex items-center hover:text-white cursor-pointer transition-colors">
            <Phone size={12} className="mr-2 text-primary" /> 0550 42 04 01
          </a>
          <a href="tel:+2130771501788" className="flex items-center hover:text-white cursor-pointer transition-colors">
            <Phone size={12} className="mr-2 text-primary" /> 0771 50 17 88
          </a>
          <a
            href="https://maps.app.goo.gl/769qEHWhzLG6NJvV9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-white cursor-pointer transition-colors"
          >
            <MapPin size={12} className="mr-2 text-primary" /> {t('footer_address')}
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex items-center justify-between px-6 py-4 lg:px-12 bg-white/95 backdrop-blur-md border-b border-brand-beige">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 cursor-pointer group">
          <img 
            src="/Assets/logo.png" 
            alt="Les Mains d'Or Logo" 
            className="h-10 w-auto lg:h-12 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl lg:text-2xl tracking-widest text-brand-darker leading-none group-hover:text-primary transition-colors duration-300">
              Les Mains d'Or
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-[10px] font-medium tracking-widest uppercase text-brand-dark">
          {navLinks.map(({ key, href }) => (
            <a key={key} href={href} className="hover:text-primary transition-colors relative group">
              {t(key)}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right: Lang Switcher + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-brand-beige/60 rounded-full px-2 py-1">
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest transition-all duration-200 cursor-pointer ${
                  lang === code
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-brand-dark hover:text-primary'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <a href="#book">
            <Button variant="primary">{t('nav_book')}</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-3">
          <div className="flex items-center gap-1 bg-brand-beige/60 rounded-full px-2 py-1">
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-2 py-0.5 rounded-full text-[9px] font-semibold transition-all cursor-pointer ${
                  lang === code ? 'bg-primary text-white' : 'text-brand-dark'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-brand-dark">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-brand-beige px-6 pb-6 pt-4 flex flex-col gap-4"
          >
            {navLinks.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-sm uppercase tracking-widest text-brand-dark hover:text-primary transition-colors py-2 border-b border-brand-beige/50"
              >
                {t(key)}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="tel:+2130550420401" className="flex-1">
                <Button variant="outline" className="w-full !text-xs">{t('call')}: 0550 42 04 01</Button>
              </a>
              <Button variant="primary" className="flex-1 !text-xs">{t('nav_book_short')}</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
