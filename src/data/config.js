import brandLogo from '../public/images/logo/logo.jpg';

export const BRAND = {
  logoSrc: brandLogo,
  logoAlt: 'Mê Hoa — Grow, glow, and bloom.',
};

export const CONTACT = {
  // Main representative telephone/Zalo number
  zaloNumber: "0989601832",
  
  // Zalo direct contact link
  zaloLink: "https://zalo.me/0989601832",
  
  // Direct Facebook fanpage or profile URL
  facebookLink: "https://www.facebook.com/profile.php?id=100064454065971&mibextid=wwXIfr&rdid=7sDK5H218WeIJRLo&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19ADAYy7wE%2F%3Fmibextid%3DwwXIfr#",
  
  // Email address for direct inquiries
  gmail: "manhhng28@gmail.com",
  
  // Alternative footer email address
  footerEmail: "contact.mehoa@gmail.com",
};

export const IMAGES = {
  // Image for the workspace / workshop in the About section
  aboutWorkspace: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=800&auto=format&fit=crop",

  // 4 Seasonal Images representing the 4 themes rotating in the Hero section
  seasonalHero: [
    {
      season: 'spring',
      src: 'https://images.unsplash.com/photo-1522810489980-3485072f8836?q=80&w=800&auto=format&fit=crop',
      titleVi: 'Xuân Tới Mới',
      titleEn: 'Fresh Spring',
      quoteVi: 'Mầm hoa sinh sôi, rạng rỡ nét xuân tràn lộc mới.',
      quoteEn: 'Sprouting fresh buds and glowing with absolute beauty.'
    },
    {
      season: 'love',
      src: 'https://images.unsplash.com/photo-1550950158-d0d960dff51b?q=80&w=800&auto=format&fit=crop',
      titleVi: 'Mùa Yêu Thương',
      titleEn: 'Season of Love',
      quoteVi: 'Hương hồng ngọt ngào, thắp lửa lãng mạn yêu thương.',
      quoteEn: 'Sweet romance blossoming through stunning seasonal roses.'
    },
    {
      season: 'autumn',
      src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop',
      titleVi: 'Thu Mộc Mạc',
      titleEn: 'Rustic Autumn',
      quoteVi: 'Sắc cam ấm cúng, dịu êm hương đồng cỏ nội.',
      quoteEn: 'Warm vintage hues conveying timeless, cozy feelings.'
    },
    {
      season: 'winter',
      src: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop',
      titleVi: 'Đông Ấm Áp',
      titleEn: 'Cozy Winter',
      quoteVi: 'Sưởi ấm tâm hồn bằng sự quan tâm chân thành tinh tế.',
      quoteEn: 'Warming the coldest days with premium luxury florets.'
    }
  ]
};
