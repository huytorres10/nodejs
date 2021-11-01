var http = require("http")
var server = http.createServer(function (req, res) {
    //return text
    // res.writeHead(200, {"Content-Type": "text/plain"})
    // res.write("Day la server dau tien cua nodeJS")

    //return html
    res.writeHead(200, {"Content-Type": "text/html"})
    res.write("<h1>Huy dz vl</h1>")
    res.end()
})
server.listen(1996, function () {
    console.log("Server is running on port 1996");
})