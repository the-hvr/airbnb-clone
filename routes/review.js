const express = require('express');
const router = express.Router({mergeParams: true});


//REQUIRE FILES FOR CUSTOM ERRORS
const ExpressError = require('../utils/ExpressError.js');
const asyncWrap = require('../utils/asyncWrap.js');


//REQUIRE VALIDATE REVIEWS & ISLOGEDIN MIDDLEWARE ^
const {validateReview, isLoggedIn, isReviewAuthor} = require('../middleware.js');


//REQUIRE REVIEWCONTROLLERS ^
const reviewController = require('../controllers/review.js');


//REQUIRED LISITING & REVIEWS MODEL : 
const Listing = require('../models/listing.js');
const Review = require('../models/reviews.js');


//POST NEW REVIEW ROUTE ~
router.post('/', isLoggedIn, validateReview, asyncWrap(reviewController.createReview));


//DESTROY REVIEW ROUTE ~
router.delete('/:reviewId', isLoggedIn, isReviewAuthor, asyncWrap(reviewController.destroyReview));


module.exports = router;
