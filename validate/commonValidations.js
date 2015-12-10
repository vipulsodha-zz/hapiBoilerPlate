'use strict'
var schema = require('./schema/commonSchema').schema
var querySchema = require('./schema/commonQuerySchema').schema
var validator = {
  signIn: {
    payload: schema.signIn
  },
  leaderBoard: {
    params: schema.getLeaderBoard
  },
  roundType: {
    params: schema.roundType
  },
  leagueParticipants: {
    params: schema.leagueParticipants,
    query: querySchema.queryParam
  },
  leagueRules: {
    params: schema.leagueRules
  },
  getPermissionData: {
    query: querySchema.queryParamOptional
  },
  getLeagues: {
    query: querySchema.queryParam
  },
  getJoinedLeagues: {
    query: querySchema.queryParam
  },
  joinLeagueRedirect: {
    params: schema.joinLeagueRedirect
  },
  getLeagueType: {
    params: schema.getLeagueType,
    query: querySchema.queryParam
  }
}
exports.validator = validator
