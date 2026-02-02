//REQUIRED LISITING & REVIEWS MODEL : 
const Listing = require('../models/listing.js');
const Review = require('../models/reviews.js');


//POST NEW REVIEW ROUTE ~
module.exports.createReview = async (req, res) => {
    const { id } = req.params;

    const listing = await Listing.findById(id);
    if (!listing) {
        throw new ExpressError(404, "Listing not found");
    }

    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.unshift(newReview);
    
    await newReview.save();
    await listing.save();
    req.flash('success', 'Your review has been added successfully. Thank you!');
    res.redirect(`/listings/${listing._id}`);
}


//DESTROY REVIEW ROUTE ~
module.exports.destroyReview = async (req, res) => {
    let { id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull : {reviews : reviewId}});

    await Review.findByIdAndDelete(reviewId); 
    req.flash('success', 'The review has been removed successfully.');
    res.redirect(`/listings/${id}`);
}