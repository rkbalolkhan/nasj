const Joi=require("joi");

module.exports.studentSchema = Joi.object({
    classToAdmit: Joi.string().required(),
    studentDetails: Joi.object({
      course: Joi.object({
        id: Joi.string()
          .pattern(/^[0-9a-fA-F]{24}$/)
          .required()
          .messages({
            "string.pattern.base": `"id" must be a valid ObjectId`,
            "any.required": `"id" is a required field`,
          }),
      }),
      registrationNo: Joi.number().required(),
      registrationDate: Joi.date().required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
      firstName: Joi.string().required(),
      middleName: Joi.string().required(),
      lastName: Joi.string().required(),
      dob: Joi.date().required(),
      age: Joi.number().required(),
      gender: Joi.string().required(),
      emailID: Joi.string().email(),
      country: Joi.string().required(),
      state: Joi.string().required(),
      city: Joi.string().required(),
      previosStudies: Joi.object({
        lastInstituteAttended: Joi.string(),
        quranChaptersCompleted: Joi.object({
          number: Joi.number(),
          hifz: Joi.boolean(),
        }),
      }),
    }).required(),
    parentsDetails: Joi.object({
      fatherName: Joi.string().required(),
      motherName: Joi.string().required(),
      occupation: Joi.string().required(),
      phoneNo: Joi.string().required(),
      emailID: Joi.string().email().required(),
    }).required(),
    address: Joi.object({
      present: Joi.object({
        line1: Joi.string().required(),
        line2: Joi.string().required(),
        line3: Joi.string().required(),
        country: Joi.string().required(),
        state: Joi.string().required(),
        city: Joi.string().required(),
      }).required(),
      permanent: Joi.object({
        line1: Joi.string().required(),
        line2: Joi.string().required(),
        line3: Joi.string().required(),
        country: Joi.string().required(),
        state: Joi.string().required(),
        city: Joi.string().required(),
      }).required(),
    }).required(),
  }).required()