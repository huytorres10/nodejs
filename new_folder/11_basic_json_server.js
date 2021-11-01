var http = require("http")
var server = http.createServer(function (req, res) {
    console.log(req.url);
    console.log(req.method);
    res.writeHead(200, {"Content-Type": "application/json"})
    var content = {
        status: 200,
        message: 'success',
        err: false
    }
    res.write(JSON.stringify(content))
    res.end()
})

server.listen(1996, function () {
    console.log("Server is running on port 1996");
})