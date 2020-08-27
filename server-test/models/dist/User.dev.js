"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  bDate: {
    type: String
  },
  gender: {
    type: String,
    "enum": ['M', 'F'],
    "default": 'M'
  },
  created: {
    type: Date
  }
});
mongoose.model('users', userSchema);