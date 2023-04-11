const server = require('./api/server')
port = 7000

server.get('/', (req, res) => {
    res.send('Hello World!')
  })

server.listen(port,()=> console.log(`Server is listening on ${port}`))