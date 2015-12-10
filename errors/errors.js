/* 
Contains all errors used throughout the app
*/

'use strict'
module.exports = {
  leagueExist: {
    err: true,
    error: 'League Does Not Exist',
    statusCode: 123
  },
  participantExist: {
    err: true,
    error: 'Participant Does Not Exists',
    statusCode: 400
  },
  emailExist: {
    err:true,
    error: 'Email Already registered for you',
    statusCode:128
  },
  rulesExist: {
    err: true,
    error: 'Rules Exists',
    statusCode: 125
  },
  noRules: {
    err: true,
    error: 'No rules Defined',
    statusCode: 126
  },
  noParticipants: {
    err: true,
    error: 'No Participants',
    statusCode: 127
  },
  serverError: {
    err: true,
    error: 'Something Went Wrong',
    statusCode: 400
  },
  accessDenied: {
    err: true,
    error: "You are not allowed to access",
    statusCode: 401
  },
  twitterUserNotFound: {
    err: true,
    error: "Twitter User Not Found",
    statusCode: 130
  },
  leagueNotStarted: {
    err: true,
    error: "League Not Started",
    statusCode: 131
  }
}
