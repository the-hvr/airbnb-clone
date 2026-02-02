const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    comment: {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        required : true,
        min : 1,
        max : 5
    },
    author : {
        type : Schema.Types.ObjectId,
        ref : 'User',
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
});


//REVIEWS MODEL
const Review = new mongoose.model('Review', reviewSchema);

module.exports = Review;