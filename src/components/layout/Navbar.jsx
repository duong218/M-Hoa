import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Menu, X, Flower2 } from 'lucide-react';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import ThemeToggler from '../ui/ThemeToggler';
import SearchBar from '../ui/SearchBar';

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Hook for tracking page scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Toggle scrolled status after 50px
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.gallery'), hash: '#gallery' },
    { name: t('nav.services'), hash: '#services' },
    { name: t('nav.process'), hash: '#process' },
    { name: t('nav.faq'), hash: '#faq' },
    { name: t('nav.contact'), hash: '#contact' },
  ];

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-cream/80 backdrop-blur-md shadow-sm border-b border-warm-border/50 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Subtle top scroll progress bar */}
        <motion.div
          id="scroll-progress"
          className="absolute top-0 left-0 right-0 h-[3px] bg-peach origin-left z-55"
          style={{ scaleX }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group cursor-pointer" id="logo-nav">
              <Flower2 className="text-peach group-hover:rotate-45 transition-transform duration-700 ease-out" size={24} />
              <span className="font-serif text-2xl font-medium tracking-wider text-ink group-hover:text-peach transition-colors duration-300">
                Mê Hoa
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.hash}
                  href={item.hash}
                  className="text-sm font-medium tracking-wide text-muted hover:text-peach transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-peach hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right Side Options */}
            <div className="hidden md:flex items-center gap-3">
              <SearchBar />
              <ThemeToggler />
              <LanguageSwitcher />
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggler />
              <LanguageSwitcher />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 -mr-2 rounded-full hover:bg-warm-border/30 text-ink cursor-pointer focus:outline-none"
                aria-label="Toggle menu"
                id="mobile-menu-toggle"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-down Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden bg-cream border-b border-warm-border absolute top-full left-0 right-0 overflow-hidden shadow-lg"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                <div className="pb-2.5 border-b border-warm-border/30 mb-2.5">
                  <SearchBar />
                </div>
                {navItems.map((item) => (
                  <a
                    key={item.hash}
                    href={item.hash}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-ink hover:text-peach hover:bg-warm-white/50 rounded-lg transition-all duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
