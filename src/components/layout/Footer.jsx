import { useTranslation } from 'react-i18next';
import { Mail, MapPin } from 'lucide-react';
import { BRAND, CONTACT } from '../../data/config';
import BrandMark from '../ui/BrandMark';

export default function Footer() {
  const { t } = useTranslation();

  const navItems = [
    { name: t('nav.gallery'), hash: '#gallery' },
    { name: t('nav.services'), hash: '#services' },
    { name: t('nav.process'), hash: '#process' },
    { name: t('nav.faq'), hash: '#faq' },
    { name: t('nav.contact'), hash: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-warm-white border-t border-warm-border/60 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-start">
          
          {/* Col 1: Shop Brand */}
          <div className="space-y-4">
            <a href="#" className="inline-flex items-center group" aria-label={BRAND.logoAlt}>
              <BrandMark variant="footer" />
            </a>
            <p className="font-serif italic text-muted text-lg tracking-wide">
              "{t('hero.sub')}"
            </p>
            <p className="text-xs text-light-text max-w-xs leading-relaxed">
              Từ 2023, mang đam mê cắm hoa tinh tế sưởi ấm từng ngóc ngách thủ đô Hà Nội.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-ink tracking-wide">
              {t('footer.quickLinks', 'Quick Links')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.hash}>
                  <a 
                    href={item.hash} 
                    className="text-muted hover:text-peach transition-colors duration-200 block py-0.5"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Info & Delivery Area */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-ink tracking-wide">
              {t('nav.contact')}
            </h4>
            <div className="space-y-2.5 text-sm text-muted">
              <div className="flex items-start gap-2.5">
                <MapPin className="text-peach shrink-0 mt-0.5" size={16} />
                <span>Nội thành Hà Nội (Bán kính 15km từ trung tâm)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="text-peach shrink-0 mt-0.5" size={16} />
                <span>{CONTACT.footerEmail}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Occasions & Commitment */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-ink tracking-wide">
              Mê Hoa Commitment
            </h4>
            <p className="text-sm text-muted leading-relaxed">
              Chúng tôi cam kết mang lại những bó hoa tươi thắm, tư vấn tận tâm và chất lượng dịch vụ trọn vẹn nhất cho mọi sự kiện Valentine, 8/3, 20/10.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-border/40 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-light-text">
          <p>{t('footer.rights')}</p>
          <div className="flex gap-6">
            {navItems.map((item) => (
              <a key={item.hash} href={item.hash} className="hover:text-peach transition-colors duration-200">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
