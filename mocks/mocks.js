'use strict'
module.exports = {
  dbHandler: {
    saveLeagueId: function (param, callback) {
      callback(null, {'ok': 1})
    },
    pushParticipants: function (param, model, callback) {
      callback(null, {'ok': 1})
    },
    getRules: function (leagueId, callback) {
      callback(null, ['rules'])
    },
    pushRules: function (leagueId, callback) {
      callback(null, {'ok': 1})
    },
    documentExist: function (leagueId, model, callback) {
      callback(null, ['document'])
    },
    participantExist: function (param, callback) {
      callback(null, ['participants'])
    },
    getLeagues: function (param, callback) {
      callback(null, ['hello'])
    }
  },
  httpAdapter: {
    post: function (url, data, headers, callback) {
      return callback(null, {"hello": "hello"})
    }
  }
}
