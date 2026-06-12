import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { playClick } from '../../utils/audio';

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') }
  ];

  const toggleFaq = (index) => {
    playClick();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 md:py-14 lg:py-16 bg-warm-white border-b border-warm-border/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10 md:mb-12 space-y-3"
        >
          <span className="text-xs font-semibold tracking-widest text-peach uppercase block">
            {t('faq.title')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink">
            {t('faq.headline')}
          </h2>
        </motion.div>

        {/* FAQ Accordion Lists */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-5% 0px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="space-y-4"
        >
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5% 0px' }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-cream/40 border-peach'
                    : 'bg-white border-warm-border/40 hover:border-peach/50'
                }`}
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-start justify-between p-5 md:p-6 text-left font-medium text-ink focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex gap-3.5 pr-4">
                    <HelpCircle className="text-peach shrink-0 mt-1" size={18} />
                    <span className="font-serif text-base sm:text-lg font-medium text-ink leading-snug">
                      {item.q}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-muted shrink-0 mt-1"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                {/* Body Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-6 md:px-6 md:pb-7 pl-[50px] border-t border-warm-border/20">
                        <p className="text-sm text-muted leading-relaxed whitespace-pre-line">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
