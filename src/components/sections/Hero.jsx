import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { playChime, playClick } from '../../utils/audio';
import { CONTACT, IMAGES } from '../../data/config';

const SEASONAL_IMAGES = IMAGES.seasonalHero;

export default function Hero() {
  const { t, i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentLang = i18n.language === 'en' ? 'en' : 'vi';

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SEASONAL_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[75dvh] lg:min-h-[80dvh] pt-24 pb-12 lg:pt-28 lg:pb-16 flex items-center justify-center overflow-hidden bg-cream"
    >
      {/* Background Floating Petals / Botanical Elements */}
      <div className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-blush/30 blur-sm animate-float-1 pointer-events-none" />
      <div className="absolute bottom-1/3 right-12 w-12 h-12 rounded-full bg-butter/30 blur-sm animate-float-2 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-sage/20 blur-sm animate-float-1 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Mobile Image (rendered on top for mobile only via css order) */}
          <div className="lg:col-span-5 block lg:hidden w-full px-4 mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-4 border-white transform rotate-1 bg-cream"
            >
              <div className="absolute inset-0 w-full h-full">
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={currentIndex}
                    src={SEASONAL_IMAGES[currentIndex].src}
                    alt={currentLang === 'en' ? SEASONAL_IMAGES[currentIndex].titleEn : SEASONAL_IMAGES[currentIndex].titleVi}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </AnimatePresence>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent z-10" />
              
              {/* Seasonal Tag badge */}
              <div className="absolute top-4 left-4 z-20 bg-peach text-white font-medium text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5 backdrop-blur-sm">
                <Calendar size={10} />
                <span>{currentLang === 'en' ? SEASONAL_IMAGES[currentIndex].titleEn : SEASONAL_IMAGES[currentIndex].titleVi}</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-warm-border/55 z-20 shadow-md">
                <p className="font-serif italic text-ink text-xs sm:text-sm">
                  "{currentLang === 'en' ? SEASONAL_IMAGES[currentIndex].quoteEn : SEASONAL_IMAGES[currentIndex].quoteVi}"
                </p>
              </div>
            </motion.div>
          </div>

          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-peach/10 text-peach text-xs font-semibold"
            >
              <Sparkles size={12} />
              <span className="tracking-widest uppercase">Đẹp · Xịn · Mê</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-ink leading-[1.1] text-balance"
            >
              {t('hero.headline')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-serif italic text-xl sm:text-2xl text-muted tracking-wide"
            >
              {t('hero.sub')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {t('hero.body')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href={CONTACT.zaloLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playChime()}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-peach hover:bg-peach-hover text-white font-medium text-base shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                {t('hero.cta_primary')}
              </a>
              <a
                href="#gallery"
                onClick={() => playClick()}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-warm-border hover:border-peach bg-white/60 hover:bg-white text-muted hover:text-peach font-medium text-base transition-all duration-300 cursor-pointer"
              >
                {t('hero.cta_secondary')}
                <ArrowRight size={16} className="ml-2" />
              </a>
            </motion.div>

            {/* Quick Stats Block from Warm Organic / Cultural Design System */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="pt-6 lg:pt-8 border-t border-warm-border/60 grid grid-cols-3 gap-4 sm:gap-8 text-left"
            >
              <div>
                <div className="font-serif text-xl sm:text-2xl font-medium italic text-ink">Hà Nội</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted mt-1">Phạm vi 15km</div>
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl font-medium italic text-ink">200k+</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted mt-1">Ngân sách hợp lý</div>
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl font-medium italic text-ink">Giao gấp</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted mt-1">Trong 1-2 tiếng</div>
              </div>
            </motion.div>
          </div>

          {/* Desktop Right Image Column (Hidden on mobile) */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 hover:scale-[1.02] bg-cream"
            >
              <div className="absolute inset-0 w-full h-full">
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={currentIndex}
                    src={SEASONAL_IMAGES[currentIndex].src}
                    alt={currentLang === 'en' ? SEASONAL_IMAGES[currentIndex].titleEn : SEASONAL_IMAGES[currentIndex].titleVi}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </AnimatePresence>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent z-10" />
              
              {/* Seasonal Tag badge */}
              <div className="absolute top-4 left-4 z-20 bg-peach text-white font-medium text-[11px] sm:text-xs uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 backdrop-blur-sm">
                <Calendar size={12} />
                <span>{currentLang === 'en' ? SEASONAL_IMAGES[currentIndex].titleEn : SEASONAL_IMAGES[currentIndex].titleVi}</span>
              </div>

              {/* Floating Leaf Note badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-warm-border/55 shadow-md z-20">
                <p className="font-serif italic text-ink text-base">
                  "{currentLang === 'en' ? SEASONAL_IMAGES[currentIndex].quoteEn : SEASONAL_IMAGES[currentIndex].quoteVi}"
                </p>
                <p className="text-xs text-light-text mt-1">— Mê Hoa {currentLang === 'en' ? SEASONAL_IMAGES[currentIndex].titleEn : SEASONAL_IMAGES[currentIndex].titleVi}</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Warm Organic Cultural Bottom Scrolling Strip */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-ink text-cream flex items-center overflow-hidden whitespace-nowrap border-t border-warm-border/30">
        <div className="animate-marquee flex gap-12 text-[10px] uppercase tracking-[0.25em] font-medium items-center py-2">
          <span>Tư vấn tận tâm</span>
          <span className="opacity-30">●</span>
          <span>Giao nhanh nội thành HN</span>
          <span className="opacity-30">●</span>
          <span>Kiểm duyệt ảnh trước khi giao</span>
          <span className="opacity-30">●</span>
          <span>Đẹp · Xịn · Mê</span>
          <span className="opacity-30">●</span>
          <span>Mê Hoa Florist</span>
          <span className="opacity-30">●</span>
          
          {/* Duplicate set for perfect fluid infinite loop scrolling */}
          <span>Tư vấn tận tâm</span>
          <span className="opacity-30">●</span>
          <span>Giao nhanh nội thành HN</span>
          <span className="opacity-30">●</span>
          <span>Kiểm duyệt ảnh trước khi giao</span>
          <span className="opacity-30">●</span>
          <span>Đẹp · Xịn · Mê</span>
          <span className="opacity-30">●</span>
          <span>Mê Hoa Florist</span>
          <span className="opacity-30">●</span>
        </div>
      </div>
    </section>
  );
}
