import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { playChime } from '../../utils/audio';
import { PRODUCTS_CATALOG } from '../../data/products';
import { CONTACT } from '../../data/config';

export default function Services() {
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language === 'en' ? 'en' : 'vi';

  const services = PRODUCTS_CATALOG.filter(item => item.type === 'service').map((item) => ({
    id: item.id,
    name: currentLang === 'en' ? item.altEn : item.altVi,
    desc: currentLang === 'en' ? item.descEn : item.descVi,
    img: item.src,
    alt: currentLang === 'en' ? item.altEn : item.altVi,
    price: currentLang === 'en' ? item.priceEn : item.priceVi
  }));

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <section id="services" className="py-10 md:py-14 lg:py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-12 space-y-3"
        >
          <span className="text-xs font-semibold tracking-widest text-[#A8B89A] uppercase block">
            {t('services.title')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink">
            {t('services.headline')}
          </h2>
          <p className="text-sm sm:text-base text-muted text-balance leading-relaxed">
            {t('services.desc')}
          </p>
        </motion.div>

        {/* 2x2 Asymmetric Grid (and 2 columns on mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-6 sm:gap-6 lg:gap-10 w-full justify-center">
          {services.map((service, index) => (
            <motion.a
              key={service.id}
              href={CONTACT.zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playChime()}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-5% 0px' }}
              className={`group flex flex-col justify-between rounded-2xl overflow-hidden bg-warm-white p-3 sm:p-5 border border-warm-border/60 hover:shadow-lg transition-all-custom cursor-pointer w-full ${
                index % 2 === 1 ? 'lg:translate-y-6' : ''
              }`}
            >
              {/* Product Visual Container */}
              <div className="relative aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden mb-4 sm:mb-6 bg-cream">
                <img
                  src={service.img}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {/* Visual Glass Tag */}
                <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-10 bg-white/90 backdrop-blur-sm py-1 px-2.5 sm:px-3.5 rounded-full border border-warm-border/40 text-[10px] sm:text-xs font-medium tracking-wide text-ink">
                  {currentLang === 'en' ? `From ${service.price}` : `Giá từ: ${service.price}`}
                </div>
              </div>

              {/* Product Texts */}
              <div className="space-y-1.5 sm:space-y-3 flex-grow flex flex-col justify-between">
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="font-serif text-base sm:text-xl lg:text-2xl font-medium text-ink group-hover:text-peach transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-muted leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {service.desc}
                  </p>
                </div>
                
                {/* Instant Action CTA */}
                <div className="pt-2 sm:pt-4 flex items-center justify-between text-peach text-xs sm:text-sm font-semibold tracking-wider uppercase">
                  <span>Mê Hoa Florist</span>
                  <div className="p-1 sm:p-1.5 rounded-full bg-peach/15 text-peach group-hover:bg-peach group-hover:text-white transition-colors duration-300">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Global Differentiate Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 lg:mt-16 text-center"
        >
          <p className="inline-flex flex-wrap items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-sage/10 text-muted text-xs font-medium border border-sage/20">
            <span className="w-1.5 h-1.5 rounded-full bg-sage" />
            <span>Mê Hoa florist: Giao hàng hỏa tốc trong 1-2 giờ · Đẹp xịn cam kết · Duyệt ảnh mới giao</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
