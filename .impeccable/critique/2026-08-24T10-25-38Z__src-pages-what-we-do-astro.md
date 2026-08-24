---
target: src/pages/what-we-do.astro
total_score: 26
max_score: 36
na_heuristics: 7
p0_count: 1
p1_count: 2
timestamp: 2026-08-24T10-25-38Z
slug: src-pages-what-we-do-astro
---
# Critique Report: `/what-we-do` Page

Method: dual-agent (A: design-director · B: detector-browser)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | State changes in calculator update text instantly, but lack smooth numeric transitions. |
| 2 | Match System / Real World | 4/4 | Excellent humanitarian terminology and transparent stats (e.g. "142,000+ People Served"). |
| 3 | User Control and Freedom | 3/4 | Clear subnav jumps, though detail drill-down modal/preview for each area is missing. |
| 4 | Consistency and Standards | 2/4 | **Visual mismatch with `/mission`**: `#areas` layout departs from `/mission`'s photo-manga editorial grid & `FIG 0x.x` caption style. |
| 5 | Error Prevention | 3/4 | Preset buttons restrict calculator input to valid donation tiers. |
| 6 | Recognition Rather Than Recall | 3/4 | 01-04 numbered cards maintain clear indexing across sections. |
| 7 | Flexibility and Efficiency | n/a | Persuade/Read editorial surface (accelerators not applicable). |
| 8 | Aesthetic and Minimalist Design | 2/4 | **CRITICAL OVERFLOW**: Sections `#areas` and `#calculator` exceed default screen height (`100vh`), causing content spillover outside viewport. |
| 9 | Error Recovery | 3/4 | Calculator defaults gracefully if invalid state is selected. |
| 10 | Help and Documentation | 3/4 | Clear lead copy and captions explaining how the 4 pillars connect. |
| **Total** | | **26/36** | **Good (72%)** |

## Design Specificity Verdict

**LLM Assessment**:
Trang `/what-we-do` có nội dung vô cùng sắc bén và thực tế, nhưng về mặt thiết kế giao diện (UI/Layout) chưa đạt độ đồng bộ cao cấp với trang `/mission`. 
1. **Lỗi tràn màn hình (Viewport Overflow)**: Cả 2 section `#areas` (Four areas) và `#calculator` (Impact calculator) đều có chiều cao nội dung vượt quá `100vh - header-h`. Khi scroll xuống từng panel, chân trang (panel footer) và phần cuối của thẻ card bị đẩy ra khỏi màn hình hiển thị mặc định (đặc biệt ở độ phân giải phổ biến 1366x768 hoặc 1440x900).
2. **Lệch chuẩn thiết kế Editorial của `/mission`**: Section `#areas` đang dùng bố cục bất đối xứng (1 card hero lớn bên trái + 3 card nhỏ bên phải), thiếu đi các chi tiết đặc trưng mang tính nhận diện của trang Mission như: khung ảnh kiểu Nhật/Manga (`photo-manga-grid`), nhãn caption hồ sơ `FIG 02.x`, viền ô thẻ sắc nét (crisp borders), và nhãn micro-stat badge (`24-48h`, `100%`).

**Deterministic Scan**:
Scanned `src/pages/what-we-do.astro` & related components: `0 syntax errors`. Không có lỗi mã HTML/CSS thô, nhưng cấu trúc flex container thiếu thuộc tính khống chế chiều cao tối đa (`max-height` / `fit-content` trong khung `100dvh`).

## Overall Impression
Nội dung truyền cảm hứng rất tốt, tuy nhiên cấu trúc giao diện cần được "tinh chỉnh chuẩn Magazine Editorial" theo phong cách trang `/mission`. Giữ đúng ý tưởng chia Grid 4 khu vực nhưng đưa về hệ thống khung thẻ đồng nhất, gọn gàng trong 1 viewport màn hình (`100vh`), không để tràn nội dung ra ngoài khi cuộn.

## What's Working
- **Thông điệp mạnh mẽ**: Tiêu đề *"Four areas. One principle: start with what people say they need."* rất cuốn hút và thể hiện đúng tinh thần humanitarian.
- **Tính tương tác cao**: Bộ tính toán Impact Calculator giúp người xem thấy ngay tác động thực tế của khoản đóng góp.
- **Định danh số 01-04 rõ ràng**: Giúp người đọc dễ dàng định vị các trụ cột hoạt động.

## Priority Issues

### [P0] Viewport Overflow - Nội dung tràn chiều cao màn hình (`100vh`)
- **Why it matters**: Làm phá vỡ trải nghiệm scroll-snap 1-screen-per-topic; chân trang panel bị đẩy mất khỏi khung nhìn, người dùng phải cuộn chuột lẻ bên trong panel.
- **Fix**: Tối ưu lại padding, kích thước thumbnail ảnh, typography scale và đặt constraint `max-height: calc(100dvh - var(--header-h))` cho container.
- **Suggested command**: `$impeccable layout`

### [P1] Tái thiết kế Section `#areas` theo phong cách Editorial của `/mission`
- **Why it matters**: Bố cục hiện tại 1 card to + 3 card nhỏ gây mất cân đối và trông giống blog thông thường hơn là một trang báo chí/tạp chí nhân đạo cao cấp như trang Mission.
- **Fix**: Chuyển thành **2x2 Editorial Grid** (4 thẻ vuông vức đồng bộ) với tiêu đề ảnh `FIG 02.1` -> `FIG 02.4`, nhãn địa phương (`East Africa`, `Rift Valley`), chỉ số tác động (`142k+ Served`, `48 Schools`) và nút hành động tinh tế.
- **Suggested command**: `$impeccable bolder`

### [P1] Chuẩn hóa bộ tính toán Impact Calculator vừa vặn & gọn gàng
- **Why it matters**: Card Calculator hiện tại quá dày (vertical padding lớn), khối kết quả màu tối chiếm nhiều không gian chiều cao.
- **Fix**: Cấu trúc lại theo dạng ngang (horizontal compact split layout), thu gọn spacing giữa các button giá tiền, giúp toàn bộ khối Calculator nằm trọn trong 60-65% chiều cao màn hình.
- **Suggested command**: `$impeccable polish`

### [P2] Tinh chỉnh khoảng cách Section `#connect`
- **Why it matters**: Khối `pull-quote` ở cuối trang có margin-top lớn (`var(--space-8)`), đẩy phần điều hướng chân trang xuống quá sát viền dưới màn hình.
- **Fix**: Sử dụng `clamp(0.75rem, 2vh, 1.5rem)` cho margin của pull-quote.
- **Suggested command**: `$impeccable layout`

## Persona Red Flags

- **Jordan (Người dùng mới)**: Cuộn tới Section 2 (`#areas`), thấy 2 thẻ bên dưới bị cắt nửa do vượt quá chiều cao màn hình, dễ tưởng trang bị lỗi hiển thị.
- **Riley (Stress Tester - Độ phân giải 1366x768)**: Khung nhìn laptop chuẩn bị tràn mất phần footer `02/04` và `03/04`, phải cuộn thêm mới thấy nút chuyển section.
- **Casey (Di động & Máy tính bảng)**: Các khối calculator và thẻ công việc bị xếp chồng dọc quá dài, mất tính đóng gói gọn gàng từng màn hình.

## Minor Observations
- Các badge nhãn như "Direct Local Sourcing" và "Urgent Priority" đang dùng màu sắc chưa nhất quán với hệ màu của trang Mission (xanh lá emerald vs cam primary).
- Biểu tượng mũi tên trên các link link-text lúc dùng `→`, lúc dùng `↓`.

## Questions to Consider
- Chúng ta có nên đưa 4 khu vực (`#areas`) về dạng **Grid 2x2 đối xứng chuẩn Magazine** với 4 hình ảnh tiêu biểu & caption `FIG 02.1 - 02.4` giống như trang Mission không?
- Bộ tính toán Calculator có nên chuyển sang tông màu Sand/Paper nhẹ nhàng hơn để hòa nhập hoàn toàn với thiết kế tổng thể của trang không?
