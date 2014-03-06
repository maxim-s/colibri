
/**
 * Module dependencies.
 */
var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var Comment = new Schema({
	  text: { type: String, trim: true, required: true, maxLength: 160 }
    , author: { type: String, trim: true, required: true }
    , date: { type: Date, default: Date.now}
})

var Answer = new Schema({
	  body: { type: String, trim: true, required: true }
	, author: { type: String, trim: true, required: true }
	, rating: { type: Number, default: 0 }
	, date: { type: Date, default: Date.now }
    , comments: [Comment]
})

/**
 * Question Schema
 */
var Question = new Schema({
  id: ObjectId
  , title: { type: String, trim: true, required: true }
  , author: { type: String, required: true }
  , body: { type: String, trim: true, required: true  }
  , date: { type: Date, default: Date.now}
  , answers: [Answer]
  //, answers: [{ body: String, date: Date }]
  , comments: [Comment]
})


module.exports = mongoose.model('Question', Question);

module.exports = mongoose.model('Question');




