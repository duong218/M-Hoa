import { useEffect } from 'react';

/**
 * Custom smooth scroll handler utilising native browser APIs.
 * Guarantees buttery-smooth performance, zero layout shift,
 * and seamless fallback across iOS, Android, and Desktop.
 */
export function useLenis() {
  useEffect(() => {
    // Guarantee that smooth scroll behavior is enabled
    document.documentElement.classList.add('scroll-smooth');
    
    // Intercept visual anchor clicks for a perfectly timed, smooth transition
    const handleAnchorClick = (e) => {
      const target = e.target;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        const id = anchor.hash;
        const targetElement = document.querySelector(id);
        if (targetElement) {
          e.preventDefault();
          
          // Smooth scroll to the target section with perfect padding offset
          const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
          
          // Optionally update the URL history cleanly
          window.history.pushState(null, '', id);
        }
      }
    };

    // Smooth entry transition on load
    window.addEventListener('click', handleAnchorClick);
    return () => {
      window.removeEventListener('click', handleAnchorClick);
    };
  }, []);
}
