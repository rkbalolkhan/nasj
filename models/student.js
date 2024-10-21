var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var studentSchema = new Schema({
  course: {
    type:Schema.Types.ObjectId,
  },
  classToAdmit: {
    type: String,
    required: true,
  },
  studentDetails: {
    registrationNo: {
      type: Number,
      required: true,
    },
    registrationDate: {
      type: Date,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    phoneNo: {
      type: Number,
    },
    emailID: String,
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    previosStudies: {
      lastInstituteAttended: {
        type: String,
      },
      booksCompleted: [String],
      quranChaptersCompleted: {
        number: {
          type: Number,
        },
        hifz: {
          type: Boolean,
        },
      },
    },
  },
  parentsDetails: {
    fatherName: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    emailID: String,
  },
  address: {
    present: {
      line1: {
        type: String,
        required: true,
      },
      line2: {
        type: String,
        required: true,
      },
      line3: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
    },
    permanent: {
      line1: {
        type: String,
        required: true,
      },
      line2: {
        type: String,
        required: true,
      },
      line3: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
    },
  },
});


const Student = mongoose.model("Student", studentSchema);
module.exports = Student;