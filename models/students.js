var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var studentSchema = new Schema({
  course: {
    madarsa: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },

    classToAdmit: {
      type: String,
      required: true,
    },
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
    age: () => {
      let diff = Date.now - this.dob;
      let ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
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
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    phoneNo: {
      type: Number,
      required: () => {
        let diff = this.registrationDate - this.dob;
        let ageDate = new Date(diff);
        let ageTemp = Math.abs(ageDate.getUTCFullYear() - 1970);
        return ageTemp > 18;
      },
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
        required: true,
      },
      booksCompleted: [String],
      quranChaptersCompleted: {
        number: {
          type: Number,
          required: true,
        },
        hifz: {
          type: Boolean,
          required: true,
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
      required: true,
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
      required: true,
    },
    required: true,
  },
});
