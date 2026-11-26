
# SHOPMINI - BÀI THỰC HÀNH 03

## 1. Thông tin sinh viên

- Họ và tên: Hồ Công Chính
- Mã sinh viên: B25DCCC043
- Bài tập: Bài thực hành 03 (TH02)
- Tên ứng dụng: ShopMini

## 2. Giới thiệu

ShopMini là ứng dụng cửa hàng mini được xây dựng
bằng React và TypeScript, sử dụng Vite.

Ứng dụng sử dụng Context API và Redux Toolkit
để quản lý trạng thái.

## 3. Công nghệ sử dụng

- React
- TypeScript
- Vite
- Redux Toolkit
- React Redux
- Context API
- React Router DOM
- Lucide React
- CSS3
- Fake Store API

## 4. Các chức năng chính

- Hiển thị danh sách sản phẩm từ API.
- Tìm kiếm sản phẩm theo tên.
- Xem chi tiết sản phẩm.
- Thêm sản phẩm vào giỏ hàng.
- Xóa sản phẩm khỏi giỏ hàng.
- Cập nhật số lượng sản phẩm.
- Tính tổng số lượng và tổng tiền.
- Đăng nhập và đăng xuất.
- Chuyển đổi giao diện sáng/tối.
- Bảo vệ trang thanh toán bằng Protected Route.
- Đặt hàng và xóa giỏ hàng sau khi thành công.
- Hiển thị trang 404.
- Responsive trên điện thoại, tablet và máy tính.

## 5. Quản lý State

### 5.1. useState

Dữ liệu được quản lý bằng useState:

- Nội dung tìm kiếm sản phẩm.
- Tên đăng nhập.
- Mật khẩu.
- Thông báo lỗi đăng nhập.
- Trạng thái đặt hàng thành công.

Lý do:

Các dữ liệu này chỉ được sử dụng trong phạm vi
một component hoặc một trang, không cần chia sẻ
cho toàn bộ ứng dụng.

### 5.2. Context API

ThemeContext:

- theme: giao diện sáng hoặc tối.
- toggleTheme(): thay đổi giao diện.
- Custom hook useTheme().

AuthContext:

- user: thông tin người dùng.
- login(): đăng nhập.
- logout(): đăng xuất.
- Custom hook useAuth().

Lý do:

Theme và thông tin đăng nhập cần được sử dụng
ở nhiều component khác nhau trong ứng dụng.

Context API giúp chia sẻ dữ liệu toàn cục
mà không cần truyền props qua nhiều cấp.

### 5.3. Redux Toolkit

productsSlice:

- Danh sách sản phẩm.
- Trạng thái tải dữ liệu.
- Thông báo lỗi.
- Sử dụng createAsyncThunk để gọi API.
- Xử lý loading, succeeded và failed.

cartSlice:

- Danh sách sản phẩm trong giỏ hàng.
- Số lượng của từng sản phẩm.
- addToCart.
- removeFromCart.
- updateQuantity.
- clearCart.
- Selector tính tổng số lượng.
- Selector tính tổng tiền.

Lý do:

Dữ liệu sản phẩm và giỏ hàng được sử dụng
ở nhiều trang và có nhiều thao tác cập nhật.

Redux Toolkit giúp quản lý state tập trung,
đồng bộ dữ liệu và dễ bảo trì ứng dụng.

## 6. Các đường dẫn

| Đường dẫn | Chức năng |
| --- | --- |
| / | Trang chủ |
| /products/:id | Chi tiết sản phẩm |
| /cart | Giỏ hàng |
| /login | Đăng nhập |
| /checkout | Thanh toán |
| * | Trang 404 |

## 7. API sử dụng

https://fakestoreapi.com/products

## 8. Tài khoản đăng nhập thử

- Username: Tên bất kỳ không để trống.
- Password: 123456.

Đăng nhập và thanh toán chỉ là chức năng giả lập.

## 9. Hướng dẫn cài đặt và chạy

Cài đặt thư viện:

    npm install

Chạy ứng dụng:

    npm run dev

Truy cập:

    http://localhost:5173

Build ứng dụng:

    npm run build

## 10. Responsive

- Điện thoại: 1 cột sản phẩm.
- Tablet: 2 cột sản phẩm.
- Máy tính: 4 cột sản phẩm.

## 11. Kết luận

Ứng dụng ShopMini được xây dựng nhằm vận dụng
kiến thức React, TypeScript, Context API,
Redux Toolkit và React Router DOM vào thực tế.
