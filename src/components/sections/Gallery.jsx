import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Facebook, ZoomIn, X, Compass } from 'lucide-react';
import { playChime, playClick } from '../../utils/audio';
import { PRODUCTS_CATALOG } from '../../data/products';
import { CONTACT } from '../../data/config';

export default function Gallery() {
  const { t, i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const currentLang = i18n.language === 'en' ? 'en' : 'vi';

  // Selected High-Quality Aesthetic Floral Images from central catalog
  const images = PRODUCTS_CATALOG.filter(item => item.type === 'gallery').map((item, originalIdx) => ({
    id: item.id,
    src: item.src,
    alt: currentLang === 'en' ? item.altEn : item.altVi,
    aspect: item.aspect || 'aspect-[3/4]',
    originalIdx: originalIdx
  }));

  // Split images into manual editorial design
  // Total 9 images: index 4 is the epicenter "Featured Image"
  const featuredImage = images[4] || images[0];
  const supportingImages = images.filter((_, idx) => idx !== 4);
  const leftSideImages = supportingImages.slice(0, 4);
  const rightSideImages = supportingImages.slice(4, 8);

  // Tablet 2-column balanced distribution
  const tabletCol1 = [images[0], images[2], images[5], images[7]].filter(Boolean);
  const tabletCol2 = [images[1], images[3], images[4], images[6], images[8]].filter(Boolean);

  const handleOpenImage = (img) => {
    playChime();
    setSelectedImage(img);
  };

  const handleCloseImage = () => {
    playClick();
    setSelectedImage(null);
  };

  // Adaptive labels and quotes
  const featuredLabel = currentLang === 'en' ? '✦ FEATURED MASTERPIECE ✦' : '✦ BẢN TÌNH CA CHỌN LỌC ✦';
  const featuredQuote = currentLang === 'en' 
    ? '"Preserving your most poetically brilliant, sweet and rustic moments of life."' 
    : '"Nơi gìn giữ những khoảnh khắc trong trẻo, rực rỡ và lãng mạn nhất của cuộc đời."';

  return (
    <section 
      id="gallery" 
      className="relative py-14 sm:py-20 bg-[#F4EDE2] dark:bg-[#12100E] border-y border-[#DCCEB5] dark:border-neutral-900 transition-colors overflow-hidden"
    >
      {/* Decorative organic background watermark - pressed foliage aesthetic */}
      <div className="absolute top-12 left-6 w-36 h-36 border border-sage/10 rounded-full flex items-center justify-center pointer-events-none select-none opacity-40 animate-spin-slow">
        <Compass size={40} className="text-sage/15" />
      </div>

      {/* Decorative Vintage Hanoi Postmark Sticker */}
      <div className="hidden md:block absolute top-[6%] right-[8%] rotate-12 p-1.5 bg-[#FAF7F2] dark:bg-neutral-900 border border-[#D4C3B1] dark:border-neutral-800 shadow-sm z-10 opacity-80 select-none pointer-events-none transition-all duration-500">
        <div className="border border-dashed border-[#BCA58C] dark:border-[#7A6B5D] px-3.5 py-2 text-center text-[#9c846d]">
          <span className="block font-serif text-[10px] uppercase tracking-widest font-semibold">HÀ NỘI EST. 2024</span>
          <span className="block font-handwritten text-xl leading-none mt-1 text-[#F4A87C]">Mê Hoa Garden</span>
        </div>
      </div>

      {/* Realistic Ring Binder spiral bound book header at top of the section */}
      <div className="absolute top-0 inset-x-0 h-5 flex justify-around px-4 sm:px-12 select-none pointer-events-none">
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Glossy Metallic spiral wire */}
            <div className="w-[5px] h-6 bg-gradient-to-b from-[#b3a491] to-[#eedfcb] dark:from-neutral-700 dark:to-neutral-500 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.15)] border-t border-white/20" />
            {/* Small punch hole on paper underneath */}
            <div className="w-[10px] h-[7px] bg-[#3d3126]/12 dark:bg-black/35 rounded-full -mt-1" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3"
        >
          <span className="text-xs font-semibold tracking-widest text-[#9A8B78] dark:text-[#A8B89A] uppercase block">
            {t('gallery.title')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink dark:text-cream leading-tight">
            {t('gallery.headline')}
          </h2>
          <div className="h-[2px] w-12 bg-peach mx-auto my-3 rounded-full opacity-60" />
          <p className="text-sm sm:text-base text-muted dark:text-[#A69788] text-balance tracking-wide leading-relaxed">
            {t('gallery.sub')}
          </p>
        </motion.div>

        {/* 1. DESKTOP: Curated Editorial Layout with centered visual weight */}
        <div className="hidden lg:grid grid-cols-12 gap-10 items-center px-4 relative">
          
          {/* Column 1: Left Supporting (exactly 4 balanced cards) */}
          <div className="col-span-3 flex flex-col gap-10">
            {leftSideImages.map((img) => (
              <GalleryItem 
                key={img.id} 
                img={img} 
                index={img.originalIdx} 
                onClick={() => handleOpenImage(img)} 
              />
            ))}
          </div>

          {/* Column 2: Center Featured Area (Extra focus, visual anchor of the section) */}
          <div className="col-span-6 flex flex-col items-center justify-center relative py-6">
            {/* Visual layering background card for natural page-layering depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#eadfce]/30 to-transparent border border-[#dccfb4]/25 rounded-3xl -rotate-1 pointer-events-none select-none" />
            
            <div className="relative z-10 w-full max-w-[380px] xl:max-w-[420px] mx-auto py-8 flex flex-col items-center select-none text-center">
              <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-[#9A8B78] dark:text-[#A8B89A] uppercase block mb-1">
                {featuredLabel}
              </span>
              <span className="font-handwritten text-2xl text-[#6D5D4E] dark:text-[#A69584] mb-8 block">
                Mê Hoa Masterpiece
              </span>

              {featuredImage && (
                <div className="w-full">
                  <GalleryItem 
                    img={featuredImage} 
                    index={featuredImage.originalIdx} 
                    isFeatured={true}
                    onClick={() => handleOpenImage(featuredImage)} 
                  />
                </div>
              )}

              {/* Poetic vintage quote beneath the centerpiece */}
              <p className="mt-8 text-center font-serif italic text-xs xl:text-sm text-[#7D6B5A]/85 dark:text-[#C5B7A6]/80 max-w-[280px] leading-relaxed tracking-wide">
                {featuredQuote}
              </p>
            </div>
          </div>

          {/* Column 3: Right Supporting (exactly 4 balanced cards) */}
          <div className="col-span-3 flex flex-col gap-10">
            {rightSideImages.map((img) => (
              <GalleryItem 
                key={img.id} 
                img={img} 
                index={img.originalIdx} 
                onClick={() => handleOpenImage(img)} 
              />
            ))}
          </div>

        </div>

        {/* 2. TABLET: Balanced 2-column Grid */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-8 items-start px-4">
          <div className="flex flex-col gap-8">
            {tabletCol1.map((img) => (
              <GalleryItem 
                key={img.id} 
                img={img} 
                index={img.originalIdx} 
                onClick={() => handleOpenImage(img)} 
              />
            ))}
          </div>
          <div className="flex flex-col gap-8">
            {tabletCol2.map((img) => (
              <GalleryItem 
                key={img.id} 
                img={img} 
                index={img.originalIdx} 
                onClick={() => handleOpenImage(img)} 
              />
            ))}
          </div>
        </div>

        {/* 3. MOBILE: Clean 2-column gallery grid showing more flowers at once */}
        <div className="block md:hidden px-2">
          <div className="grid grid-cols-2 gap-4 w-full">
            {/* Left Column of Mobile Grid */}
            <div className="flex flex-col gap-4">
              {images.slice(0, 8).filter((_, idx) => idx % 2 === 0).map((img, i) => (
                <MobileGalleryItem
                  key={img.id}
                  img={img}
                  index={i * 2}
                  onClick={() => handleOpenImage(img)}
                  currentLang={currentLang}
                />
              ))}
            </div>
            
            {/* Right Column of Mobile Grid */}
            <div className="flex flex-col gap-4">
              {images.slice(0, 8).filter((_, idx) => idx % 2 === 1).map((img, i) => (
                <MobileGalleryItem
                  key={img.id}
                  img={img}
                  index={i * 2 + 1}
                  onClick={() => handleOpenImage(img)}
                  currentLang={currentLang}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Gallery CTA */}
        <div className="mt-14 sm:mt-20 text-center">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => playChime()}
            href={CONTACT.facebookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-peach hover:bg-[#D9875A] dark:hover:bg-[#E29367] text-white font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <Facebook size={18} />
            <span>{t('gallery.more_cta')}</span>
          </motion.a>
        </div>

      </div>

      {/* Modern Lightbox Modal to show zoomed image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-10 backdrop-blur-md"
            onClick={handleCloseImage}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 26, stiffness: 210 }}
              className="relative max-w-4xl w-full bg-[#fdfaf2] dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-warm-border/30 dark:border-neutral-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseImage}
                className="absolute top-4 right-4 z-10 p-2 sm:p-2.5 rounded-full bg-white/95 dark:bg-neutral-800 text-ink dark:text-cream hover:text-peach shadow-md border border-warm-border/35 dark:border-neutral-700 hover:scale-105 transition-all duration-200 cursor-pointer focus:outline-none"
                aria-label="Close zoom"
              >
                <X size={18} />
              </button>

              {/* Main Expanded Image layout */}
              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Image display */}
                <div className="md:col-span-8 aspect-video sm:aspect-square md:aspect-auto md:h-[70vh] bg-ink/5 dark:bg-neutral-950 overflow-hidden relative">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Interactive brand block */}
                <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-warm-white dark:bg-neutral-900">
                  <div className="space-y-4">
                    <div className="text-xs font-semibold tracking-widest text-[#BCA58C] dark:text-sage uppercase block">
                      Mê Hoa Gallery
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-ink dark:text-cream leading-snug">
                      {selectedImage.alt}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted dark:text-[#A69788] leading-relaxed">
                      Lên màu tinh xảo theo tone Vintage mộc mạc và Đơn giản tinh tế. Mê Hoa hứa hẹn gửi gắm trọn vẹn từng câu chuyện yêu thương của bạn.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-warm-border/40 dark:border-neutral-800">
                    <a
                      href={CONTACT.zaloLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playChime()}
                      className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-peach hover:bg-peach-hover text-white font-medium text-sm sm:text-base transition-all duration-300 cursor-pointer shadow-md"
                    >
                      Đặt mẫu này ngay
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Mobile specific styled product card
function MobileGalleryItem({ img, index, onClick, currentLang }) {
  const getCategoryLabel = (id, lang) => {
    const categories = {
      g1: { vi: 'Bó hoa tươi', en: 'Bouquet' },
      g2: { vi: 'Hoa hướng dương', en: 'Sunflower' },
      g3: { vi: 'Hoa lãng mạn', en: 'Sweet Rose' },
      g4: { vi: 'Hoa dại mộc mạc', en: 'Seasonal Mix' },
      g5: { vi: 'Giỏ hoa đan', en: 'Floral Basket' },
      g6: { vi: 'Kệ hoa khai trương', en: 'Opening Stand' },
      g7: { vi: 'Hoa cưới cô dâu', en: 'Bridal Bouquet' },
      g8: { vi: 'Thược dược cổ điển', en: 'Retro Blooms' },
      g9: { vi: 'Bó hoa Tulip', en: 'Tulip Spray' },
    };
    const defaultVal = { vi: 'Hoa thiết kế', en: 'Premium Floral' };
    return categories[id]?.[lang === 'en' ? 'en' : 'vi'] || defaultVal[lang === 'en' ? 'en' : 'vi'];
  };

  const category = getCategoryLabel(img.id, currentLang);
  const rotateDeg = index % 4 === 0 ? '-0.8deg' : index % 4 === 1 ? '0.7deg' : index % 4 === 2 ? '-0.5deg' : '0.6deg';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5% 0px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      style={{ rotate: rotateDeg }}
      className="relative bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-[1px] p-2.5 pb-5 shadow-[3px_6px_16px_rgba(40,32,24,0.07)] duration-200 transition-all cursor-pointer w-full flex flex-col justify-between"
    >
      {/* Tape decoration: simple mini scotch tape at top center */}
      <div 
        className="absolute -top-2 left-1/2 -translate-x-1/2 w-9 h-3.5 bg-[#EFDFCA]/55 dark:bg-[#7a6b5d]/45 backdrop-blur-[0.5px] border-l border-r border-[#D9C4AC]/30 z-15 shadow-[0_1px_1px_rgba(0,0,0,0.02)] pointer-events-none" 
        style={{ 
          clipPath: 'polygon(0% 12%, 10% 0%, 90% 4%, 100% 15%, 96% 85%, 88% 100%, 12% 96%, 0% 85%)',
          transform: 'translateX(-50%) rotate(-1deg)'
        }} 
      />

      {/* Solid Photographic area with constant aspect ratio 4:5 */}
      <div className="relative overflow-hidden w-full bg-neutral-50 dark:bg-neutral-950 aspect-[4/5] border border-neutral-200/90 shadow-[inset_0_1px_3px_rgba(0,0,0,0.06)] rounded-[1px]">
        {/* Retro style corner photo mounts */}
        <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-[#8C7A6B]/20 z-10 pointer-events-none rotate-45 transform origin-top-left border-t border-l border-white/30" />
        <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-[#8C7A6B]/20 z-10 pointer-events-none -rotate-45 transform origin-top-right border-t border-r border-white/30" />
        <div className="absolute bottom-0.5 left-0.5 w-1.5 h-1.5 bg-[#8C7A6B]/20 z-10 pointer-events-none -rotate-45 transform origin-bottom-left border-b border-l border-white/30" />
        <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 bg-[#8C7A6B]/20 z-10 pointer-events-none rotate-45 transform origin-bottom-right border-b border-r border-white/30" />

        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-full object-cover sepia-[0.08] contrast-[0.98] saturate-[0.94]"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/[0.04] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Styled vintage handwritten label area inside polaroid white margin */}
      <div className="mt-3 px-0.5 text-center flex flex-col justify-center">
        <span className="text-[9px] font-sans font-semibold tracking-widest text-[#9c846d] dark:text-[#A8B89A] uppercase block">
          {category}
        </span>
        <h4 className="mt-0.5 text-[11px] font-serif font-medium text-ink dark:text-cream leading-tight tracking-wide line-clamp-1 font-semibold">
          {img.alt}
        </h4>
      </div>
    </motion.div>
  );
}

// Polaroid Subcomponent with authentic details

function GalleryItem({ img, index, onClick, isFeatured = false }) {
  // Balanced rotation angles (slightly softer on mobile to prevent outer overflows)
  const rotationClass = isFeatured
    ? 'rotate-1 hover:rotate-0'
    : index % 4 === 0 
      ? '-rotate-1 md:-rotate-2 hover:rotate-0' 
      : index % 4 === 1 
        ? 'rotate-1.5 md:rotate-2.5 hover:rotate-0' 
        : index % 4 === 2 
          ? '-rotate-[1.5deg] md:-rotate-[1.5deg] hover:rotate-0' 
          : 'rotate-[1deg] md:rotate-[2deg] hover:rotate-0';

  return (
    <motion.div
      initial={{ opacity: 0, y: isFeatured ? 35 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5% 0px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: isFeatured ? 1.03 : 1.04, y: -8, zIndex: 20 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative bg-white border border-neutral-100 shadow-[5px_10px_22px_rgba(40,32,24,0.09)] hover:shadow-[15px_30px_45px_rgba(40,32,24,0.18)] duration-300 ease-out transition-all rounded-[1px] cursor-pointer flex flex-col justify-between ${rotationClass} max-w-full ${
        isFeatured 
          ? 'p-4 pb-12 sm:p-5 sm:pb-16' 
          : 'p-3.5 pb-9 sm:p-4.5 sm:pb-14'
      }`}
    >
      {/* Dynamic Vintage Adhesive Scotch/Washi Tape */}
      {(index % 3 !== 0 || isFeatured) && (
        <div 
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-4 sm:h-5 bg-[#EFDFCA]/55 dark:bg-[#7a6b5d]/45 backdrop-blur-[0.5px] border-l border-r border-[#D9C4AC]/30 z-15 shadow-[0_1px_2px_rgba(0,0,0,0.03)] pointer-events-none" 
          style={{ 
            clipPath: 'polygon(0% 15%, 8% 0%, 92% 5%, 100% 20%, 97% 85%, 91% 100%, 9% 95%, 0% 80%)',
            transform: 'translateX(-50%) rotate(-1.5deg)'
          }} 
        />
      )}

      {/* Main Photographic Print block inside Polaroid frame */}
      <div className={`relative overflow-hidden w-full bg-neutral-50 dark:bg-neutral-900 rounded-[1px] ${img.aspect} border border-neutral-200/90 shadow-[inset_0_2px_6px_rgba(0,0,0,0.07)]`}>
        {/* Intricate nostalgic metallic photo mounting corner braces */}
        <div className="absolute top-1 left-1 w-3.5 h-3.5 bg-[#8C7A6B]/25 z-10 pointer-events-none rotate-45 transform origin-top-left border-t border-l border-white/40" />
        <div className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#8C7A6B]/25 z-10 pointer-events-none -rotate-45 transform origin-top-right border-t border-r border-white/40" />
        <div className="absolute bottom-1 left-1 w-3.5 h-3.5 bg-[#8C7A6B]/25 z-10 pointer-events-none -rotate-45 transform origin-bottom-left border-b border-l border-white/40" />
        <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-[#8C7A6B]/25 z-10 pointer-events-none rotate-45 transform origin-bottom-right border-b border-r border-white/40" />

        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-full object-cover sepia-[0.11] contrast-[0.98] saturate-[0.92] hover:sepia-0 hover:contrast-100 hover:saturate-100 transition-all duration-700 ease-out"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        
        {/* Soft atmospheric analog film light filter overlay */}
        <div className="absolute inset-0 bg-amber-900/[0.02] pointer-events-none mix-blend-color-burn" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/[0.05] via-transparent to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
}
