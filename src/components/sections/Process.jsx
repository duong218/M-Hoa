import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, BadgeCheck, Camera, Truck, Heart, ChevronDown, CalendarRange } from 'lucide-react';
import { playClick } from '../../utils/audio';

export default function Process() {
  const { t } = useTranslation();
  
  // Track open accordion on mobile
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: t('process.step1_title'),
      desc: t('process.step1_desc'),
      icon: MessageSquare,
      color: 'bg-warm-white text-peach border-peach/20'
    },
    {
      id: 2,
      title: t('process.step2_title'),
      desc: t('process.step2_desc'),
      icon: BadgeCheck,
      color: 'bg-warm-white text-sage border-sage/20'
    },
    {
      id: 3,
      title: t('process.step3_title'),
      desc: t('process.step3_desc'),
      icon: Camera,
      color: 'bg-warm-white text-peach border-peach/20'
    },
    {
      id: 4,
      title: t('process.step4_title'),
      desc: t('process.step4_desc'),
      icon: Truck,
      color: 'bg-warm-white text-sage border-sage/20'
    },
    {
      id: 5,
      title: t('process.step5_title'),
      desc: t('process.step5_desc'),
      icon: Heart,
      color: 'bg-warm-white text-peach border-peach/20'
    }
  ];

  const toggleStep = (index) => {
    playClick();
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <section id="process" className="py-10 md:py-14 lg:py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-8 space-y-3"
        >
          <span className="text-xs font-semibold tracking-widest text-[#A8B89A] uppercase block">
            {t('process.title')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink">
            {t('process.headline')}
          </h2>
        </motion.div>

        {/* Dynamic Warning Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-10 md:mb-12"
        >
          <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-peach/10 text-ink text-xs sm:text-sm font-medium border border-peach/20 max-w-2xl text-center leading-relaxed">
            <CalendarRange size={16} className="text-peach shrink-0" />
            <span>{t('process.badge')}</span>
          </div>
        </motion.div>

        {/* Horizontal Timeline (Desktop Only) */}
        <div className="hidden lg:grid grid-cols-5 gap-6 relative pt-4">
          {/* Connector Line */}
          <div className="absolute top-[52px] left-8 right-8 h-[2.5px] bg-warm-border/50 -z-10" />

          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5% 0px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                className="space-y-4 text-center group"
              >
                {/* Timeline Node Node */}
                <div className="flex justify-center relative">
                  <div className={`w-16 h-16 rounded-full border flex items-center justify-center bg-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow ${step.color}`}>
                    <IconComponent size={24} />
                  </div>
                  {/* Subtle index tag */}
                  <span className="absolute -top-1.5 -right-1.5 px-2 py-0.5 rounded-full bg-warm-border text-ink text-[10px] font-bold">
                    0{step.id}
                  </span>
                </div>

                {/* Info Text */}
                <div className="space-y-2">
                  <h3 className="font-serif text-base font-semibold text-ink group-hover:text-peach transition-colors duration-200">
                    {step.title.substring(3)}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Accordion List (Mobile & Tablet) */}
        <div className="block lg:hidden space-y-4">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isOpen = activeStep === index;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5% 0px' }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  isOpen ? 'bg-warm-white border-peach' : 'bg-white border-warm-border/50'
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => toggleStep(index)}
                  className="w-full flex items-center justify-between p-4 text-left font-medium text-ink focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center p-2 border ${step.color}`}>
                      <IconComponent size={18} />
                    </div>
                    <span className="font-serif text-base font-semibold text-ink">
                      {step.title}
                    </span>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-muted"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                {/* Expandable Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-4 pb-5 pt-1 pl-[54px] border-t border-warm-border/30">
                        <p className="text-xs sm:text-sm text-muted leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
