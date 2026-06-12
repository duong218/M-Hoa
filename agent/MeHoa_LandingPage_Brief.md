# 🌸 MÊ HOA — LANDING PAGE BRIEF & PROMPT
> Tài liệu tổng hợp yêu cầu · Tư vấn kỹ thuật · Prompt cho AI Studio

---

## 📋 TÓM TẮT KHÁCH HÀNG (từ Google Sheet)

| Hạng mục | Thông tin |
|---|---|
| **Tên shop** | Mê Hoa |
| **Tagline** | *"Grow, glow, and bloom."* |
| **3 từ mô tả** | Đẹp · Xịn · Mê |
| **Điểm khác biệt** | Giá hợp lý + content chất + phục vụ chu đáo |
| **Khách hàng** | Nam & nữ 18–50 tuổi |
| **Dịp chính** | Valentine 14/2 · Quốc tế Phụ nữ 8/3 · 20/10 |
| **Ngân sách phổ biến** | 200k–500k |
| **Sản phẩm** | Bó hoa · Giỏ · Kệ · Hoa cưới cầm tay |
| **Giao hàng** | Nội thành HN bán kính 15km, phí theo app |
| **Thời gian đặt** | 1–2 ngày (gấp tối thiểu 1–2 tiếng) |
| **Phong cách thiết kế** | Vintage · Đơn giản |
| **Tone màu** | Cam nhạt · Vàng nhạt · Hồng nhạt |
| **Tham khảo** | Hoa Trong Ngõ · Floral Village · Hoa Club |
| **Kênh liên hệ** | Tất cả (Zalo · Facebook · Instagram) |
| **Mục tiêu trang** | Tạo ấn tượng + thể hiện tay nghề |
| **Cảm nhận muốn để lại** | "Hoa phù hợp với mình — muốn đặt ngay" |
| **Ảnh sẵn có** | >1000 ảnh trên Facebook |
| **Logo/Font** | Đã có logo · Font: Grow, Glow, and Bloom |
| **Domain** | Chưa có, không muốn mua |
| **Deploy** | Vercel (free) |
| **Tự chỉnh sửa** | Có thể |

---

## 🏗️ KIẾN TRÚC KỸ THUẬT

### Stack chốt
```
Vite + React 18
Tailwind CSS v3
i18next (vi/en)
@lenis/react (smooth scroll)
framer-motion (animation)
@phosphor-icons/react (icons)
react-intersection-observer (scroll trigger)
```

### Cấu trúc thư mục chuẩn
```
me-hoa/
├── public/
│   ├── images/          ← placeholder ảnh hoa (bạn replace sau)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Process.jsx
│   │   │   ├── FAQ.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── FloatingCTA.jsx
│   │       ├── LanguageSwitcher.jsx
│   │       └── ScrollProgress.jsx
│   ├── hooks/
│   │   └── useLenis.js
│   ├── i18n/
│   │   ├── index.js
│   │   ├── vi.json
│   │   └── en.json
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

### Packages cần cài
```bash
npm create vite@latest me-hoa -- --template react
cd me-hoa
npm install tailwindcss@3 postcss autoprefixer
npm install @lenis/react
npm install framer-motion
npm install i18next react-i18next
npm install @phosphor-icons/react
npm install react-intersection-observer
npx tailwindcss init -p
```

---

## 🎨 DESIGN SYSTEM

### Palette màu (Vintage Warm)
```css
:root {
  /* Primary */
  --color-cream:     #FDF8F0;   /* nền chính */
  --color-warm-white:#FFFBF5;   /* nền section */
  
  /* Accent */
  --color-peach:     #F4A87C;   /* cam nhạt — CTA chính */
  --color-blush:     #F2C4B3;   /* hồng nhạt — hover/highlight */
  --color-butter:    #F5D98F;   /* vàng nhạt — accent phụ */
  --color-sage:      #A8B89A;   /* xanh lá nhạt — điểm nhấn */
  
  /* Text */
  --color-ink:       #2D2420;   /* text chính — off-black ấm */
  --color-muted:     #7A6B5D;   /* text phụ */
  --color-light-text:#B5A99A;   /* caption, placeholder */
  
  /* Border */
  --color-border:    #E8DDD2;
}
```

### Typography
```css
/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

/* Heading — Cormorant Garamond (vintage, elegant) */
/* Body    — DM Sans (clean, readable) */

/* Scale */
--fs-display: clamp(2.5rem, 8vw, 5.5rem);
--fs-h1:      clamp(2rem, 5vw, 3.5rem);
--fs-h2:      clamp(1.5rem, 3vw, 2.25rem);
--fs-body:    1rem;
--fs-small:   0.875rem;
```

### Design Dials (từ Taste Skill)
```
DESIGN_VARIANCE:  6  → Asymmetric nhẹ, không quá artsy
MOTION_INTENSITY: 5  → Fluid CSS transitions, một số scroll reveal
VISUAL_DENSITY:   3  → Airy, spacious — phong cách gallery hoa
```

---

## 📐 CẤU TRÚC LANDING PAGE (7 sections)

### 1. NAVBAR (sticky, blur)
- Logo trái + Language switcher (VI/EN) phải
- Transparent → frosted glass khi scroll
- Mobile: hamburger menu với animation slide-down

### 2. HERO
- **Layout**: Asymmetric — text trái 50%, ảnh hoa phải 50%
- **Headline** (vi): *"Mỗi bó hoa — một câu chuyện của bạn"*
- **Headline** (en): *"Every bouquet, a story of yours"*
- **Sub**: *"Grow, glow, and bloom."*
- **CTA chính**: "Đặt hoa ngay" → link Zalo
- **CTA phụ**: "Xem bộ sưu tập"
- Background: cream, một vài cánh hoa float nhẹ (CSS animation)
- Mobile: stack dọc, ảnh trước, text sau

### 3. ABOUT (Câu chuyện)
- Bắt đầu từ 2023, từ đam mê → nghề
- Layout: full-width image trái + text phải
- Highlight 3 điểm: Giá · Content · Phục vụ
- Không có ảnh cá nhân (theo yêu cầu)

### 4. SERVICES (Dịch vụ)
- 4 loại sản phẩm: Bó hoa · Giỏ hoa · Kệ hoa · Hoa cưới cầm tay
- Mỗi card: ảnh + tên + mô tả ngắn + khoảng giá 200k–500k+
- Layout mobile: 2 cột; desktop: 4 cột
- **KHÔNG dùng 3-column generic** — dùng 2+2 hoặc masonry nhẹ

### 5. GALLERY (Portfolio)
- Grid bất đối xứng (masonry-light) với >6 ảnh placeholder
- Hover: subtle zoom + overlay mờ
- CTA dẫn sang Facebook page để xem thêm
- Mobile: 2 cột scroll

### 6. PROCESS (Quy trình đặt hoa — 5 bước)
1. Nhắn tin tư vấn → 2. Chốt giá & ngày → 3. Check ảnh trước khi giao → 4. Ship tận nơi → 5. Chăm sóc sau nhận hoa
- Layout: horizontal timeline trên desktop, vertical accordion trên mobile
- Thêm: "Đặt trước 1–2 ngày | Gấp tối thiểu 1–2 tiếng"

### 7. FAQ
- 4–5 câu hỏi hay gặp nhất (từ sheet: giá, giao hàng, yêu cầu đặc biệt, thời gian)
- Accordion animation mượt

### 8. CONTACT / FOOTER
- 3 nút CTA lớn: [Zalo] [Facebook] [Instagram]
- Khu vực: Hà Nội, bán kính 15km
- Tagline cuối: *"Grow, glow, and bloom. 🌸"*
- Copyright + Language switcher

### FLOATING CTA (luôn hiển thị)
- Nút Zalo nổi góc phải dưới
- Pulse animation nhẹ
- Ẩn khi đang ở section Contact

---

## 📱 MOBILE-FIRST OPTIMIZATIONS

```
• min-h-[100dvh] thay vì h-screen (iOS Safari fix)
• Touch targets ≥ 44×44px tất cả buttons
• Font size body ≥ 16px (tránh iOS auto-zoom)
• safe-area-inset cho notch/home indicator
• tap-action: manipulation (giảm 300ms delay)
• Lazy loading ảnh với loading="lazy"
• Skeleton shimmer khi ảnh chưa load
• No horizontal scroll kiểm tra kỹ
• Reduced motion support: @media (prefers-reduced-motion)
```

---

## 🌐 i18n STRUCTURE (vi/en)

```json
// vi.json (excerpt)
{
  "nav": { "gallery": "Bộ sưu tập", "services": "Dịch vụ", "contact": "Liên hệ" },
  "hero": {
    "headline": "Mỗi bó hoa — một câu chuyện của bạn",
    "sub": "Grow, glow, and bloom.",
    "cta_primary": "Đặt hoa ngay",
    "cta_secondary": "Xem bộ sưu tập"
  },
  "services": {
    "bouquet": "Bó hoa", "basket": "Giỏ hoa",
    "stand": "Kệ hoa", "wedding": "Hoa cưới cầm tay",
    "price_from": "Từ 200k"
  }
}
```

---

## 🚀 DEPLOY VERCEL

```bash
# Build
npm run build

# Deploy (sau khi cài Vercel CLI)
npm i -g vercel
vercel --prod

# Hoặc kéo thả thư mục dist/ lên vercel.com
```

**Lưu ý**: Vì không có domain riêng, link sẽ dạng `me-hoa.vercel.app` — có thể đổi tên project trong Vercel dashboard.

---

## ❓ CÁC CÂU HỎI CẦN CONFIRM TRƯỚC KHI CODE

Bạn cần hỏi khách hàng thêm những điều này:

1. **Số điện thoại Zalo** để đặt link CTA (format: `https://zalo.me/0xxxxxxxxx`)
2. **Link Facebook page** (hiện có >1000 ảnh)
3. **Link Instagram** (nếu có)
4. **Ảnh hero** — muốn placeholder hay gửi sẵn 1–2 ảnh đẹp nhất để đặt hero?
5. **Màu nào trong 3 màu (cam/vàng/hồng nhạt) là màu chính?** Mình sẽ dùng màu đó cho CTA button
6. **Font "Grow, glow, and bloom"** — đây là tagline hay tên font? (Vì không có font tên này trên Google Fonts)

---

## 🤖 PROMPT ĐẦY ĐỦ CHO AI STUDIO (GEMINI / GPT)

> Copy toàn bộ phần dưới và paste vào AI Studio

---

```
You are an elite senior frontend engineer and UI/UX designer specializing in mobile-first landing pages.

## PROJECT BRIEF
Build a complete landing page for "Mê Hoa" — a small boutique flower shop in Hanoi, Vietnam.

## CLIENT REQUIREMENTS (from discovery survey)
- Shop name: Mê Hoa
- Tagline: "Grow, glow, and bloom."
- 3 keywords: Đẹp (Beautiful) · Xịn (Premium) · Mê (Enchanting)
- Differentiators: Fair pricing + quality content + attentive service
- Products: Bouquets, Gift baskets, Flower stands, Wedding bouquets
- Price range: 200k–500k VND
- Target: Male & female, 18–50 years old
- Key occasions: Valentine's Day, March 8, October 20
- Delivery: Inner Hanoi, 15km radius, app-based delivery fees
- Order time: 1–2 days ahead (urgent: 1–2 hours minimum)
- Contact: Zalo, Facebook, Instagram (all channels)
- Goal: Create strong first impression + showcase craftsmanship
- Desired feeling: "This style fits me — I want to order now"
- Photos available: 1000+ on Facebook (placeholders in code)
- No personal photo of owner
- No domain purchase, deploy to Vercel free

## DESIGN SYSTEM
Style: Vintage + Minimal
Color palette (warm botanical):
  - Background: #FDF8F0 (warm cream)
  - Primary accent: #F4A87C (soft peach — CTA buttons)
  - Secondary: #F2C4B3 (blush pink), #F5D98F (butter yellow)
  - Supporting: #A8B89A (sage green)
  - Text: #2D2420 (warm off-black), #7A6B5D (muted)
  - Border: #E8DDD2

Typography:
  - Headings: Cormorant Garamond (italic for hero, regular for sections)
  - Body: DM Sans
  - Both from Google Fonts

Design dials:
  - DESIGN_VARIANCE: 6 (slightly asymmetric, not chaotic)
  - MOTION_INTENSITY: 5 (fluid CSS transitions + scroll reveals)
  - VISUAL_DENSITY: 3 (airy, gallery-like spacing)

## TECH STACK
- Vite + React 18
- Tailwind CSS v3 (NOT v4)
- i18next for bilingual (Vietnamese primary, English secondary)
- @lenis/react for smooth scroll
- framer-motion for animations (Sections: Hero reveal, section scroll-in)
- @phosphor-icons/react for icons (stroke weight 1.5, NO emojis)
- react-intersection-observer for scroll triggers

## FORBIDDEN PATTERNS (from design skill rules)
- NO h-screen → use min-h-[100dvh]
- NO Inter font → use Cormorant Garamond + DM Sans
- NO 3-column equal card layout → use 2+2 or asymmetric grid
- NO emojis as icons
- NO neon glows or oversaturated colors
- NO centered hero with dark overlay image
- NO generic placeholder names/numbers
- NO form (only CTA buttons linking to Zalo/Facebook)

## PAGE SECTIONS (in order)

### 1. NAVBAR
Sticky, transparent → frosted glass (backdrop-blur) on scroll.
Left: Logo (text "Mê Hoa" in Cormorant Garamond). Right: Navigation links + Language toggle (VI/EN).
Mobile: hamburger icon → slide-down full-width menu.
Links: Gallery | Services | Process | Contact

### 2. HERO
Layout: Asymmetric split — 55% left text, 45% right image.
Headline (vi): "Mỗi bó hoa — một câu chuyện của bạn"
Headline (en): "Every bouquet, a story of yours"
Sub: "Grow, glow, and bloom."
Body copy (vi): "Từ đam mê năm 2023, Mê Hoa mang đến từng bó hoa với giá hợp lý, content đẹp và sự phục vụ chu đáo."
CTA primary: "Đặt hoa ngay" → href="https://zalo.me/PLACEHOLDER" (peach button)
CTA secondary: "Xem bộ sưu tập" → smooth scroll to #gallery (outlined button)
Hero image: img src="/images/hero-bouquet.jpg" alt="Mê Hoa - Bó hoa đẹp Hà Nội" (placeholder)
Background: warm cream. Subtle floating petal shapes (CSS keyframe, opacity 0.2).
Mobile: Stack vertically — image top, text bottom.

### 3. ABOUT
Headline: "Từ đam mê thành nghề"
Two-column: large photo left (4:3 ratio) + text right.
Content: Started 2023, passion turned career. Three highlighted stats:
  - "Giá hợp lý" with small icon
  - "Content chất" with small icon  
  - "Phục vụ tận tâm" with small icon
Mobile: single column, image above text.

### 4. SERVICES (4 products)
Section headline: "Những gì Mê Hoa làm được"
Grid: 2 columns on mobile, 2x2 grid on desktop (NOT 4 horizontal).
Each card: Square image (placeholder) + product name + short description + price hint "Từ 200k".
Products: Bó hoa | Giỏ hoa | Kệ hoa | Hoa cưới cầm tay
Card hover: subtle scale(1.02) + shadow deepening.

### 5. GALLERY
Section headline: "Bộ sưu tập"
Masonry-light grid: 3 columns desktop, 2 columns mobile.
8 placeholder images with varying aspect ratios (portrait + landscape mix).
Hover: overlay with opacity-0 → opacity-60 + zoom scale(1.05).
Below grid: CTA link → "Xem thêm trên Facebook →" (Facebook page link)

### 6. PROCESS (How to order)
Section headline: "Đặt hoa dễ dàng như thế nào?"
5 steps with numbered icons:
  1. Nhắn tin tư vấn (Zalo/Facebook)
  2. Chốt giá & ngày nhận
  3. Check ảnh trước khi giao
  4. Nhận hoa tại nhà
  5. Chăm sóc sau nhận hoa
Desktop: horizontal step flow. Mobile: vertical accordion (expand on tap).
Info badge: "Đặt trước 1–2 ngày | Gấp: tối thiểu 1–2 tiếng"

### 7. FAQ
Headline: "Câu hỏi thường gặp"
5 accordion items:
  Q: Giá của các sản phẩm là bao nhiêu?
  A: Mê Hoa có đa dạng mức giá từ 200.000đ trở lên, phù hợp với nhiều ngân sách...
  
  Q: Có giao hàng không? Khu vực nào?
  A: Có nhận ship nội thành Hà Nội bán kính 15km. Phí ship theo app giao hàng hiện hành.
  
  Q: Cần đặt trước bao lâu?
  A: Lý tưởng là 1–2 ngày trước. Trường hợp gấp tối thiểu 1–2 tiếng.
  
  Q: Có làm theo yêu cầu màu sắc/loại hoa đặc biệt không?
  A: Có! Mê Hoa nhận yêu cầu cụ thể. Nếu hoa tươi không có sẵn, sẽ tư vấn loại tương đương cùng tone màu.
  
  Q: Thanh toán như thế nào?
  A: Chuyển khoản hoặc tiền mặt khi nhận hoa.
  
Accordion: smooth height animation with framer-motion.

### 8. CONTACT + FOOTER
Contact section headline: "Liên hệ đặt hoa"
Sub: "Nhắn tin để được tư vấn — nhanh · nhiệt tình · chu đáo"
3 large CTA buttons side by side (stacked on mobile):
  [Zalo] → zalo.me link (peach filled)
  [Facebook] → facebook.com link (outlined)
  [Instagram] → instagram.com link (outlined)
Footer: Logo | "Grow, glow, and bloom." | "© 2024 Mê Hoa · Hà Nội" | Language toggle

### FLOATING CTA
Fixed bottom-right, always visible except when Contact section is in viewport.
Circular Zalo button, 56px, peach background.
Subtle pulse ring animation (CSS keyframe).
aria-label="Liên hệ Zalo"

## SCROLL ANIMATIONS
Use react-intersection-observer + framer-motion:
- Hero: fade-up on load (staggered: headline → sub → CTA)
- Each section: fade-up as enters viewport (threshold: 0.2)
- Gallery items: stagger fade-in (50ms delay each)
- Process steps: stagger slide-in from left (desktop) / fade-in (mobile)
- Honor prefers-reduced-motion: disable all animations if set

## LENIS SMOOTH SCROLL SETUP
```jsx
// src/hooks/useLenis.js
import { useEffect } from 'react'
import Lenis from '@lenis/react'

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])
}
```

## i18n BILINGUAL
Use react-i18next. Language toggle button in Navbar and Footer.
Vietnamese is default. English as secondary.
All user-visible text must be wrapped in t('key') translation calls.
Store translations in src/i18n/vi.json and src/i18n/en.json

## MOBILE OPTIMIZATIONS
- Use min-h-[100dvh] for hero (NEVER h-screen)
- touch-action: manipulation on all interactive elements
- All buttons min 44×44px tap targets
- font-size body min 16px
- env(safe-area-inset-bottom) padding on floating CTA
- Test breakpoints: 375px (iPhone SE), 390px (iPhone 15), 414px (Android large)
- @supports (padding: max(0px)) for safe area support

## IMAGE PLACEHOLDERS
Use: https://picsum.photos/seed/mehoa-{n}/800/600 for landscape
Use: https://picsum.photos/seed/mehoa-{n}/600/800 for portrait
Add descriptive alt text in Vietnamese.

## OUTPUT REQUIREMENTS
Generate complete, production-ready files:
1. index.html
2. src/main.jsx
3. src/App.jsx
4. src/i18n/index.js + vi.json + en.json
5. src/components/layout/Navbar.jsx
6. src/components/layout/Footer.jsx
7. src/components/sections/Hero.jsx
8. src/components/sections/About.jsx
9. src/components/sections/Services.jsx
10. src/components/sections/Gallery.jsx
11. src/components/sections/Process.jsx
12. src/components/sections/FAQ.jsx
13. src/components/sections/Contact.jsx
14. src/components/ui/FloatingCTA.jsx
15. src/components/ui/LanguageSwitcher.jsx
16. src/hooks/useLenis.js
17. tailwind.config.js (with custom colors and fonts)
18. src/styles/globals.css (CSS variables + font imports)
19. package.json (with all dependencies)
20. vite.config.js

Code must be clean, well-commented, TypeScript-free (JS only), and immediately deployable to Vercel.
```

---

## ✅ CHECKLIST TRƯỚC KHI GIAO KHÁCH

- [ ] Thay tất cả `PLACEHOLDER` trong link Zalo/Facebook/Instagram
- [ ] Replace ảnh picsum → ảnh thật từ Facebook của khách
- [ ] Upload logo SVG/PNG vào `public/`
- [ ] Test trên iPhone SE (375px), iPhone 15 (390px), Samsung Galaxy (360px)
- [ ] Test landscape orientation
- [ ] Bật Accessibility mode iOS → test VoiceOver cơ bản
- [ ] Test `prefers-reduced-motion` bật tắt
- [ ] Verify Lenis smooth scroll không conflict với accordion/FAQ
- [ ] Check tất cả links CTA hoạt động
- [ ] Deploy lên Vercel, share link cho khách confirm
