const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const instituteSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    mainAddress:{
        address:{
            type:String,
            required,
        },
        geoCoordinates: {
            latitude: Number,
            longitude: Number
        },
        required:true,
    },
    features:{
        type:[String],
        required:true,
    },
    courses:{
        type:[Schema.Types.ObjectId],
    },

    branches:{
        type:[String],
    },

    certifications:[{
            name:{
                type:String,
                required:true,
            },
            typeOfCertificate:{
                type:String,
                required:true,
            },
            issuer:{
                type:String,
                required:true,
            },
            image:String,
            dateOfIsuue:Date,
            CertificationNo:String,


        }],
})