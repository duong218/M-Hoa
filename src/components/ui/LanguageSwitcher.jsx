import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'vi' ? 'en' : 'vi';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      id="lang-switcher"
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-warm-border bg-warm-white/80 backdrop-blur-sm text-sm font-medium text-ink cursor-pointer hover:border-peach hover:bg-white transition-all duration-300"
      aria-label="Toggle language"
    >
      <Globe size={14} className="text-peach animate-spin-slow" />
      <span className="tracking-wide">
        {i18n.language === 'vi' ? 'VI' : 'EN'}
      </span>
    </motion.button>
  );
}
