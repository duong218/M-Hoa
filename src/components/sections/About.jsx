import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Tag, Sparkles, Heart } from 'lucide-react';
import { IMAGES } from '../../data/config';

export default function About() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section
      id="about"
      className="py-10 md:py-14 lg:py-16 bg-warm-white border-y border-warm-border/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Cozy workspace image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-cream">
              <img
                src={IMAGES.aboutWorkspace}
                alt="Mê Hoa Florist Workshop"
                className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.01]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/20 opacity-40 mix-blend-multiply" />
            </div>
            
            {/* Soft decorative visual block offset */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-butter/30 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-peach/20 rounded-full blur-2xl -z-10" />
          </motion.div>
 
          {/* Right Column: Narrative content */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-3"
            >
              <span className="text-xs font-semibold tracking-widest text-[#A8B89A] uppercase block">
                {t('about.title')}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink leading-tight">
                {t('about.headline')}
              </h2>
            </motion.div>
 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="space-y-4 text-sm sm:text-base text-muted leading-relaxed"
            >
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </motion.div>
 
            {/* Core differentiators */}
            <div className="pt-6 border-t border-warm-border">
              <h3 className="font-serif text-lg font-medium text-ink mb-5 tracking-wide">
                {t('about.diff_title')}
              </h3>
 
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-5% 0px' }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              >
                {/* Diff 1 */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <div className="inline-flex p-2 rounded-xl bg-orange-50 text-peach">
                    <Tag size={20} />
                  </div>
                  <h4 className="font-serif text-base font-semibold text-ink">
                    {t('about.diff1_title')}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {t('about.diff1_desc')}
                  </p>
                </motion.div>
 
                {/* Diff 2 */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <div className="inline-flex p-2 rounded-xl bg-yellow-50 text-amber-500">
                    <Sparkles size={20} />
                  </div>
                  <h4 className="font-serif text-base font-semibold text-ink">
                    {t('about.diff2_title')}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {t('about.diff2_desc')}
                  </p>
                </motion.div>
 
                {/* Diff 3 */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <div className="inline-flex p-2 rounded-xl bg-red-50 text-[#A8B89A]">
                    <Heart size={20} />
                  </div>
                  <h4 className="font-serif text-base font-semibold text-ink">
                    {t('about.diff3_title')}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {t('about.diff3_desc')}
                  </p>
                </motion.div>
              </motion.div>
 
              {/* Premium content-flow Alignment: elegant CTA element to complete hierarchy */}
              <div className="pt-8">
                <a
                  href="#gallery"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-peach hover:text-peach-hover hover:underline transition-colors duration-200"
                >
                  <span>{t('hero.cta_secondary')}</span>
                  <span className="text-base">→</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
