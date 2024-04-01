const http = require("http");
http.createServer((req, res) => {
    let url = req.url;
    if (url === "/") {
        res.end("Wlcm to home page...")
    }if(url === "/about"){
        res.end("Wlcm to about page...")
    }
}).listen(3000);