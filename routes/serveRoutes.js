'use strict'
var path = require('path')
module.exports = function () {
  return [
  {
    method: 'GET',
    path: '/app/',
    handler: function (req, res) {
      res.file('index.html')
    }
  },
  {
    method: 'GET',
    path: '/app/public/{param*}',
    handler: {
      directory: {
        path: path.join(__dirname, '../public_html'),
        listing: true
      }
    }
  }
  ]
}()
