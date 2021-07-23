let http = require('http')
let {usersController} = require('./usersController.ts')

let cors = (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200)
        res.end()
        return true
    }
    return false
}

let server = http.createServer((req, res) => {

    if (cors(req, res)) return

    switch (req.url) {
        case '/users':
            usersController(req,res)
            break
        case '/lessons':
            res.write('tasks')
            break
        default:
            res.write('page not found')

    }
})

server.listen(7542)