/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import './i18n'; // Initialise bilingual dictionary files
import { useTranslation } from 'react-i18next';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useLenis } from './hooks/useLenis';

// Layout structure
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Page sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Process from './components/sections/Process';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

// Floating action items
import FloatingCTA from './components/ui/FloatingCTA';

export default function App() {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  // Mount buttery-smooth scroll hooks
  useLenis();

  // Fine-tuned SEO Metadata
  const seo = {
    title: isEn ? "Mê Hoa Hanoi — Elegant & Affordable Seasonal Fresh Flowers" : "Mê Hoa Hà Nội — Tiệm Hoa Tươi Thiết Kế Tinh Tế, Giá Hợp Lý",
    description: isEn 
      ? "Mê Hoa is a boutique florist in Hanoi crafting exquisite fresh flower bouquets, baskets, and stands with touching stories. Order online with top attention, photo checks, and speedy delivery." 
      : "Tiệm hoa thiết kế Mê Hoa Hà Nội chuyên cung cấp hoa bó, giỏ mây, kệ hoa chúc mừng khai trương và hoa cưới tuyệt hảo với giá từ 200k. Duyệt ảnh thực tế, giao nhanh Hà Nội.",
    keywords: isEn
      ? "flower shop hanoi, buy flowers hanoi, cheap fresh flowers hanoi, bridal bouquets hanoi, birthday flowers hanoi, grand opening stands hanoi"
      : "tiệm hoa hà nội, điện hoa hà nội, hoa tươi giá tốt hà nội, hoa khai trương hà nội, hoa chúc mừng hà nội, hoa hồng hà nội, hoa cưới hà nội",
    ogImage: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop"
  };

  return (
    <HelmetProvider>
      <Helmet>
        <html lang={isEn ? "en" : "vi"} />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        
        {/* Open Graph / Facebook Socials */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="900" />
        <meta property="og:site_name" content="Mê Hoa" />

        {/* Twitter Card Layout */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.ogImage} />
        
        {/* Additional helpful SEO metrics */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mê Hoa Hanoi" />
      </Helmet>

      <div className="relative min-h-[100dvh] flex flex-col font-sans bg-cream text-ink antialiased selection:bg-peach/20 overflow-x-hidden">
        {/* Sticky frosted glass header */}
        <Navbar />

        {/* Main sections */}
        <main className="flex-grow overflow-x-hidden">
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Process />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>

        {/* Dynamic footer */}
        <Footer />

        {/* Floating CTA Zalo circular helper */}
        <FloatingCTA />
      </div>
    </HelmetProvider>
  );
}
