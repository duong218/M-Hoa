# Mê Hoa — Landing page tiệm hoa Hà Nội

Trang web giới thiệu thương hiệu **Mê Hoa**, tiệm hoa tươi thiết kế theo phong cách vintage, tối giản và ấm áp tại Hà Nội. Đây là **website một trang (single-page)** dùng để quảng bá dịch vụ, xây dựng niềm tin với khách hàng và dẫn họ đặt hoa qua kênh liên hệ trực tiếp.

## Trang web dùng để làm gì?

- **Giới thiệu thương hiệu**: câu chuyện, phong cách cắm hoa, cam kết chất lượng.
- **Trưng bày sản phẩm & dịch vụ**: bó hoa, giỏ hoa, kệ khai trương, hoa cưới (gallery + bảng giá tham khảo).
- **Hướng dẫn quy trình đặt hoa**: từ tư vấn, duyệt ảnh thật đến giao hàng.
- **Tăng độ tin cậy**: phản hồi khách hàng, FAQ.
- **Chuyển đổi liên hệ**: nút Zalo, Facebook, email — khách đặt hoa ngoài web (không có giỏ hàng thanh toán trên site).
- **SEO & chia sẻ mạng xã hội**: meta title/description, Open Graph (qua `react-helmet-async`).
- **Song ngữ Việt / Anh**: chuyển ngôn ngữ ngay trên giao diện.

## Tính năng nổi bật

- Giao diện responsive (mobile, tablet, desktop).
- Chủ đề theo mùa (autumn, Valentine, spring, winter).
- Tìm kiếm mẫu hoa trong catalog.
- Cuộn mượt với **Lenis**.
- Animation nhẹ với **Motion** (Framer Motion).
- Âm thanh tương tác tinh gọn (Web Audio API, không file MP3 nặng).

## Công nghệ

| Thành phần | Công nghệ |
|------------|-----------|
| UI | React 19, JavaScript (JSX) |
| Build | Vite 6 |
| Style | Tailwind CSS 4 |
| i18n | i18next, react-i18next |
| Scroll | Lenis (`lenis/react`) |
| Icon | lucide-react |

## Chạy dự án trên máy

**Yêu cầu:** Node.js 18+ (khuyến nghị LTS).

```bash
npm install
npm run dev
```

Mở trình duyệt tại [http://localhost:3000](http://localhost:3000).

### Lệnh khác

```bash
npm run build    # Build production → thư mục dist/
npm run preview  # Xem bản build local
```

## Cấu trúc thư mục (tóm tắt)

```
src/
├── App.jsx                 # Layout chính, SEO helmet, bọc Lenis
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, About, Services, Gallery, ...
│   └── ui/                 # SearchBar, ThemeToggler, BrandMark, ...
├── data/
│   ├── config.js           # Logo, liên hệ, ảnh hero theo mùa
│   └── products.js         # Catalog gallery + dịch vụ
├── i18n/                   # vi.json, en.json
├── hooks/useLenis.js       # Cấu hình smooth scroll
└── public/images/          # Logo, ảnh local (import qua Vite)
```

## Chỉnh nội dung nhanh

- **Số Zalo, Facebook, email:** `src/data/config.js` → `CONTACT`
- **Mẫu hoa / giá / mô tả:** `src/data/products.js`
- **Chữ trên trang (VI/EN):** `src/i18n/vi.json`, `src/i18n/en.json`
- **Logo:** `src/public/images/logo/logo.jpg` (và `BRAND` trong `config.js`)

## Triển khai

Sau `npm run build`, upload nội dung thư mục `dist/` lên hosting tĩnh (Vercel, Netlify, Cloudflare Pages, Nginx, …). Site là SPA một trang, không cần server Node cho phần giao diện.

---

**Mê Hoa** — *Grow, glow, and bloom.*
