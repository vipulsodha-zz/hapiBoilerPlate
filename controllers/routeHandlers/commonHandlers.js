'use strict'
var handlerLogic = require('../routeLogic/commonLogic')
var handleCallback = require('./responseCallbackHandler')
var domainName = process.env.DOMAIN_NAME

module.exports = {
  getLeaderBoardPage: function (req, res) {
    var param = {
      leagueId: req.params.leagueId
    }
    handlerLogic.leaderBoard(param.leagueId, handleCallback(res))
  }
}
