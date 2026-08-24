---
target: "src/pages/mission.astro#approach"
total_score: 24
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 1
timestamp: 2026-08-24T09-36-00Z
slug: src-pages-mission-astro-approach
---
#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | Static cards give no interaction feedback beyond simple hover lift. |
| 2 | Match System / Real World | 2/4 | Terms like "dispatch window" and "Long-Term Autonomy" sound corporate/SaaS rather than field-grounded. |
| 3 | User Control and Freedom | 3/4 | Section scroll and panel navigation function well. |
| 4 | Consistency and Standards | 2/4 | Lacks documentary photos, audit partner badges, and CTAs present in `/home` and `#rules`. |
| 5 | Error Prevention | 4/4 | Static reading section; no input friction. |
| 6 | Recognition Rather Than Recall | 3/4 | Clear headings and tags, but missing visual cues (imagery/icons) from `/home`. |
| 7 | Flexibility and Efficiency | n/a | Read/Persuade editorial surface. |
| 8 | Aesthetic and Minimalist Design | 3/4 | Clean hairlines and typography, but generic 2-column SaaS card visual structure. |
| 9 | Error Recovery | 4/4 | Static reading section. |
| 10 | Help and Documentation | n/a | Read/Persuade editorial surface. |
| **Total** | | **24/32** | **Good (75%)** |

#### Design Specificity Verdict

**LLM Assessment**: Section Approach của trang `/mission` thể hiện nền tảng kĩ thuật CSS rất sạch (đúng token, đúng Solid Hairline Rule, đúng radius system), tuy nhiên về mặt thị giác và cảm xúc, nó lại thiếu đi linh hồn "humanitarian documentary" vốn có ở trang `/home`. Cấu trúc 2 thẻ song song (Relief vs Autonomy) đi kèm chỉ số lớn (24-48h, 100%) bị rập khuôn theo dạng "SaaS Feature Comparison" (AI Slop pattern), khiến thông điệp nhân đạo trở nên lý thuyết và bớt chân thực.

**Deterministic Scan**: `node detect.mjs` báo cáo 0 lỗi tự động (clean). Các quy tắc CSS về hairline solid, padding clamp, và var tokens đều được tuân thủ chuẩn xác.

**Visual Overlays**: Không kích hoạt browser overlay trực tiếp trong phiên này.

#### Overall Impression
Section Approach hoàn thành tốt vai trò cấu trúc thông tin cơ bản nhưng chưa mang lại ấn tượng thị giác xúc động. Nó trông giống một slide thuyết trình doanh nghiệp hơn là một câu chuyện cứu trợ trực tiếp ngoài thực địa như `/home`.

#### What's Working
1. **Tuân thủ Hệ thống Token & Hairline**: Sử dụng chuẩn xác `--border-warm`, `--surface`, `--radius-lg`, `--space-*` và quy tắc `Solid Hairline Rule` ở phần chia cách chỉ số (`.approach-card__stat`).
2. **Typography & Layout Split Rhythmic**: Phần header split (`.panel-head--split`) giữ nhịp đọc editorial tốt, font serif và sans-serif được phân cấp rõ ràng.

#### Priority Issues

- **[P1] AI Slop & Corporate SaaS Metrics**: 
  - *Why it matters*: Các con số `24-48h` và `100%` đứng trơ trọi như chỉ số SLA của phần mềm SaaS, làm giảm độ tin cậy thực tế (field proof).
  - *Fix*: Gắn liền các con số này với địa bàn thực địa cụ thể hoặc liên kết trực tiếp tới bằng chứng kiểm toán (VD: "24-48h · Đáp ứng khẩn cấp Mindanao & Kitui").
  - *Suggested command*: `$impeccable clarify src/pages/mission.astro`

- **[P2] Thiếu tính nhất quán thị giác với `/home` (Missing Field Imagery & Audit Badges)**:
  - *Why it matters*: Trên `/home` và section `#rules`, mọi thẻ đều có hình ảnh thực địa (documentary photography), nhãn kiểm toán (`Audited Field Data`), và địa danh rõ ràng. Thẻ Approach bị trơ trọi chỉ toàn chữ.
  - *Fix*: Bổ sung hình ảnh thực địa thu nhỏ (media inset hoặc background texture/micro-photo) cùng badge đối tác kiểm toán cho từng thẻ Approach.
  - *Suggested command*: `$impeccable layout src/pages/mission.astro`

- **[P3] Thẻ tĩnh thiếu điểm kích hoạt tương tác (Static Card Inertia)**:
  - *Why it matters*: Thẻ hover lên nhưng không hề có CTA link hay modal trigger để xem chi tiết các dự án thuộc 2 nhóm "Immediate Relief" và "Long-Term Autonomy".
  - *Fix*: Thêm hairline CTA link ở cuối thẻ (như `.rule-card__link` ở section Rules) dẫn về danh mục dự án tương ứng ở `/what-we-do/`.
  - *Suggested command*: `$impeccable polish src/pages/mission.astro`

#### Persona Red Flags

**Alex (Power User / Philanthropist)**: Nhìn thấy chỉ số "100% Field programs led by local partners" nhưng không thấy tên tổ chức kiểm toán độc lập hay link xem chứng từ như trên trang chủ `/home` -> Nghi ngờ đây là tuyên bố tiếp thị suông.

**Jordan (First-Timer)**: Đọc 2 thẻ Approach nhưng thấy khái niệm "Long-Term Autonomy" khá hàn lâm, không có hình ảnh minh họa thực tế (như ruộng rau hay bình nước) để hình dung "người dân tự chủ" là thế nào.

#### Minor Observations
- Thẻ bên trái dùng tag Sand, thẻ bên phải dùng tag Emerald. Việc phối màu này chưa có truyền tải quy ước rõ ràng ở phần tiêu đề section.
- Khoảng cách `margin-top: var(--space-6)` giữa header và thẻ có thể thoáng hơn (`space-8`) để đồng bộ với nhịp thở rộng của `/home`.

#### Questions to Consider
- "Liệu section Approach có nên dùng layout dạng Split-screen với 1 ảnh thực địa ấn tượng bên trái và 2 thẻ trụ cột bên phải thay vì 2 thẻ nằm ngang trơ trọi?"
- "Làm sao để người đọc bấm vào thẻ 'Immediate Relief' có thể thấy ngay danh sách các đợt cứu trợ khẩn cấp 24h vừa qua?"
