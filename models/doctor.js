const mongoose =  require('mongoose')


const doctorSchema =  new mongoose.Schema({
    name: {
        first:{
            type: String
        },
        last: {
            type: String
        }
    },

    address: {
        type: String
    },
    qualifications: {
        type: Array
    },

    specialities: {
        type: Array
    },

    mobile:{
        type: Number
    },

    email: {
        type: String
    },

    practiceStartDate: {
        type: Date,
        required: true,
        default: new Date()
    }
})


module.exports =  mongoose.model("Doctor", doctorSchema, "Doctor");