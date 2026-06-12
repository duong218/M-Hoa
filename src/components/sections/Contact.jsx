import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { MessageCircle, Facebook, Mail, MapPin, Sparkles } from 'lucide-react';
import { playChime, playClick } from '../../utils/audio';
import { CONTACT } from '../../data/config';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === 'en' ? 'en' : 'vi';

  return (
    <section id="contact" className="py-10 md:py-14 lg:py-16 bg-cream relative overflow-hidden">
      
      {/* Visual background petals */}
      <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-peach/10 blur-xl animate-float-1 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-sage/10 blur-xl animate-float-2 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header Block following standard visual hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-3 max-w-2xl mx-auto mb-8"
        >
          <span className="text-xs font-semibold tracking-widest text-[#A8B89A] uppercase block">
            {t('contact.title')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink leading-tight">
            {currentLang === 'en' ? 'Connect With Mê Hoa' : 'Gửi Gắm Yêu Thương'}
          </h2>
          <p className="text-sm sm:text-base text-muted text-balance max-w-xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-muted text-xs font-medium border border-warm-border/60 shadow-sm">
            <MapPin size={14} className="text-peach" />
            <span>{t('contact.location_badge')}</span>
          </div>
        </motion.div>

        {/* Social Quick Launch Actions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {/* Zalo CTA (Filled primary styling) */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => playChime()}
            href={CONTACT.zaloLink} // Centralized Zalo link pointing to business contact
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-peach text-white font-medium text-base hover:bg-peach-hover shadow-md hover:shadow-lg transition-all duration-300 transform cursor-pointer group"
          >
            <MessageCircle size={20} className="transition-transform group-hover:rotate-12" />
            <span>{t('contact.button_zalo')}</span>
          </motion.a>

          {/* Facebook CTA (Elegant outline styling) */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => playClick()}
            href={CONTACT.facebookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-ink hover:border-peach bg-white hover:bg-peach/10 text-ink hover:text-peach font-medium text-base transition-all duration-300 cursor-pointer group"
          >
            <Facebook size={20} className="transition-transform group-hover:scale-110" />
            <span>{t('contact.button_fb')}</span>
          </motion.a>

          {/* Email CTA (Elegant outline styling) */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => playClick()}
            href={`mailto:${CONTACT.gmail}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-ink hover:border-peach bg-white hover:bg-peach/10 text-ink hover:text-peach font-medium text-base transition-all duration-300 cursor-pointer group"
          >
            <Mail size={20} className="transition-transform group-hover:scale-110" />
            <span>{t('contact.button_ig')}</span>
          </motion.a>
        </motion.div>

        {/* Complementary Gift Notice */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-orange-50/60 border border-peach/15 text-[#7A6B5D] text-xs sm:text-sm font-medium shadow-inner max-w-xl text-left sm:text-center">
            <Sparkles size={16} className="text-peach shrink-0" />
            <span>{t('contact.noted')}</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
