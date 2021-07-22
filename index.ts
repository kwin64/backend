let http = require('http')
let {getUsers, deleteUser, addUser} = require('./data.ts')
//let {getUsers, deleteUser, addUser} = require('./data')

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
            if (req.method === "POST") {
                addUser('new')
                res.write(JSON.stringify({success: true}))
            } else {
                res.write(JSON.stringify(getUsers()))
            }
            if (req.method === 'DELETE') {
                deleteUser(3)
            }
            break
        case '/lessons':
            res.write('tasks')
            break
        default:
            res.write('page not found')

    }
    res.end()
})

server.listen(7542)