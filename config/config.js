'use strict'
var path = require('path')
module.exports = {
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: true,
      files: {
        relativeTo: path.join(__dirname, '../public_html')
      }
    }
}
