'use strict'
require('dotenv').load()
var hapi = require('hapi')
var commonRoutes = require('./routes/commonRoutes')
var serveRoutes = require('./routes/serveRoutes')
var config = require('./config/config')
var swagger = require('hapi-swagger/package')
var server = new hapi.Server()

server.connection(config)
server.route(commonRoutes)

var swaggerOptions = {
        basePath: 'http://' + config.host + ':' + config.port,
        apiVersion: swagger.version
      }
server.register({
  register: require('hapi-swagger'),
  options: swaggerOptions
  }, function (err) {
    if(err) {
      server.log(['error'], 'Plugin "hapi-swagger" load error: ' + err)
    }
    else {
      server.log(['start'], 'Swagger interface loaded')
      server.start(function () {
      console.log('Server Started @ ' + new Date())
    })
    }
  })
