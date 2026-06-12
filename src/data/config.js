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
  aboutWorkspace: "https://res.cloudinary.com/dfzhynopw/image/upload/q_auto/f_auto/v1781280652/506052823_1133858278772630_9016655169123735905_n_pb79xo.jpg",

  // 4 Seasonal Images representing the 4 themes rotating in the Hero section
  seasonalHero: [
    {
      season: 'spring',
      src: 'https://res.cloudinary.com/dfzhynopw/image/upload/q_auto/f_auto/v1781280655/517382367_1157361483088976_1071128057293790504_n_yri6nk.jpg',
      titleVi: 'Xuân Tới Mới',
      titleEn: 'Fresh Spring',
      quoteVi: 'Mầm hoa sinh sôi, rạng rỡ nét xuân tràn lộc mới.',
      quoteEn: 'Sprouting fresh buds and glowing with absolute beauty.'
    },
    {
      season: 'love',
      src: 'https://res.cloudinary.com/dfzhynopw/image/upload/q_auto/f_auto/v1781280649/559239055_1233384055486718_5413593863278880311_n_rpc9cl.jpg',
      titleVi: 'Mùa Yêu Thương',
      titleEn: 'Season of Love',
      quoteVi: 'Hương hồng ngọt ngào, thắp lửa lãng mạn yêu thương.',
      quoteEn: 'Sweet romance blossoming through stunning seasonal roses.'
    },
    {
      season: 'autumn',
      src: 'https://res.cloudinary.com/dfzhynopw/image/upload/q_auto/f_auto/v1781280651/649375290_1363669385791517_247154252469953655_n_l5wctw.jpg',
      titleVi: 'Thu Mộc Mạc',
      titleEn: 'Rustic Autumn',
      quoteVi: 'Sắc cam ấm cúng, dịu êm hương đồng cỏ nội.',
      quoteEn: 'Warm vintage hues conveying timeless, cozy feelings.'
    },
    {
      season: 'winter',
      src: 'https://res.cloudinary.com/dfzhynopw/image/upload/q_auto/f_auto/v1781280650/595301241_1285897993568657_7653825400284979554_n_geegm5.jpg',
      titleVi: 'Đông Ấm Áp',
      titleEn: 'Cozy Winter',
      quoteVi: 'Sưởi ấm tâm hồn bằng sự quan tâm chân thành tinh tế.',
      quoteEn: 'Warming the coldest days with premium luxury florets.'
    }
  ]
};
