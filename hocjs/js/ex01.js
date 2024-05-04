// Để in dữ liệu ra màn hình --->DOM (Document Object Model)
document.write("<h2>Hello Anh Em</h2>");
// Debug dữ liệu: Console.log: hiển thị nội dung trong tab console của devtool
console.log("Hello anh em");

// Biến:

/*      - Lưu trữ dữ liệu tạm thời, được lưu ở ram  
        - Chấp nhận :$, chữ hoa/thường/số/gạch dưới.

    Quy tắc đặt tên biến:
        1. camelCase: userId, customerAddressShipping
        2. PascalCase: UserModel, CustomerService
        3.underscore: user_id
*/
var lastName = "Mai ";
// var customerName = "<h2>Viet " + lastName + " Hoang</h2>";
var customerName = `<h2>Viet ${lastName}Hoang</h2>`;
// Template string (Backtick: `)
document.write(customerName);
