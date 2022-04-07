const mongoose =  require('mongoose')


const reviewSchema =  new mongoose.Schema({
    review: {
            type: String,
            required: true
    },
    user_id: {
        type: String,
        required: true
    },

    rating: {
        type: Number,
        default: 0
    }
    
})


module.exports =  mongoose.model("Review", reviewSchema, "Reviews");