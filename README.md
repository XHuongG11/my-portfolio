# My Portfolio 🚀

Website Portfolio cá nhân được xây dựng bằng **React**, **TypeScript**, **Vite** và **Tailwind CSS**, giới thiệu bản thân, kỹ năng lập trình và các dự án tiêu biểu.

---

## 🛠️ Tech Stack

- **Core & Framework**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/), Custom CSS Variables (Design System cho Light/Dark Mode)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form & Validation**: [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.si/) (Toast Notifications)

---

## 💻 Cách Chạy Dự Án (Getting Started)

### 1. Yêu cầu hệ thống

- **Node.js**: `v18+` trở lên
- **npm**: `v9+` trở lên

### 2. Cài đặt & Chạy ứng dụng

```bash
# 1. Clone repository về máy
git clone https://github.com/XHuongG11/my-portfolio.git

# 2. Di chuyển vào thư mục dự án
cd my-portfolio

# 3. Cài đặt các package phụ thuộc
npm install

# 4. Chạy dự án ở chế độ phát triển (Development)
npm run dev
```

Mở trình duyệt và truy cập: `http://localhost:5173`

### 3. Build cho sản phẩm (Production)

```bash
# Build bản sản phẩm
npm run build

# Xem trước kết quả build (Preview)
npm run preview
```

---

## ✨ Danh Sách Tính Năng Đã Làm (Features)

1. **Điều hướng Trang & Tự Động Cuộn Đầu Trang (Routing & Auto Scroll to Top)**:
   - Điều hướng mượt mà giữa các trang: Home, Featured Projects, Contact và Trang 404 (Not Found) bằng `React Router`.
   - **Tự động cuộn về đầu trang (Auto Scroll to Top)**: Sử dụng component wrapper `PageTransition` lắng nghe sự thay đổi đường dẫn (`location.pathname`) qua `useLocation()` để tự động cuộn màn hình lên đầu (`window.scrollTo(0, 0)`) mỗi khi chuyển trang.
   - Header điều hướng thích ứng (Responsive Navigation) với menu tự động điều chỉnh theo kích thước màn hình.

2. **Chế Độ Giao Diện (Light / Dark Mode)**:
   - Chuyển đổi linh hoạt giữa giao diện Sáng và Tối (Light/Dark Mode) thông qua nút `ThemeToggle` với hiệu ứng chuyển cảnh mượt mà và lưu cấu hình hệ thống.

3. **Danh Sách Dự Án & Bộ Lọc Thông Minh (Projects & Tech Filters)**:
   - Hiển thị dự án dưới dạng thẻ `ProjectCard` sinh động với thông tin chi tiết: vai trò, thời gian, mô tả, danh sách công nghệ và link nguồn (GitHub / Demo).
   - **Xử lý link Demo thông minh**: Hiển thị trạng thái disabled kèm tooltip _"Not yet implemented"_ nếu dự án chưa triển khai bản demo.
   - **Thanh Tìm Kiếm (Search Bar)**: Tìm kiếm dự án tức thì theo tên, mô tả hoặc công nghệ.
   - **Bộ Lọc Công Nghệ (Tech Checkboxes Filter)**:
     - Đọc danh sách cấu hình từ `tech-filters.json` (dạng `TechFilter` interface với `id` và `name`).
     - Lựa chọn bộ lọc dạng tích chọn (Checkboxes) và hiển thị số lượng dự án tương ứng `(count)`.
   - **Responsive Slide Drawer**: Tự động chuyển đổi bộ lọc sang dạng Slide Menu Drawer full-height trượt từ bên trái màn hình trên điện thoại bằng `React Portal`.

4. **Biểu Mẫu Liên Hệ & Validation (Contact Form)**:
   - Form gửi thông tin liên hệ được tối ưu bằng `React Hook Form` kết hợp `Zod` schema validation.
   - Kiểm tra dữ liệu đầu vào theo thời gian thực (tên, email, tiêu đề, tin nhắn) và hiển thị thông báo toast thành công bằng `Sonner`.

5. **Hiệu Ứng Animation & Trải Nghiệm Người Dùng (UX/UI)**:
   - Hiệu ứng hiển thị cuộn trang (Reveal Animation) cho các phần tử UI.
   - Thiết kế giao diện hiện đại, chuẩn Responsive trên mọi thiết bị (Desktop, Tablet, Mobile).

---

## 🖼️ Screenshots & Link Demo

### 🔗 Link Demo Live

- [Demo Portfolio](https://my-portfolio-chi-lime-94.vercel.app/)

### 📸 Ảnh Minh Họa Dự Án (Screenshots)

#### Home

<p align="center">
  <img
    src="https://github.com/XHuongG11/portfolio-assets/blob/main/home-light-page.png"
    width="49%"
  />
  <img
    src="https://github.com/XHuongG11/portfolio-assets/blob/main/home-dark-page.png"
    width="49%"
  />
</p>

#### Projects

<p align="center">
  <img
    src="https://github.com/XHuongG11/portfolio-assets/blob/main/projects-page.png"
    width="90%"
  />
</p>

#### Filter mobile

<p align="center">
  <img
    src="https://github.com/XHuongG11/portfolio-assets/blob/main/filter-mobile.png"
    width="40%"
  />
</p>

#### Contact

<p align="center">
  <img
    src="https://github.com/XHuongG11/portfolio-assets/blob/main/contact-form.png"
    width="90%"
  />
</p>
