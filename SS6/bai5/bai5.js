"use strict";
// any và unknown đều cho phép làm việc với dữ liệu mà không cần biết loại chính xác của nó, nhưng unknown mang lại tính an toàn hơn bằng cách yêu cầu kiểm tra kiểu dữ liệu trước khi sử dụng. Do đó, nếu có thể, nên ưu tiên sử dụng unknown thay vì any để tăng tính an toàn của mã TypeScript.
let y;
y = 10;
y = "Hello";
y.foo(); //lỗi
let x;
x = 10;
x = "Hello";
x.foo(); //TypeScript không phát hiện lỗi
