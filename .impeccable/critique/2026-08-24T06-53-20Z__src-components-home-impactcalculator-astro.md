---
timestamp: 2026-08-24T06-53-20Z
slug: src-components-home-impactcalculator-astro
---
#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | Transition fade nhẹ khi đổi số tiền/tần suất; nhãn "Renews Monthly" / "One-Time Contribution" cập nhật rõ. |
| 2 | Match System / Real World | 3/4 | Thuật ngữ gần gũi ("clean drinking water", "roofing sheets"), không dùng từ chuyên môn gây khó hiểu. |
| 3 | User Control and Freedom | 3/4 | Chọn giữa Preset và Custom Input tự do, không bị khóa cứng vào các mốc cố định. |
| 4 | Consistency and Standards | 3/4 | Đồng bộ về hệ thống màu sắc (Terracotta & Emerald) và Typography với toàn site. |
| 5 | Error Prevention | 2/4 | Input custom chỉ set `min="5"`, chưa có validation / warning khi nhập số âm hoặc số bất hợp lý (ví dụ: e, -10). |
| 6 | Recognition Rather Than Recall | 3/4 | Các mốc preset $25-$500 hiện sẵn giúp giảm tải ghi nhớ; ô custom rõ đơn vị ($ / USD). |
| 7 | Flexibility and Efficiency | n/a | Mode Persuade (Landing Page): Người dùng chỉ chọn mức đóng góp, không dùng accelerator/keyboard shortcut chuyên sâu. |
| 8 | Aesthetic and Minimalist Design | 3/4 | Bố cục split 2 cột gọn gàng, tuy nhiên khung Output tương đối trống trải khi không có hình ảnh/visual minh họa. |
| 9 | Error Recovery | 2/4 | Khi nhập số không hợp lệ trong ô custom, không có thông báo lỗi trực quan mà chỉ im lặng fallback về preset trước đó. |
| 10 | Help and Documentation | n/a | Mode Persuade: Thông tin giải thích tác động nằm ngay trong thẻ Output và dòng disclaimer 94%, không cần docs riêng. |
| **Total** | | **22/32** | **70% (Good)** |

#### Design Specificity Verdict

**LLM Assessment**:
Section "See How Far Your Gift Goes" ([ImpactCalculator.astro](file:///home/thanh/hands-across-humanity/src/components/home/ImpactCalculator.astro)) thể hiện rất tốt vai trò là một tính năng tương tác tài chính minh bạch cho một tổ chức phi chính phủ/từ thiện chuyên nghiệp. Cấu trúc chia 2 cột (Cột chọn số tiền bên trái / Cột kết quả tác động thực tế bên phải) tạo trải nghiệm phản hồi tức thì. Tuy nhiên, tính độc bản ("Specificity") vẫn còn dư địa để nâng cấp:
1. **Thiếu hình ảnh / minh họa thực địa**: Khung kết quả tác động (`.calc-output`) hiện chỉ hiển thị dạng văn bản thuần (`Provides 100 days of clean drinking water...`). Việc thiếu các icon minh họa sinh động (như giọt nước, ngôi nhà, ánh sáng mặt trời) hoặc hình ảnh công trình thực tế làm giảm tác động cảm xúc (Emotional Impact).
2. **Dynamic Range chưa mịn ở ô Custom**: Khi người dùng nhập một số tiền tùy chỉnh không nằm trong các mốc $25, $50, $100, $250, $500, thuật toán rơi vào hàm `getCustomImpact` với văn bản công thức chung chung, thiếu đi sự đặc thù và sống động của từng mốc cụ thể.

**Deterministic Scan**:
Bộ quét cơ học `detect.mjs` không phát hiện lỗi vi phạm cấu trúc markup nghiêm trọng (`[]` findings).

#### Overall Impression
Một component tính toán tác động (Impact Calculator) trực quan, chạy mượt mà, giúp tăng tỉ lệ chuyển đổi donor nhờ con số minh bạch (94% fund direct) và tác động quy đổi cụ thể. Tuy nhiên, phần hiển thị kết quả (Output card) còn thiếu độ ấn tượng về mặt thị giác (Visual punch) và chưa tối ưu hoàn toàn cho phản hồi lỗi trên ô input tùy chỉnh.

#### What's Working
1. **Phản hồi thời gian thực tức thì**: Nút bấm preset kết hợp cùng hiệu ứng chuyển cảnh mượt (`opacity` + `translateY`) mang lại cảm giác ứng dụng cao cấp.
2. **Minh bạch tài chính rõ ràng**: Dòng disclaimer với biểu tượng khiên bảo vệ và tag tính toán tổng năm (`~ $600 / year impact`) củng cố niềm tin tối đa cho nhà tài trợ.

#### Priority Issues

- **[P1] Thiếu Visual Highlight cho kết quả tác động**:
  - *Why it matters*: Kết quả hiển thị bằng text đơn thuần chưa chạm tới cảm xúc người dùng ở thời điểm nhạy cảm nhất (khi họ quyết định số tiền ủng hộ).
  - *Fix*: Thêm icon/badge minh họa trực quan (giọt nước, trường học, bộ lọc nước) hoặc hiệu ứng counter con số sinh động vào khung kết quả.
  - *Suggested command*: `$impeccable delight src/components/home/ImpactCalculator.astro`

- **[P2] Xử lý trạng thái và Validation cho Custom Amount Input**:
  - *Why it matters*: Khi gõ số âm hoặc ký tự đặc biệt, giao diện im lặng trôi qua mà không báo lỗi, làm giảm độ tin cậy của biểu mẫu.
  - *Fix*: Thêm kiểm tra validation trực tiếp, hiển thị inline helper text nếu số tiền quá nhỏ (< $5) hoặc quá lớn, và format định dạng số tiền mượt hơn.
  - *Suggested command*: `$impeccable harden src/components/home/ImpactCalculator.astro`

- **[P2] Mobile Thumb Zone Optimization & Grid Stacking**:
  - *Why it matters*: Trên thiết bị di động, việc cuộn qua hai cột dọc có thể làm phần kết quả tác động bị trôi ra ngoài viewport khi người dùng bấm các nút preset ở trên.
  - *Fix*: Điều chỉnh sticky/compact preview cho Output card trên mobile hoặc đặt nút CTA luôn trong tầm tay (thumb zone).
  - *Suggested command*: `$impeccable adapt src/components/home/ImpactCalculator.astro`

#### Persona Red Flags

- **Jordan (First-Timer)**: Nhìn thấy ô input "Or enter custom amount" nhưng lo lắng không biết mức đóng góp nhỏ ($5-$10) có được chấp nhận hay không vì thông điệp tác động tùy chỉnh bị tự động làm tròn/quy đổi khá chung chung.
- **Casey (Distracted Mobile User)**: Khi thao tác bằng một tay trên điện thoại, việc chọn nút $100 ở trên làm khung hiển thị tác động phía dưới bị đẩy khỏi màn hình hiển thị chính, phải cuộn xuống mới thấy kết quả.

#### Minor Observations
1. Thẻ button toggle Frequency (`Monthly Partner` / `One-Time Gift`) dùng `role="radiogroup"` và `role="radio"` chuẩn accessible, nhưng nên bổ sung thêm hiệu ứng sliding background mượt cho tab switch.
2. Nút CTA `Support This Impact` dẫn tới hashtag `#donate?amount=...` cần được đồng bộ mượt với modal hoặc section checkout thực tế.

#### Questions to Consider
- *Liệu chúng ta có nên bổ sung các hình ảnh icon hoặc bộ đếm số liệu sinh động vào thẻ Output kết quả không?*
- *Có nên thêm nút nhấn nhanh "Select a Specific Project" ngay trong calculator để dẫn trực tiếp tới dự án cụ thể tương ứng với số tiền ủng hộ?*
