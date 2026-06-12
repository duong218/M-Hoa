import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { playChime } from '../../utils/audio';
import { CONTACT } from '../../data/config';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Highly resilient native observer that hides CTA when the contact block is visible
    const contactEl = document.getElementById('contact');
    if (!contactEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { rootMargin: '0px', threshold: 0.05 }
    );

    observer.observe(contactEl);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          id="floating-zalo-cta"
          href={CONTACT.zaloLink} // Centralized Zalo link
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Liên hệ Zalo"
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          onClick={() => playChime()}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-peach text-white shadow-lg cursor-pointer group"
        >
          {/* Pulse Ripple background indicator */}
          <div className="absolute inset-0 rounded-full bg-peach/40 animate-pulse-ring" />
          
          <MessageCircle size={26} className="relative z-10 text-white transition-transform duration-300 group-hover:rotate-12" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
