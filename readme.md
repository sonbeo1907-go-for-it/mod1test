HƯỚNG DẪN CHẠY CHƯƠNG TRÌNH QUẢN LÝ SÁCH



LƯU Ý QUAN TRỌNG: 

Dự án được viết theo chuẩn ES6 Modules (import/export) để đảm bảo mã nguồn sạch 

và tách biệt logic. Trình duyệt sẽ chặn tính năng này nếu mở trực tiếp bằng cách 

click đúp vào file 'index.html' (lỗi CORS).



Để chạy chương trình, vui lòng thực hiện theo các cách sau:



---

CÁCH 1: Sử dụng NPX (Khuyên dùng)

---

1\. Mở thư mục chứa đồ án bằng Terminal (CMD hoặc PowerShell).

2\. Nhập lệnh sau và nhấn Enter:

&nbsp;  npx serve

3\. Truy cập vào địa chỉ Local được hiển thị (thường là http://localhost:3000).



---

CÁCH 2: Sử dụng VS Code Live Server

---

1\. Mở thư mục đồ án bằng Visual Studio Code.

2\. Nếu máy đã cài Extension "Live Server", nhấn chuột phải vào file 'index.html'.

3\. Chọn "Open with Live Server".



---

CÁCH 3: Sử dụng Python (Nếu máy có cài Python)

---

1\. Mở Terminal tại thư mục đồ án.

2\. Nhập lệnh:

&nbsp;  python -m http.server 8000

3\. Truy cập: http://localhost:8000



-------------------------------------------------------

Cấu trúc file:

\- index.html: Giao diện và điều khiển bảng.

\- manager.js: Logic quản lý kho sách (Manager Class).

\- book.js: Định nghĩa đối tượng và validate (Book Class).

