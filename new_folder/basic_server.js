// khai báo sử dụng module HTTP
var http = require('http');

//Khởi tạo server chạy cổng 8000
http.createServer(function (request, response) {
    //thiết lập giá trị server trả về
    response.write('hello world! toidicode.com');
    response.end();
}).listen(8000);