require('dotenv').config()

PORT = process.env.PORT || 8000
NODE_ENV = process.env.NODE_ENV

module.exports = {
    PORT,
    NODE_ENV
}