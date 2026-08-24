# Quy tắc Thiết kế Viewport Fold (Hero Section Alignment)

Để tránh hiện tượng xuất hiện khe hở (gap) mép dưới màn hình hoặc che/lộ nội dung các section bên dưới trên màn hình Desktop (≥1024px), tuân thủ nghiêm ngặt các quy định CSS sau:

## 1. Cấu trúc HTML & Layout

Nhóm các component thuộc màn hình đầu tiên vào container `.hero-fold-group`:

```astro
<main id="main">
  <div class="hero-fold-group">
    <HeroSection />
    <StatsBar stats={stats} />
    <TrustStrip />
  </div>
  ...
</main>
```

## 2. Quy tắc CSS Bắt Buộc (Rules for `.hero-fold-group`)

Header sử dụng `position: fixed` với độ cao `var(--header-h)`. Do đó:

1. **Chiều cao tổng khối**: Đặt `min-height: 100vh` cho `.hero-fold-group` trên màn hình desktop.
2. **Padding đệm Header**: Đặt `padding-top: var(--header-h)` TRỰC TIẾP ở `.hero-fold-group`, KHÔNG đặt ở `.hero-v2`.
3. **Căn chỉnh tự động (Flex Space Allocation)**:
   - Thẻ `.hero-v2` sử dụng `flex: 1 1 auto; display: flex; flex-direction: column; justify-content: center;`.
   - Điều này giúp khối nội dung chính tự dãn/nén và căn giữa thị giác (optical centering) vào khoảng trống nằm giữa Header và StatsBar.
4. **Tránh tính toán đúp Padding**: Không dùng `padding-top: calc(var(--header-h) + ...)` trong `.hero-v2` khi đã có `padding-top` ở `.hero-fold-group`.

```css
@media (min-width: 1024px) {
  .hero-fold-group {
    min-height: 100vh;
    box-sizing: border-box;
    padding-top: var(--header-h);
    justify-content: space-between;
  }

  .hero-v2 {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: clamp(0.5rem, 1vw, 1rem);
    padding-bottom: clamp(1rem, 2vw, 2rem);
  }
}
```

## 3. Chống AI Slop & Badge Redundancy (Anti-Pattern Guidelines)

1. **Không trùng lặp chỉ số (No Duplicated Metrics)**:
   - Các con số thống kê chính (`142,000+`, `94%`, v.v.) chỉ hiển thị ở `StatsBar.astro`, KHÔNG lặp lại ở khối inline metrics của `HeroSection.astro`.
2. **Loại bỏ Pill Badge / Pulsing Dot**:
   - Sử dụng **Editorial Kicker** (nét vẽ ngang `24px` màu Ember + chữ in hoa dãn cách `0.12em`) thay cho các pill badge dán nhãn xanh nhấp nháy (pulsing dot) rập khuôn.
3. **Phân cấp Nút Bấm (Button Hierarchy)**:
   - CTA chính: Nút mảng màu Terracotta (`btn--primary`).
   - CTA phụ: Nút viền Ghost (`btn--ghost`).
