
/**
 * Module dependencies.
 */
var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

/**
 * User Schema
 */
var UserSchema = new Schema({
  id: ObjectId
  , name: { type: String, trim: true, required: true }
  , email: { type: String, trim: true, lowercase: true, required: true, unique: true }
  , avatar: { type: String, trim: true }
})



mongoose.model('User', UserSchema)




