'use strict'
var validations = require('../../validate/commonValidations').validator
var handlers = require('../routeHandlers/commonHandlers')
module.exports = {
    getLeaderBoard: {
      validate: validations.leaderBoard,
      handler: handlers.getLeaderBoardPage,
      description: 'Gives Leader Board',
      tags: ['api'],
      notes: ['Gives array for leaderboard']
    }
}
