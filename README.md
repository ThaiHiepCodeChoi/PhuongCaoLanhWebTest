# 🌸 Website Giới Thiệu Phường Cao Lãnh (Đồng Tháp)

Trang web tĩnh hiện đại, thẩm mỹ cao giới thiệu về **Phường Cao Lãnh, tỉnh Đồng Tháp** (Đơn vị hành chính mới thành lập từ ngày 01/07/2025 sau khi sáp nhập 9 phường, xã trung tâm).

Trang web được thiết kế tối ưu, hoàn toàn bằng **HTML, CSS và JavaScript thuần** (không cần cài đặt thư viện nặng hay build lằng nhằng), sẵn sàng đưa lên **GitHub Pages** chỉ với vài thao tác đơn giản.

---

## 🌟 Điểm nổi bật của Website

1. **Giao diện hiện đại (Modern Aesthetics)**:
   - Tông màu biểu trưng của **Đất Sen Hồng Đồng Tháp** (Hồng Sen, Xanh ngọc sông Tiền, Vàng ấm miệt vườn).
   - Hỗ trợ chế độ **Dark Mode (Tối) / Light Mode (Sáng)** mượt mà, lưu trạng thái tự động.
   - Hiệu ứng thị giác glassmorphism, ánh sáng môi trường (ambient glow), chuyển động mượt mà.
2. **Nội dung phong phú, chính xác**:
   - **Thông tin sáp nhập 2025**: Chi tiết về 9 đơn vị hành chính hợp nhất (Phường 1, 3, 4, 6, Hòa Thuận, Hòa An, Tịnh Thới, Tân Thuận Tây, Tân Thuận Đông).
   - **Danh lam thắng cảnh & di sản**: Khu di tích Cụ Phó bảng Nguyễn Sinh Sắc, Cù lao du lịch sinh thái Tân Thuận Đông, Làng hoa kiểng & vườn xoài Cát Chu, Công viên Văn Miếu...
   - **Ẩm thực đặc sản**: Bánh xèo Cao Lãnh, Cá lóc nướng trui lá sen non, Xoài Cát Chu OCOP, các món ngon từ Sen.
   - **Thông tin hành chính & Bản đồ trực tuyến**: Địa chỉ UBND phường (Số 03 đường 30/4), hotline dịch vụ công và nhúng Google Maps.
3. **Tính năng tương tác**:
   - Bộ lọc danh mục địa danh thông minh (Di tích, Sinh thái, Đô thị).
   - Hiệu ứng số liệu thống kê tự nhảy sinh động (73.3 km², 137.000+ dân số...).
   - Xem ảnh phóng to (Lightbox).
   - Modal hướng dẫn trực tiếp cách đẩy lên GitHub Pages.

---

## 🚀 Hướng Dẫn Đưa Lên GitHub Pages (3 Bước)

### Bước 1: Tạo Repository trên GitHub
1. Đăng nhập vào [GitHub](https://github.com/).
2. Nhấn nút **New Repository** (hoặc truy cập [github.com/new](https://github.com/new)).
3. Đặt tên repository, ví dụ: `web-phuong-cao-lanh` (hoặc `cao-lanh-web`).
4. Chọn chế độ **Public**, sau đó bấm **Create repository**.

### Bước 2: Đẩy Code từ máy tính lên GitHub
Mở **Terminal / PowerShell** tại thư mục này (`d:\webGioiThieu`) và chạy lần lượt các lệnh:

```bash
git init
git add .
git commit -m "Khởi tạo website giới thiệu Phường Cao Lãnh"
git branch -M main
git remote add origin https://github.com/USERNAME/web-phuong-cao-lanh.git
git push -u origin main
```
*(Thay thế `USERNAME` và `web-phuong-cao-lanh` bằng tài khoản và tên repo của bạn)*

### Bước 3: Kích hoạt GitHub Pages
1. Tại giao diện GitHub của repository bạn vừa tạo, vào tab **Settings** (Cài đặt).
2. Ở thanh menu bên trái, tìm và nhấp vào mục **Pages**.
3. Tại phần **Build and deployment** -> **Source**: chọn **Deploy from a branch**.
4. Dưới mục **Branch**:
   - Chọn nhánh `main`
   - Chọn thư mục `/(root)`
   - Nhấn **Save**.
5. Đợi khoảng 1 - 2 phút, GitHub sẽ hiển thị đường link trang web trực tiếp của bạn:
   ```
   https://USERNAME.github.io/web-phuong-cao-lanh/
   ```

---

## 📁 Cấu Trúc Thư Mục

```
webGioiThieu/
├── index.html            # Cấu trúc nội dung chính của website (HTML5 chuẩn SEO)
├── styles.css            # Toàn bộ mã tạo kiểu CSS, animation, dark/light theme
├── script.js             # Logic xử lý tương tác JavaScript thuần
├── README.md             # Hướng dẫn chi tiết triển khai
└── assets/
    └── images/           # Thư mục hình ảnh chất lượng cao
        ├── hero.jpg
        ├── nguyen_sinh_sac.jpg
        ├── xoai_cao_lanh.jpg
        └── am_thuc.jpg
```

Chúc bạn xuất bản trang web thành công lên GitHub Pages!
