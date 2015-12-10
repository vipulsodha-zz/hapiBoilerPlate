'use strict'
var Joi = require('joi')

var validation = {
  queryParam: {
    authUid: Joi.string().required(),
    userId: Joi.number().integer().required()
  },
  queryParamOptional: {
    authUid: Joi.string(),
    userId: Joi.number().integer()
  }
}

var options = {
  queryParam: {
    abortEarly: false
  },
  queryParamOptional: {
    abortEarly: false
  }
}

var createSchema = function (v, o) {

  return Joi.object(v).options(o)
}

var schema = {
  queryParam: createSchema(validation.queryParam, options.queryParam),
  queryParamOptional: createSchema(validation.queryParamOptional, options.queryParamOptional)
}

exports.schema = schema
