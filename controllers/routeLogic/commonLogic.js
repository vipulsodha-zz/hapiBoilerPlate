'use strict'
var errors = require('../../errors/errors')
var models = require('../../db/db').models
var dbHandler = require('../../db/dbHandler/dbHandler').dbHandler
var calculate = require('../../lib/calculate').calculate

module.exports = {
  leaderBoard: function (leagueId, callback) {
    dbHandler.documentExist(leagueId, models.LeagueId, function (err, data) {
      if(err) {
        return callback(err)
      } else if(data.length === 0) {
        return callback(errors.leagueExist)
      } else {
        calculate(leagueId, data[0], callback)
      }
    })
  }
}
