const mongoose =  require('mongoose')


const userSchema =  new mongoose.Schema({
    name: {
        first:{
            type: String
        },
        last: {
            type: String
        }
    },

    dob:{
        type: Date
    },

    address: {
        type: String
    },

    mobile:{
        type: Number
    },

    email: {
        type: String,
        required: true
    },

    registeredDate: {
        type: Date,
        default: Date.now
    },

    password: {
        type: String
    },

    resetPasswordToken: {
        type: String
    }
})


module.exports =  mongoose.model("User", userSchema, "User");