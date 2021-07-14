let http = require('http')

let server = http.createServer((req, res) => {
    console.log('some request')
    let message = 'dfdf'
    
    switch (req.url) {
        case '/':
            res.write('HOME')
            break
        case '/tasks':
            res.write('tasks')
            break
        default:
            res.write('page not found')

    }
    res.end()
})

server.listen(7542)

console.log(http)