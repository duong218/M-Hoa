import { BRAND } from '../../data/config';

const SIZE_STYLES = {
  nav: {
    frame: 'h-12 w-12 sm:h-14 sm:w-14',
    wordmark: 'text-lg sm:text-2xl tracking-[0.18em] sm:tracking-[0.22em]',
    gap: 'gap-2.5 sm:gap-3',
  },
  footer: {
    frame: 'h-14 w-14 sm:h-16 sm:w-16',
    wordmark: 'text-xl sm:text-3xl tracking-[0.2em] sm:tracking-[0.24em]',
    gap: 'gap-3 sm:gap-3.5',
  },
};

export default function BrandMark({ variant = 'nav', className = '' }) {
  const styles = SIZE_STYLES[variant] ?? SIZE_STYLES.nav;

  return (
    <span className={`inline-flex items-center ${styles.gap} ${className}`}>
      <span
        className={`${styles.frame} shrink-0 rounded-full overflow-hidden border-2 border-peach/35 shadow-md ring-1 ring-warm-border/50 bg-warm-white`}
      >
        <img
          src={BRAND.logoSrc}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover scale-110"
          width={64}
          height={64}
        />
      </span>
      <span
        className={`font-serif font-semibold text-ink group-hover:text-peach transition-colors duration-300 ${styles.wordmark}`}
      >
        MÊ HOA
      </span>
    </span>
  );
}
