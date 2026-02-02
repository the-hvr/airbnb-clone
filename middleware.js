module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash('error', 'You must be logged in to perform this action.');
        return res.redirect('/login');
    }
    next();
}


//POST LOGIN PAGE +
module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl =  req.session.redirectUrl;
    }
    next();
}


//AUTHRORIZATION FOR LISTINGS +
const Listing = require('./models/listing.js');

module.exports.isOwner = async (req, res, next) => {
    const {id} = req.params;
        let listing = await Listing.findById(id);
        if (!listing.owner.equals(res.locals.currUser._id)){
            req.flash('error', 'You are not authorized to modify this Listing.');
            return res.redirect(`/listings/${id}`);
        }
    next();
};



const Review = require('./models/reviews.js');
module.exports.isReviewAuthor = async (req, res, next) => {
    let {id, reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash('error', 'You are not authorised to DELETE this review.');
        return res.redirect(`/listings/${id}`);
    }
    next();
}



//VALIDATE LISTING MIDDLEWARE + 
const {listingSchema} = require('./schema.js');
const ExpressError = require('./utils/ExpressError.js');

module.exports.validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
        if(error){
            throw new ExpressError(400, error.details.map(el => el.message).join(','));
        } 
        next();
}



//VALIDATE REVIEWS MIDDLEWARE 
const {reviewSchema} = require('./schema.js'); 

module.exports.validateReview = (req, res, next) => {
    const  {error} = reviewSchema.validate(req.body);
    console.log(req.body);
    if(error){
        throw new ExpressError(400, error.details.map(el => el.message).join(','));
    }
    next();
}
