---
target: all-site UI/content audit
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
timestamp: 2026-08-27T07-56-34Z
slug: src-pages-index-astro
---
⚠️ DEGRADED: single-context (spawn_agent unavailable in this session)

# UI/content audit

Phạm vi: 5 route (`/`, `/mission/`, `/what-we-do/`, `/vision/`, `/who-we-are/`), desktop 1440px, tablet 768px và mobile 375px; review cả copy, hierarchy, ảnh, CTA, information architecture và donor journey.

## Quick verdict

| Hạng mục | Đánh giá | Kết luận |
|---|---:|---|
| Mật độ ở first viewport | 8/10 | Vừa đủ, dễ quét; không còn cảm giác rỗng hoặc chật. |
| Mật độ toàn site | 6/10 | Hơi dày theo chiều dọc, đặc biệt ở What We Do và Vision. |
| Độ rõ content | 7/10 | Donor-first hơn trước, nhưng còn nhiều câu trừu tượng và lặp ý. |
| Khớp ảnh với content | 8.5/10 | Ảnh thật đúng ngữ cảnh, tạo niềm tin tốt. |
| Độ sẵn sàng cho donation | 4.5/10 | Chưa có bước donate/đăng ký hỗ trợ rõ ràng để hoàn tất hành động. |

## Design Health Score

| # | Heuristic | Score | Key issue |
|---|---|---:|---|
| 1 | Visibility of System Status | 3/4 | Active nav, carousel progress và back-to-top rõ; trạng thái sau khi “support” chưa có vì CTA chưa đi vào flow thật. |
| 2 | Match System / Real World | 3/4 | Ngôn ngữ gần gũi với donation, nhưng “all-hazards”, “non-discriminatory”, “public-private” còn hơi chuyên ngành. |
| 3 | User Control and Freedom | 3/4 | Điều hướng, mobile menu, carousel và FAQ tốt; chưa có control cho một quy trình donation thực tế. |
| 4 | Consistency and Standards | 3/4 | Visual system nhất quán; internal pages dùng cùng hero/signal pattern quá nhiều và tên CTA chưa thống nhất. |
| 5 | Error Prevention | 2/4 | Chưa có form donation; newsletter mới dừng ở native required và browser alert. |
| 6 | Recognition Rather Than Recall | 3/4 | Người dùng nhận ra page đang ở đâu, nhưng phải tự đoán “Support the work” sẽ dẫn tới đâu. |
| 7 | Flexibility and Efficiency | n/a | Đây là public persuasion site, không phải công cụ làm việc nhiều phiên. |
| 8 | Aesthetic and Minimalist Design | 3/4 | First fold thoáng và mạnh; long-scroll có nhiều layer lặp lại: signal row, card groups, quote, next chapter. |
| 9 | Error Recovery | 2/4 | Không có state cho submit lỗi, link donation thất bại hoặc thiếu thông tin tiếp theo. |
| 10 | Help and Documentation | n/a | FAQ có hỗ trợ cơ bản nhưng đây không phải surface documentation chính. |
| **Total** |  | **22/32** | **Acceptable: nền tảng tốt, nhưng chưa conversion-ready.** |

## Design Specificity Verdict

**LLM assessment:** Site đã có chất riêng nhờ ảnh tài liệu thật, tone “useful support”, các nhãn như `Give useful goods`, `Prepare donations`, `Share with neighbors`, và cách dùng section như một field ledger. Nó không còn là landing page NGO chung chung.

Điểm làm nó hơi category-interchangeable là cấu trúc của 4 internal page: hero card bên trái, ảnh bên phải, cùng một hàng `Local leadership / Practical support / Staying power`, sau đó là hai chapter lớn và quote. Nội dung đổi nhưng nhịp đọc gần như không đổi, khiến Mission, Vision và Who We Are hơi giống các biến thể của cùng một template. Cơ hội bị bỏ lỡ là chưa có tên người, nguồn gốc tổ chức, địa điểm hoạt động cụ thể, quy trình nhận donation cụ thể hoặc bằng chứng impact thật để làm rõ “vì sao nên tin”.

**Deterministic scan:** detector tìm thấy 2 advisory findings, đều là `#0060AE` nằm ngoài palette trong `DESIGN.md`: [ClosingCTA.astro:60](/Users/vothuongbao/Project/Hands%20Across%20Humanity/src/components/home/ClosingCTA.astro:60) và [BackToTop.astro:69](/Users/vothuongbao/Project/Hands%20Across%20Humanity/src/components/ui/BackToTop.astro:69). Đây là governance drift hơn là lỗi visual: `#0060AE` đang là Signal Blue có chủ ý trong `global.css`, nhưng design artifact chưa đồng bộ.

**Browser evidence:** Playwright đã kiểm tra toàn bộ 5 route ở 375px, 768px và 1440px. Cả 15 tổ hợp không có horizontal overflow, và không còn visible copy cũ bị cấm. Snapshot đại diện cho thấy Home/What We Do desktop giữ được hierarchy tốt; Mission mobile stack đúng, không cắt chữ. Không có native browser presentation/overlay tool để làm tab `[Human]` hiển thị cho người dùng, nên không ghi nhận overlay visual như một bằng chứng độc lập.

## Overall Impression

Nền UI hiện tại đã đẹp, có ảnh thật và có tính tổ chức. First viewport không phải vấn đề nữa. Vấn đề lớn nhất là site đang “giải thích rất tốt” nhưng “chưa giúp người xem donate ngay”: CTA nói rộng, đích đến vẫn là page kể chuyện, còn các claim về accountability chưa có bằng chứng tương ứng. Nếu chỉ chỉnh tiếp spacing hoặc font, hiệu quả sẽ thấp hơn việc làm rõ donor journey và cắt lặp content.

## What’s Working

1. **Ảnh và thông điệp khớp nhau.** Ảnh trẻ em đi với education essentials, ảnh bàn hàng đi với practical goods, ảnh distribution đi với community support. Đây là nền tảng trust tốt và không mang cảm giác dùng ảnh stock.
2. **First fold đã cân bằng.** Split hero có title, lead, hai CTA và ảnh đủ lớn; mobile chuyển thành stack hợp lý. Dark impact band ở Home chỉ còn là một nhịp chuyển ngắn, không lấn át màn hình.
3. **Hướng copy đã đúng hơn.** Các cụm “useful goods”, “shared with care”, “people who need them” dễ hiểu hơn jargon humanitarian thuần túy; mission/vision vẫn giữ được ý chính về tốc độ, dignity, resilience và non-discriminatory support.

## Priority Issues

### [P1] CTA donation chưa dẫn tới một hành động hoàn chỉnh

**Vấn đề:** `Support the work` ở [HeroSection.astro:70](/Users/vothuongbao/Project/Hands%20Across%20Humanity/src/components/home/HeroSection.astro:70) chỉ tới `#donate`, nhưng `#donate` lại là closing CTA. Nút `See how to help` tiếp tục dẫn tới `/what-we-do/`. Các page khác dùng `Support Our Mission` và cũng quay về `/#donate`. Người xem chưa biết phải donate tiền, donate goods, đăng ký volunteer hay liên hệ partner ở đâu.

**Vì sao quan trọng:** Với donor, đây là điểm rơi conversion. Một CTA nghe có vẻ mạnh nhưng chỉ đưa người dùng quay lại content sẽ tạo cảm giác site chưa sẵn sàng nhận hỗ trợ.

**Fix:** Chọn một primary action thật: `Give useful goods`, `Donate funds`, hoặc `Start a partnership`. Nếu hiện tại chưa có payment/form, đổi wording thành `Learn how to help` và thêm trang/section có accepted items, cách giao nhận, email/phone, thời gian và bước tiếp theo. Tách CTA theo intent thay vì dùng `Support Our Mission` cho mọi page.

**Suggested command:** `$impeccable clarify`

### [P1] What We Do đang có quá nhiều lựa chọn cho một donor mới

**Vấn đề:** [what-we-do.astro:20](/Users/vothuongbao/Project/Hands%20Across%20Humanity/src/pages/what-we-do.astro:20) có 5 work areas, rồi thêm 4 ecosystem stories ở [what-we-do.astro:175](/Users/vothuongbao/Project/Hands%20Across%20Humanity/src/pages/what-we-do.astro:175). Các ý `collect / prepare / share / partner` lại xuất hiện ở Home, Mission và Who We Are.

**Vì sao quan trọng:** 5 card không quá nhiều về mặt UI, nhưng 5 card cộng 4 story cộng hero signals làm donor phải tự tổng hợp “mình nên bắt đầu từ đâu”. Đây là density theo chiều dọc và cognitive load, không phải lỗi responsive.

**Fix:** Giữ tối đa 3 donor paths ở tầng đầu: `Give goods`, `Volunteer`, `Partner`. Bên dưới chỉ giữ 3 impact examples: `Education`, `Health & household`, `Community care`. Chi tiết còn lại đưa vào accordion hoặc subpage.

**Suggested command:** `$impeccable distill`

### [P1] “Who We Are” chưa thực sự trả lời câu hỏi who

**Vấn đề:** [who-we-are.astro:16](/Users/vothuongbao/Project/Hands%20Across%20Humanity/src/pages/who-we-are.astro:16) dùng heading `Why Hands Across Humanity Matters.` và phần lớn nói về gap giữa crisis và recovery. Người dùng vẫn chưa biết ai vận hành tổ chức, bắt đầu từ đâu, hoạt động ở đâu, ai là local leaders, hoặc liên hệ với người nào.

**Vì sao quan trọng:** Donor lớn và corporate partner cần trust proof, không chỉ philosophy. Page hiện tại giống “Why it matters” hơn “Who we are”.

**Fix:** Hoặc đổi label thành `Why It Matters`, hoặc bổ sung một block ngắn nhưng cụ thể: origin từ Houston, team/leadership, partner types, operating footprint, contact point và các thông tin pháp lý đã verify.

**Suggested command:** `$impeccable clarify`

### [P2] Claim về trust/accountability chưa có proof ngay tại điểm đọc

**Vấn đề:** Các cụm `Clear accountability`, `Transparent partnerships`, `without discrimination`, `Registered 501(c)(3)` xuất hiện trong [SiteLayout.astro:117](/Users/vothuongbao/Project/Hands%20Across%20Humanity/src/layouts/SiteLayout.astro:117), [who-we-are.astro:51](/Users/vothuongbao/Project/Hands%20Across%20Humanity/src/pages/who-we-are.astro:51) và nhiều card, nhưng chưa có report, partner names, donation handling details hoặc link verification.

**Vì sao quan trọng:** Claim càng mạnh thì người dùng càng mong đợi evidence. Thiếu evidence không làm UI xấu, nhưng làm giảm trust khi quyết định cho tiền hoặc hàng.

**Fix:** Mỗi claim nên có proof tương ứng: registration link, partner logos đã được phép dùng, donation handling steps, update cadence, hoặc impact numbers có nguồn. Nếu chưa có dữ liệu, dùng wording khiêm tốn hơn như `We aim to make support clear and responsible`.

**Suggested command:** `$impeccable harden`

### [P2] Internal pages đẹp nhưng hơi “một khuôn” và lặp abstract language

**Vấn đề:** [EditorialPage.astro:92](/Users/vothuongbao/Project/Hands%20Across%20Humanity/src/components/EditorialPage.astro:92) render cùng một signal row cho mọi page. Những từ `support`, `community`, `dignity`, `partners`, `practical` lặp ở hero, card, quote và chapter transition.

**Vì sao quan trọng:** Người đọc cảm thấy đang đọc lại cùng một argument thay vì đi qua 5 lớp thông tin khác nhau.

**Fix:** Cho mỗi page một job rõ: Home = lý do nên giúp; Mission = lời cam kết; What We Do = cách giúp và nơi support đi tới; Vision = tương lai; Who We Are = con người và bằng chứng vận hành. Bỏ signal row khỏi một hoặc hai page, thay bằng data/story cụ thể.

**Suggested command:** `$impeccable distill`

## Persona Red Flags

**Jordan, First-Timer:** Từ `Support the work` đến `#donate` rồi lại gặp `See how to help`, nhưng không có form, email hay danh sách donation cụ thể. Jordan hiểu mission nhưng không biết bước tiếp theo để giúp ngay.

**Riley, Donor/Partner Evaluator:** Riley thấy các claim về accountability và 501(c)(3), nhưng không thấy registration evidence, partner names, reports hoặc measurable outcome. Page `Who We Are` cũng chưa có người/tổ chức thật đứng sau câu chuyện, nên khó đưa vào shortlist.

**Casey, Mobile Visitor:** Mobile layout không overflow và first fold dễ đọc. Tuy nhiên CTA bị stack thành hai nút, ảnh và signals đẩy next action xuống; What We Do có 5 card dài liên tiếp. Casey cần một sticky hoặc repeated `Give goods / Volunteer / Partner` action rõ hơn thay vì tiếp tục đọc.

## Minor Observations

- `Support Our Mission`, `Support the work`, `See how to help`, `Find a way to help` đang cùng cạnh tranh vai trò primary CTA. Nên chọn một vocabulary duy nhất.
- `all-hazards`, `catastrophic situations`, `non-discriminatory` nên có một câu plain-language giải thích để người ngoài ngành không bị đứng lại.
- Newsletter hiện submit bằng browser `alert`; về mặt UI nó giống prototype. Nên có success state thật, privacy note và failure state trước khi launch.
- Cần verify factual claim `Registered 501(c)(3) Public Charity` trước khi public.
- `Coalition`, `Ecosystem`, `Reach` đẹp về editorial tone nhưng chưa nói ngay donor có thể làm gì. Có thể giữ làm kicker, nhưng heading/subcopy nên ưu tiên action hoặc proof.

## Questions to Consider

1. Primary conversion thật sự là gì ở giai đoạn này: **donate goods**, **donate funds**, hay **đăng ký volunteer/partner**? Chọn một để toàn site dẫn về cùng một đích.
2. `Who We Are` nên ưu tiên **team và nguồn gốc**, **bằng chứng vận hành**, hay **câu chuyện Houston và local network**? Hiện tại page đang làm cả “why it matters” nhưng chưa làm rõ “who”.
3. Mày muốn giữ đủ 5 focus areas vì đây là scope thật, hay gom thành 3 donor paths để page ngắn và dễ ra quyết định hơn?
