'use strict'
var controllers = require('../controllers/routeControllers/commonControllers')
var path = require('path')
module.exports = function () {
  return [
  {
    method: 'GET',
    path: '/app/leaderboard/{leagueId}',
    config: controllers.getLeaderBoard
  }
  ]
}()
