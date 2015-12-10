'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var MONGO_HOST = process.env.MONGO_HOST
var MONGO_DB = process.env.MONGO_DB
var MONGO_PORT = process.env.MONGO_PORT
var mongoUrl = 'mongodb://' + MONGO_HOST + ':' + MONGO_PORT + '/' + MONGO_DB
mongoose.connect(mongoUrl)

/* Creating Moongoose shema for Mongodb */
var leagueIdSchema = new Schema({
  leagueId: {type: Number, required: true, unique: true},
  userId: {type: Number, required: true},
  authUid: {type: String, required: true},
  email: {type: String, required: true},
  leagueName: {type: String, required: true},
  type: {type: String, required: true},
  handleName: {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  allowAll: {type: Boolean, default: true}
})

var LeagueId = mongoose.model('leagueids', leagueIdSchema)


var models = {
  LeagueId: LeagueId
}

exports.models = models
