
/**
 * Module dependencies.
 */
var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

/**
 * Question Schema
 */
var QuestionSchema = new Schema({
  id: ObjectId
  , title: { type: String, trim: true, required: true }
  , author: { type: String, required: true }
  , body: { type: String, trim: true, required: true  }
  
})



mongoose.model('Question', QuestionSchema)

module.exports = mongoose.model('Question');




