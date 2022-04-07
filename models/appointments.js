const mongoose =  require('mongoose')


const userSchema =  new mongoose.Schema({

    d_id:{
        type: String,
        required: true
    },

    p_id: {
        type: String,
        required: true
    },

    title: {
        type: String
    },

    start: {
        type: Date,
        required: true
    },

    end: {
        type: Date,
        required: true
    },

    event: {
        type: Object,
    }

})


module.exports =  mongoose.model("Appointments", userSchema, "Appointments");
#comment
