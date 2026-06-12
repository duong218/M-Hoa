import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { playClick } from '../../utils/audio';

function getSealDisplay(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    const first = parts[0][0] || '';
    const last = parts[parts.length - 1][0] || '';
    return { label: `${first}.${last}`.toUpperCase(), isInitials: true };
  }
  return { label: (parts[0]?.[0] || '?').toUpperCase(), isInitials: false };
}

function WaxSeal({ name, lang }) {
  const { label, isInitials } = getSealDisplay(name);
  const ariaLabel =
    lang === 'en' ? `Wax seal monogram for ${name}` : `Con dấu sáp của ${name}`;

  return (
    <div
      className={`wax-seal ${isInitials ? 'wax-seal--initials' : ''}`}
      role="img"
      aria-label={ariaLabel}
    >
      <span className="wax-seal__letter" aria-hidden="true">
        {label}
      </span>
    </div>
  );
}

export default function Testimonials() {
  const { i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Chi Mai',
      rating: 5,
      trustVi: 'Đã mua hoa sinh nhật',
      trustEn: 'Ordered birthday flowers',
      tagVi: 'Bó Hoa Thiết Kế',
      tagEn: 'Bespoke Bouquet',
      textVi:
        'Bó hoa tone mộc mạc ở Mê Hoa cực kỳ rực rỡ và đầy đặn so với tầm giá. Mình thích nhất ở khoản được duyệt ảnh thật tỉ mỉ trước khi ship hỏa tốc. Dịch vụ tuyệt vời!',
      textEn:
        'The rustic bouquet from Me Hoa is extremely vibrant and full for its price. I absolutely love that they sent a detailed photo preview before express shipping. Stellar service!',
    },
    {
      id: 2,
      name: 'Thế Anh',
      rating: 5,
      trustVi: 'Đã tặng hoa kỷ niệm',
      trustEn: 'Anniversary bouquet gift',
      tagVi: 'Viết Thiệp Theo Ý',
      tagEn: 'Bespoke Love Notes',
      textVi:
        'Content thiệp viết tay đi kèm rất có gu, tình cảm, nét viết thanh lịch mà không bị rập khuôn. Người yêu mình nhận hoa xong cười tít mắt vì quá bất ngờ và xúc động.',
      textEn:
        'The hand-written greeting cards are so tasteful, personal, and elegantly penned. My partner was incredibly surprised and touched when receiving the delivery.',
    },
    {
      id: 3,
      name: 'Vy Linh',
      rating: 5,
      trustVi: 'Đã đặt giao hỏa tốc',
      trustEn: 'Express delivery order',
      tagVi: 'Giao Hỏa Tốc',
      tagEn: 'Express Delivery',
      textVi:
        'Cảm ơn Mê Hoa vì giỏ hoa xinh xắn thiết kế siêu nhanh chỉ trong hơn 1 tiếng để kịp giờ tiệc. Đội ngũ tư vấn vô cùng dễ thương, nhiệt tình và chu đáo hết mức!',
      textEn:
        'Massive thanks to Me Hoa for designing a gorgeous flower basket in just over an hour for an urgent party. The team is incredibly adorable, proactive, and caring!',
    },
    {
      id: 4,
      name: 'Khánh An',
      rating: 5,
      trustVi: 'Khách hàng tại Hà Nội',
      trustEn: 'Customer in Hanoi',
      tagVi: 'Phong Cách Vintage',
      tagEn: 'Vintage Aesthetic',
      textVi:
        'Mê đắm phong cách cắm hoa vintage nhẹ nhàng, bay bổng và đầy chất thơ ở đây. Từng loại hoa lá được kết hợp tự nhiên, tạo cảm giác dịu êm, sang trọng và đầy cá tính.',
      textEn:
        'In love with the vintage floral arrangements here—airy, flowy, and full of romance. Each bloom is integrated naturally, creating a comforting yet unique style.',
    },
  ];

  const handlePrev = () => {
    playClick();
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    playClick();
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    if (index === activeIndex) return;
    playClick();
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const currentLang = i18n.language === 'en' ? 'en' : 'vi';
  const active = testimonials[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <section
      id="testimonials"
      className="py-10 md:py-14 lg:py-16 bg-cream border-t border-warm-border/50 overflow-hidden relative"
    >
      <div className="absolute top-20 left-10 w-48 h-48 bg-sage/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-peach/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14 space-y-3"
        >
          <span className="text-xs font-semibold tracking-widest text-peach uppercase block">
            {currentLang === 'en' ? 'TESTIMONIALS' : 'PHẢN HỒI'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink leading-tight">
            {currentLang === 'en' ? 'Why Our Customers Fall in Love' : 'Khách hàng kể gì về Mê Hoa'}
          </h2>
          <p className="text-sm sm:text-base text-muted text-balance leading-relaxed">
            {currentLang === 'en'
              ? 'Real messages and warm stories shared by our wonderful flower lovers in Hanoi.'
              : 'Những lời nhắn gửi chân thành, mộc mạc từ chính người yêu hoa tại Hà Nội bên những bó hoa đong đầy xúc cảm.'}
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-2 sm:px-12">
          <div className="absolute -top-10 -left-2 sm:left-4 text-peach/15 select-none pointer-events-none">
            <Quote size={80} className="fill-current" />
          </div>

          <div className="relative min-h-[360px] sm:min-h-[300px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full bg-warm-white rounded-3xl p-6 sm:p-10 md:p-12 border border-warm-border/60 shadow-md flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center relative"
              >
                <div
                  className="testimonial-identity flex md:flex-col items-center gap-4 shrink-0 mx-auto md:mx-0 text-center md:max-w-[9.5rem]"
                  tabIndex={0}
                >
                  <WaxSeal name={active.name} lang={currentLang} />

                  <div className="flex flex-col items-center md:items-center gap-1.5">
                    <h4 className="font-sans text-lg font-medium text-ink tracking-tight">
                      {active.name}
                    </h4>

                    <div
                      className="flex items-center justify-center gap-0.5"
                      aria-label={`${active.rating} ${currentLang === 'en' ? 'stars' : 'sao'}`}
                    >
                      {[...Array(active.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-[#C58F72] text-[#C58F72]" />
                      ))}
                    </div>

                    <p className="testimonial-trust">
                      {currentLang === 'en' ? active.trustEn : active.trustVi}
                    </p>
                  </div>
                </div>

                <div className="flex-1 space-y-4 text-center md:text-left w-full">
                  <blockquote className="text-base sm:text-lg text-ink font-serif italic leading-relaxed text-balance">
                    &ldquo;{currentLang === 'en' ? active.textEn : active.textVi}&rdquo;
                  </blockquote>

                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#EAD7C7]/35 text-muted text-[10px] sm:text-xs font-sans font-medium tracking-wide border border-[#D9B29A]/50 uppercase">
                      <span className="w-1 h-1 rounded-full bg-[#9E6E56]/70" />
                      <span>{currentLang === 'en' ? active.tagEn : active.tagVi}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between items-center hidden sm:flex pointer-events-none">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white text-ink hover:text-peach border border-warm-border/70 hover:border-peach shadow-md hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer pointer-events-auto focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white text-ink hover:text-peach border border-warm-border/70 hover:border-peach shadow-md hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer pointer-events-auto focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex justify-center items-center gap-3 mt-8">
            <button
              onClick={handlePrev}
              className="sm:hidden w-10 h-10 rounded-full bg-white text-ink border border-warm-border/50 shadow-sm flex items-center justify-center active:scale-95 transition-transform"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`h-2.5 rounded-full transition-all duration-350 cursor-pointer focus:outline-none ${
                    idx === activeIndex ? 'bg-peach w-6' : 'bg-warm-border hover:bg-muted w-2.5'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="sm:hidden w-10 h-10 rounded-full bg-white text-ink border border-warm-border/50 shadow-sm flex items-center justify-center active:scale-95 transition-transform"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
