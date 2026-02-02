const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//REQUIRE REFERENCE MODEL ^ 
const Review = require('./reviews.js');
const User = require('./user.js');

//LISIING SCHEMA :
const listingSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type: String,
        required : true,
    }, 
    image : {
        filename : {
            type : String,
            default: "listingimage",
        },
        url : {
            type : String,
            default : 'https://images.unsplash.com/photo-1762338693540-9011e09846de?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            set : 
            (v) => v === "" 
            ? "https://images.unsplash.com/photo-1762338693540-9011e09846de?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            : v,
        },
    }, 
    price : {
        type : Number,
        required : true,
        min : 0,
    },
    location : {
        type : String,
        required : true,
    },
    country : {
        type : String,
        required : true,
    },
    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref : 'Review',
        }
    ],
    owner : {
        type : Schema.Types.ObjectId,
        ref : 'User',
    },
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number], // [lng, lat]
            required: true
        }
    },
    categories: {
        type: [String],
        enum: [
            "trending",
            "iconic cities",
            "beach",
            "mountains",
            "cabins",
            "rooms",
            "luxury",
            "nature",
            "farms",
            "camping",
            "amazing pools",
            "arctic",
            "heritage",  
            "desert",
            "unique stays"
        ],
        required: true
    },

}, { timestamps: true });


//POST - MIDDLEWARE
listingSchema.post('findOneAndDelete', async(deletedListing) => {
    if(deletedListing){
        await Review.deleteMany({ _id : {$in :  deletedListing.reviews}}); 
    }
});


//LISTING MODEL :
const Listing = mongoose.model('Listing', listingSchema);


//EXPORT LISITNG MODEL :
module.exports = Listing;
