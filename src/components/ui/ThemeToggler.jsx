import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Heart, Sprout, Snowflake, Palette, Sparkles } from 'lucide-react';
import { playClick, playChime } from '../../utils/audio';



export default function ThemeToggler() {
  const { i18n } = useTranslation();
  const [currentTheme, setCurrentTheme] = useState('autumn');
  const [isOpen, setIsOpen] = useState(false);

  // Load and apply initial theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('mehoa-theme');
    if (savedTheme && ['autumn', 'valentines', 'spring', 'winter'].includes(savedTheme)) {
      setCurrentTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme === 'autumn' ? '' : savedTheme);
    }
  }, []);

  const changeTheme = (theme) => {
    playChime();
    setCurrentTheme(theme);
    localStorage.setItem('mehoa-theme', theme);
    document.documentElement.setAttribute('data-theme', theme === 'autumn' ? '' : theme);
    setIsOpen(false);
  };

  const themes = [
    {
      id: 'autumn',
      icon: Leaf,
      nameVi: 'Thu Mộc Mạc',
      nameEn: 'Autumn Harvest',
      color: 'bg-[#F4A87C]'
    },
    {
      id: 'valentines',
      icon: Heart,
      nameVi: 'Mùa Yêu Thương',
      nameEn: 'Valentine Day',
      color: 'bg-[#DF4B5E]'
    },
    {
      id: 'spring',
      icon: Sprout,
      nameVi: 'Xuân Tươi Mới',
      nameEn: 'Spring Meadow',
      color: 'bg-[#4A8C66]'
    },
    {
      id: 'winter',
      icon: Snowflake,
      nameVi: 'Đông Ấm Áp',
      nameEn: 'Festive Winter',
      color: 'bg-[#2B6CB0]'
    }
  ];

  const currentOption = themes.find((t) => t.id === currentTheme) || themes[0];
  const IconComponent = currentOption.icon;
  const isEn = i18n.language === 'en';

  return (
    <div className="relative inline-block text-left" id="theme-selector-container">
      {/* Active Theme Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          playClick();
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-warm-border bg-warm-white/80 backdrop-blur-sm text-sm font-medium text-ink cursor-pointer hover:border-peach hover:bg-white transition-all duration-300 shadow-sm"
        aria-label="Toggle season theme"
      >
        <span className={`w-2.5 h-2.5 rounded-full ${currentOption.color} animate-pulse`} />
        <IconComponent size={14} className="text-peach" />
        <span className="tracking-wide text-xs hidden sm:inline font-mono">
          {isEn ? currentOption.nameEn : currentOption.nameVi}
        </span>
      </motion.button>

      {/* Dropdown Options */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Click-out Overlay */}
            <div
              className="fixed inset-0 z-10 cursor-default"
              onClick={() => {
                playClick();
                setIsOpen(false);
              }}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute right-0 mt-2.5 w-52 rounded-2xl bg-white border border-warm-border shadow-xl z-20 overflow-hidden"
            >
              {/* Dropdown header */}
              <div className="px-4 py-2 bg-cream/70 border-b border-warm-border/50 flex items-center gap-1.5 text-ink text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted">
                <Palette size={12} className="text-peach" />
                <span>{isEn ? 'Seasonal Palettes' : 'Chủ Đề Sự Kiện'}</span>
              </div>

              {/* Items */}
              <div className="p-1.5 space-y-1 bg-warm-white/20">
                {themes.map((theme) => {
                  const ThemeIcon = theme.icon;
                  const isSelected = theme.id === currentTheme;
                  return (
                    <button
                      key={theme.id}
                      onClick={() => changeTheme(theme.id)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-cream text-peach'
                          : 'text-ink hover:bg-cream/40 hover:text-peach'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-2 h-2 rounded-full ${theme.color}`} />
                        <ThemeIcon size={14} className={isSelected ? 'text-peach' : 'text-muted'} />
                        <span className="font-sans">
                          {isEn ? theme.nameEn : theme.nameVi}
                        </span>
                      </div>
                      {isSelected && (
                        <Sparkles size={12} className="text-peach animate-pulse" />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
