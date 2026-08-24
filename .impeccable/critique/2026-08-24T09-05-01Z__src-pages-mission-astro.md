---
target: src/pages/mission.astro
total_score: 25
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 1
timestamp: 2026-08-24T09-05-01Z
slug: src-pages-mission-astro
---
#### Report header provenance
⚠️ DEGRADED: single-context (sub-agents unavailable in session execution mode)

#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Indicator chỉ số tiến trình panel hiển thị tốt (`01/03`), nhưng thiếu chỉ báo cuộn theo chiều dọc. |
| 2 | Match System / Real World | 4 | Ngôn ngữ nhân đạo chân thực, tập trung vào tính tự chủ và năng lực cộng đồng địa phương. |
| 3 | User Control and Freedom | 3 | Thanh điều hướng nội trang ("On this page") giúp nhảy nhanh tốt, nhưng thiếu nút "trở lại đầu trang". |
| 4 | Consistency and Standards | 2 | Thẻ `rule-card` dùng màu/border tùy biến inline vi phạm token hệ thống (`var(--surface-alt)`). |
| 5 | Error Prevention | 4 | Điều hướng tuyến tính rõ ràng, không có tương tác phức tạp sinh lỗi. |
| 6 | Recognition Rather Than Recall | 3 | Các quy tắc 01-03 trình bày trực quan, nhưng chỉ số 24-48h & 100% trình bày thô. |
| 7 | Flexibility and Efficiency | n/a | Trang Persuade/Read định hướng truyền tải sứ mệnh, không yêu cầu lối tắt thao tác nhanh. |
| 8 | Aesthetic and Minimalist Design | 2 | Cấu trúc khối chữ kéo dài tạo cảm giác đơn điệu, quá ít tương tác hình ảnh/thực địa so với trang chủ. |
| 9 | Error Recovery | 4 | Luồng nội dung trang tĩnh an toàn. |
| 10 | Help and Documentation | n/a | Nội dung editorial tự giải thích. |
| **Total** | | **25/32** | **Good** |

#### Design Specificity Verdict

**LLM Assessment**: Trang `/mission` trung thành với triết lý nhân đạo thực tế của dự án nhưng đang gặp tình trạng **"AI Slop" dạng mẫu editorial tối giản**. Toàn bộ trang phụ thuộc quá nhiều vào bộ khung `EditorialPage.astro` với dạng chữ tĩnh chồng lớp, trong khi thiếu hẳn nhịp điệu tương tác sống động (carousel ảnh thực địa, bằng chứng kiểm toán, tương tác tính toán tác động) vốn là điểm nhấn tạo niềm tin rất mạnh ở trang chủ (`/home`).

**Deterministic Scan**: Bộ lọc `detect.mjs` chạy sạch (0 cảnh báo lặp mã), nhưng kiểm tra mã nguồn cho thấy có sự bất nhất quy chuẩn CSS (sử dụng inline style màu thô thay vì thiết kế hệ thống).

#### Overall Impression
Trang `/mission` có nền tảng nội dung văn bản (copywriting) rất sâu sắc và mạch lạc, thể hiện đúng tinh thần nhân đạo thực chứng. Tuy nhiên về mặt thiết kế thị giác, trang bị thụt lùi đáng kể so với trang chủ: quá nhiều khối văn bản dạng thẻ phẳng, thiếu hình ảnh tư liệu thực tế và các thành phần tương tác giúp người dùng "cảm" được sứ mệnh.

#### What's Working
1. **Khung biên tập nhất quán (`EditorialPage` layout)**: Thanh chỉ số trang (`01 / 03`), thanh nhảy nhanh "On this page" và màu nền tương phản warm/sand tạo cảm giác đọc sách báo cao cấp.
2. **Thông điệp thương hiệu sắc nét**: Trích dẫn `“The people affected decide what happens next.”` đặt trong `blockquote.pull-quote` đạt sức nặng cảm xúc cao.

#### Priority Issues

- **[P1] Thiếu sự đồng bộ nhịp điệu thị giác với Trang Chủ (Visual & Experience Disconnect)**
  - *Why it matters*: Trang chủ tràn đầy năng lượng với Carousel ảnh thực địa 5 slide, thẻ dự án có thanh tiến trình, máy tính tác động và minh chứng kiểm toán. Trong khi đó, `/mission` chỉ có đúng 1 ảnh Hero và tràn ngập văn bản chữ. Sự chênh lệch này khiến trang `/mission` bị "lạnh" và thiếu sức thuyết phục.
  - *Fix*: Bổ sung Carousel ảnh công trình thực địa hoặc ảnh tài liệu chụp hoạt động của 3 Quy Tắc (`Three Rules`) để minh họa thực tế.
  - *Suggested command*: `$impeccable bolder src/pages/mission.astro`

- **[P2] Xu hướng "AI Slop" ở phần hiển thị chỉ số & thẻ quy tắc (Generic Card Pattern)**
  - *Why it matters*: Thẻ `approach-card` và `rule-card` xếp hàng phẳng lì với các con số "24-48h" và "100%" được đóng khung sơ sài. Đây là kiểu layout AI hay tạo ra khi thiếu tư duy thiết kế chiều sâu (depth/spatial design).
  - *Fix*: Tái thiết kế khối `approach-card` thành khối tương tác so sánh (Immediate Relief vs Long-Term Autonomy) với icon minh họa tùy biến và highlight số liệu nổi bật.
  - *Suggested command*: `$impeccable layout src/pages/mission.astro`

- **[P3] Vi phạm Token hệ thống (Inline Style Pollution)**
  - *Why it matters*: Dòng 101 trong `mission.astro` dùng `style="background: var(--surface-alt); color: var(--slate-800); border-color: var(--border);"` viết đè trực tiếp lên badge thay vì dùng token/class chuẩn (`badge--neutral` hoặc `badge--dark`).
  - *Fix*: Loại bỏ inline style, dùng class chuẩn của Design System trong `global.css`.
  - *Suggested command*: `$impeccable polish src/pages/mission.astro`

#### Persona Red Flags

- **Jordan (Confused First-Timer)**: Đọc một loạt định nghĩa "Approach" và "Rules" nhưng không thấy liên kết trực tiếp tới các dự án thực tế đang diễn ra. Jordan dễ cảm thấy đây chỉ là "lời nói suông" nếu không có link dẫn tới ví dụ kiểm toán thực địa.
- **Alex (Power User)**: Cuộn qua 3 panel nhưng không có nút hành động nhanh (Quick Donate / Jump to Projects) ở ngay trong các phần nội dung trọng tâm.

#### Minor Observations
- Phần chuyển trang cuối (`Next Chapter: See what we do`) dùng nền tối `slate-900` chuẩn, nhưng nút bấm hỗ trợ ở Hero (`Support Our Mission`) trỏ về anchor /#donate chưa tối ưu trải nghiệm nếu người dùng đang ở trang phụ.

#### Questions to Consider
- *Nếu mỗi Quy tắc (Three Rules) được gắn kèm 1 câu chuyện/hình ảnh kiểm toán thực tế từ trang chủ thì sức thuyết phục sẽ tăng lên như thế nào?*
- *Có nên đưa biểu đồ tỉ lệ phân bổ 94% ngân sách trực tiếp vào trang Mission để làm nổi bật cam kết "Useful over impressive"?*
