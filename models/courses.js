var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var courseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ageRange: {
    type: String,
    required: true,
  },
  genderBasedCategory: {
    type: String,
    enum:['male','female','both'],
    required: true,
  },
  institute: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  subjects: [
    {
      type: String,
      required: true,
    },
  ],
  features: [
    {
      type: Number,
      required: true,
    },
  ],
  courseCode: {
    type: String,
    required: true,
  },
});
