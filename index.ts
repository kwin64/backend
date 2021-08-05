
var http = require("http");
var usersController = require("./usersController.js").usersController;
process.on("unhandledRejection", function (reason, p) {
    console.log(reason, p);
});
var cors = function (req:any, res:any) {
    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Request-Method", "*");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "*");
    if (req.method === "OPTIONS") {
        res.writeHead(200);
        res.end();
        return true;
    }
    return false;
};
var server = http.createServer(function (req:any, res:any) {
    if (cors(req, res))
        return;
    switch (req.url) {
        case "/users":
            usersController(req, res);
            break;
        case "/lessons":
            res.write("tasks");
            break;
        default:
            res.write("page not found");
    }
});
server.listen(7542);
