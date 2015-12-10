/*
This files contains all database related functions
*/
'use strict'
var models = require('../db').models

var handleCallback = function (callback) {
  return function (err, res) {
    if(err) {
      return callback(err)
    } else {
      return callback(null, res)
    }
  }
}

var dbHandler = {}

dbHandler.saveLeagueId = function (param, callback) {
  var leagueId = new models.LeagueId(param)
  leagueId.save(handleCallback(callback))
}


exports.dbHandler = dbHandler
