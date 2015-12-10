/*
Common Callback handler for all the handler functions
*/
'use strict'
var handleCallback = function (res, perData) {

  return function (err, data) {
    if(err) {
      if(err.err){
        res(err).code(400)
      } else {
        res(err)
      }
    } else {
      if(perData) {
        res(perData)
      }
      else if(data) {
        res(data)
      } else {
        res({err: false})
      }
    }
  }
}

module.exports = handleCallback
