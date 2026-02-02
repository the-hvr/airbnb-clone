const express = require('express');
const router = express.Router();

//REQUIRE STORAGE CLOUDINARY ^
const {storage} = require('../cloudConfig.js');

//MULTER ^
const multer  = require('multer');
const upload = multer({ storage });


//REQUIRE ISAUTHENTICATE & ISAUTHORIZED & VALIDATELISTING ^
const {isLoggedIn, isOwner, validateListing} = require('../middleware.js');

//REQUIRE FILES FOR CUSTOM ERRORS ^
const ExpressError = require('../utils/ExpressError.js');
const asyncWrap = require('../utils/asyncWrap.js');


//REQUIRE LISTING CONTROLLERS
const listingController = require('../controllers/listing.js')


//GET MAP ROUTE ~
router.get('/map', listingController.allMarkersMap);


//GET TERMS & CONDITIONS ROUTE ~
router.get('/terms&conditions', listingController.tAndC);


//GET PRIVACY, TERMS AND COMPANY DETAILS ROUTE ~
router.get('/companydetails', listingController.comapnyDetails);


// '/listings' ROUTE ~ index & post 
router
    .route('/')
    .get(asyncWrap(listingController.getAllListings))
    .post(
        isLoggedIn, 
        validateListing, 
        upload.single('listing[image]'),  
        asyncWrap(listingController.createListing));
    


//GET NEW ROUTE ~
router.get('/new', isLoggedIn, listingController.renderNewForm);


// '/listings/:id'  ROUTE ~  show, update, & destroy
router
    .route('/:id')
    .get(asyncWrap(listingController.showListing))
    .put(isLoggedIn, 
        isOwner, 
        validateListing, 
        upload.single('listing[image]'), 
        asyncWrap(listingController.updateListing))
    .delete(isLoggedIn, isOwner, asyncWrap(listingController.destroyListing));


//GET UPDATE ROUTE ~
router.get('/:id/edit', isLoggedIn, isOwner, asyncWrap(listingController.renderEditForm));


//EXPORT ALL ROUTER TO SERVER.JS
module.exports = router;