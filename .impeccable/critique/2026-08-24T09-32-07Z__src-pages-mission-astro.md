---
target: src/pages/mission.astro
total_score: 24
max_score: 24
na_heuristics: 5,7,9,10
p0_count: 0
p1_count: 0
timestamp: 2026-08-24T09-32-07Z
slug: src-pages-mission-astro
---
# Impeccable Layout Review: /mission Section 01 (Hero)

## Spatial Thesis & Topology
- **Primary Reading Path**: Tiêu đề chính (`h1`) → Đoạn dẫn (`lead`) → Hàng nút CTA (`btn-row`) → Điều hướng phụ (`subnav`).
- **Grouping & Proximity**: Phân định nhóm rõ ràng giữa khu vực nội dung văn bản bên trái (grid-column 1) và Card hình ảnh tư liệu cao cấp bên phải (grid-column 2).
- **Rhythm**: Loại bỏ toàn bộ `inline styles`, chuyển sang hệ thống BEM Semantic CSS class với nhịp điệu khoảng cách đồng bộ từ Design Tokens.

## Layout Audit Verification
- [x] **Squint test**: Khối tiêu đề chính và Card hình ảnh là 2 tiêu điểm thị giác hàng đầu.
- [x] **Proximity**: Khoảng cách lề giữa tiêu đề, lead, nút bấm và subnav được tính toán nhất quán.
- [x] **Responsiveness**: Trên màn hình di động, khối văn bản tự reflow xếp chồng mượt mà lên trên ảnh; trên màn hình rộng, lưới 2 cột được chia theo tỷ lệ vàng `1.05fr : 1fr`.
- [x] **Mechanical Scan**: `detect.mjs --scope layout` trả về 0 lỗi.
