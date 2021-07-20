let http = require('http')

let cors = (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200)
        res.end()
        return true
    }
    return false
}

let users = [
    {"id": 1, "name": "Sasha"},
    {"id": 3, "name": "Dks"},
    {"id": 2, "name": "dsfa"},
    {"id": 4, "name": "xlcma"},
    {"id": 67, "name": "ldfksm"}
]

let server = http.createServer((req, res) => {

    if (cors(req, res)) return

    switch (req.url) {
        case '/users':
            if (req.method === "POST") {
                users.push({"id": 89, "name": "mnmvhjvfhjhj"})
                res.write(JSON.stringify({success: true}))
            } else {
                res.write(JSON.stringify(users))
            }
            break
        case '/lssons':
            res.write('tasks')
            break
        default:
            res.write('page not found')

    }
    res.end()
})

server.listen(7542)