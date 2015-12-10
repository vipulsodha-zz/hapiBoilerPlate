'use strict'
var Joi = require('joi')

var commonLeagueIdValidation = Joi.number().integer().required().max(999999)

var validation = {
  signIn: {
    email: Joi.string().email().required(),
    tHandle: Joi.string().required().max(100)
  },
  getLeaderBoard: {
    leagueId: commonLeagueIdValidation
  },
  roundType: {
    leagueId: commonLeagueIdValidation
  },
  leagueParticipants: {
    leagueId: commonLeagueIdValidation
  },
  leagueRules: {
    leagueId: commonLeagueIdValidation
  },
  joinLeagueRedirect: {
    leagueId: commonLeagueIdValidation
  },
  getLeagueType: {
    leagueId: commonLeagueIdValidation
  }
}

var options = {
  signIn: {
    abortEarly: false
  },
  getLeaderBoard: {
    abortEarly: false
  },
  roundType: {
    abortEarly: false
  },
  leagueParticipants: {
    abortEarly: false
  },
  leagueRules: {
    abortEarly: false
  },
  joinLeagueRedirect: {
    abortEarly: false
  },
  getLeagueType: {
    abortEarly: false
  }
}

var createSchema = function (v, o) {

  return Joi.object(v).options(o)
}

var schema = {
  signIn: createSchema(validation.signIn, options.signIn),
  getLeaderBoard: createSchema(validation.getLeaderBoard, options.getLeaderBoard),
  roundType: createSchema(validation.roundType, options.roundType),
  leagueParticipants: createSchema(validation.leagueParticipants, options.leagueParticipants),
  leagueRules: createSchema(validation.leagueRules, options.leagueRules),
  joinLeagueRedirect: createSchema(validation.joinLeagueRedirect, options.joinLeagueRedirect),
  getLeagueType: createSchema(validation.getLeagueType, options.getLeagueType)
}

exports.schema = schema
