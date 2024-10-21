var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var courseSchema = new Schema({
  name:{
    type: String,
    required:true,
  },
  institute:{
    type:Schema.Types.ObjectId,
    required:true
  },
  classesAvailable:{
    type:["string"],
    required:true
  }
});
