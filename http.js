const http = require('http')

const server = http.createServer(
    (req,res) => {
        console.log(req)
        res.write('yooooo welcome')
        res.end()
    }
)

server.listen(3000)