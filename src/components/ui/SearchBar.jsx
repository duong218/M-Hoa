import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { playClick, playChime } from '../../utils/audio';
import { PRODUCTS_CATALOG } from '../../data/products';
import { CONTACT } from '../../data/config';

// Helper to remove accents/diacritics for accents-insensitive Vietnamese search
function normalizeString(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd');
}

export default function SearchBar() {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [results, setResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const containerRef = useRef(null);
  const currentLang = i18n.language === 'en' ? 'en' : 'vi';

  // Sample quick suggestion terms
  const suggestions = currentLang === 'en' 
    ? ['Bouquet', 'Basket', 'Opening']
    : ['Bó hoa', 'Giỏ hoa', 'Kệ hoa'];

  // Handle outside click to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Live filter products as query changes
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const normalizedQuery = normalizeString(query);
    const filtered = PRODUCTS_CATALOG.filter((item) => {
      const nameMatch = normalizeString(currentLang === 'en' ? item.altEn : item.altVi).includes(normalizedQuery);
      const descMatch = normalizeString(currentLang === 'en' ? item.descEn : item.descVi).includes(normalizedQuery);
      return nameMatch || descMatch;
    });

    setResults(filtered);
  }, [query, currentLang]);

  const handleSuggestionClick = (term) => {
    playClick();
    setQuery(term);
    setIsFocused(true);
  };

  const handleProductSelect = (product) => {
    playChime();
    setSelectedProduct(product);
    setIsFocused(false);
    
    // Smooth scroll to parent section under the hood so page remains contextual
    const elementId = product.type === 'gallery' ? 'gallery' : 'services';
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleClear = () => {
    playClick();
    setQuery('');
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-xs" id="nav-search-bar">
      
      {/* Search Input field */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" size={16} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            playClick();
            setIsFocused(true);
          }}
          placeholder={currentLang === 'en' ? 'Search flowers...' : 'Tìm mẫu hoa...'}
          className="w-full pl-10 pr-9 py-2 rounded-full border border-warm-border/80 bg-warm-white/70 backdrop-blur-sm focus:bg-white text-ink text-xs focus:outline-none focus:ring-1 focus:ring-peach focus:border-peach transition-all duration-350 shadow-inner"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-peach transition-colors p-1"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Floating Suggestions/Results Dropdown */}
      <AnimatePresence>
        {isFocused && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute left-0 sm:left-auto right-0 mt-2 w-[290px] sm:w-[360px] rounded-2xl bg-white border border-warm-border shadow-2xl z-[90] overflow-hidden p-3"
          >
            {/* Case 1: Empty Query - Show suggestions */}
            {!query.trim() ? (
              <div className="space-y-3">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#A8B89A]">
                  <Sparkles size={12} className="text-peach animate-pulse" />
                  <span>{currentLang === 'en' ? 'TRENDING SEARCHES' : 'GỢI Ý TÌM KIẾM'}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {suggestions.map((term) => (
                    <button
                      key={term}
                      onClick={() => handleSuggestionClick(term)}
                      className="px-3 py-1.5 rounded-full bg-cream hover:bg-peach/10 text-xs text-ink hover:text-peach font-medium transition-colors duration-250 cursor-pointer"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Case 2: Matching Results */
              <div className="space-y-3">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#A8B89A]">
                  {currentLang === 'en' ? `Results (${results.length})` : `Kết quả tìm thấy (${results.length})`}
                </div>

                {results.length > 0 ? (
                  <div className="divide-y divide-warm-border/40 max-h-[280px] overflow-y-auto pr-1">
                    {results.map((product) => {
                      const title = currentLang === 'en' ? product.altEn : product.altVi;
                      const description = currentLang === 'en' ? product.descEn : product.descVi;
                      const subtitle = product.type === 'service' 
                        ? (currentLang === 'en' ? `Dịch vụ từ ${product.priceEn}` : `Dịch vụ · Giá từ ${product.priceVi}`) 
                        : (currentLang === 'en' ? 'Bộ sưu tập mẫu hoa' : 'Sản phẩm · Bộ sưu tập');
                        
                      return (
                        <div
                          key={product.id}
                          onClick={() => handleProductSelect(product)}
                          className="flex items-center gap-3 py-2.5 hover:bg-cream/45 rounded-xl cursor-pointer transition-colors duration-200 text-left px-2"
                        >
                          {/* Left photo thumb */}
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-cream shrink-0 border border-warm-border/30">
                            <img src={product.src} alt={title} className="w-full h-full object-cover" />
                          </div>
                          
                          {/* Text info and details */}
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold text-ink truncate font-serif">
                              {title}
                            </div>
                            <div className="text-[10px] text-muted truncate mt-0.5 font-sans">
                              {description}
                            </div>
                            <div className="text-[9px] uppercase tracking-wider text-peach font-semibold mt-1">
                              {subtitle}
                            </div>
                          </div>
                          
                          {/* Touch details arrow */}
                          <div className="text-muted/60">
                            <ArrowRight size={12} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-6 text-xs text-muted">
                    {currentLang === 'en' ? 'No flowers found matching your trend.' : 'Không tìm thấy mẫu hoa nào phù hợp.'}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Embedded High-Quality Modular Quick View/Detail Dialog popup */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-ink/90 p-4 sm:p-10 backdrop-blur-sm"
            onClick={() => {
              playClick();
              setSelectedProduct(null);
            }}
          >
            {/* Modal Card content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative max-w-4xl w-full bg-cream rounded-3xl overflow-hidden shadow-2xl border border-warm-border/40"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button icon */}
              <button
                onClick={() => {
                  playClick();
                  setSelectedProduct(null);
                }}
                className="absolute top-4 right-4 z-10 p-2 sm:p-2.5 rounded-full bg-white/95 text-ink hover:text-peach shadow-md border border-warm-border/35 hover:scale-105 transition-all duration-200 cursor-pointer focus:outline-none"
                aria-label="Close detail panel"
              >
                <X size={18} />
              </button>

              {/* Grid block layouts */}
              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Photo showcase */}
                <div className="md:col-span-8 aspect-video sm:aspect-square md:aspect-auto md:h-[70vh] bg-ink/5 overflow-hidden">
                  <img
                    src={selectedProduct.src}
                    alt={currentLang === 'en' ? selectedProduct.altEn : selectedProduct.altVi}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Brand information context */}
                <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-warm-white text-left">
                  <div className="space-y-4">
                    <span className="text-xs font-semibold tracking-widest text-[#A8B89A] uppercase block">
                      {selectedProduct.type === 'service' 
                        ? (currentLang === 'en' ? 'Mê Hoa Service' : 'Dịch Vụ Mê Hoa')
                        : (currentLang === 'en' ? 'Mê Hoa Gallery' : 'Thiết Kế Mê Hoa')}
                    </span>
                    
                    <h3 className="font-serif text-xl sm:text-2xl font-serif font-medium text-ink leading-snug">
                      {currentLang === 'en' ? selectedProduct.altEn : selectedProduct.altVi}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {currentLang === 'en' ? selectedProduct.descEn : selectedProduct.descVi}
                    </p>

                    {selectedProduct.type === 'service' && selectedProduct.priceVi && (
                      <div className="mt-2 inline-block px-3 py-1 rounded-full bg-peach/10 text-peach text-xs font-bold border border-peach/20">
                        {currentLang === 'en' ? `Pricing: From ${selectedProduct.priceEn}` : `Giá tham khảo: ${selectedProduct.priceVi}`}
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-warm-border/50">
                    <a
                      href={CONTACT.zaloLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playChime()}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-peach hover:bg-peach-hover text-white font-medium text-sm sm:text-base transition-all duration-300 cursor-pointer shadow-md"
                    >
                      <MessageCircle size={18} />
                      <span>{currentLang === 'en' ? 'Order via Zalo' : 'Tư vấn đặt mẫu này'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
