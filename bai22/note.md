exports và module.exports

- khi gán đối tượng exports = 1 cái gì đó:
 + exports và module.exports sẽ trỏ sang các giá trị khác nhau (tham chiếu)

- Còn khi gán thuộc tính của exports (exports.abc) thì:
 + exports và module.exports sẽ có giá trị giống nhau (do đang cùng trỏ vào cùng 1 obj)