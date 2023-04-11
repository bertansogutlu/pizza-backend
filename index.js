const server = require('./api/server')
const {PORT} = require('./config/config')

server.get('/', (req, res) => {
    res.send('Hello World!')
  })

server.listen(PORT,()=> console.log(`Server is listening on ${PORT}`))