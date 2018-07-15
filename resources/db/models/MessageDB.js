var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var MsgSchema = new Schema({
  couple_key: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  poster: {
    type: String,
    required: true
  },
  msg: {
    type: String,    
    required: true
  }
});

var Msg = mongoose.model("Msg", MsgSchema);
module.exports = Msg;
