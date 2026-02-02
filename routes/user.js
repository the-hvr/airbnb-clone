const express = require('express');
const router = express.Router();
const passport = require('passport');


//REQUIRE ISAUTHENTICATE FUNCTION ^
const {isLoggedIn, saveRedirectUrl} = require('../middleware.js');


//REQUIRE USER CONTROLLERS ^
const userController = require('../controllers/user.js');


//REQUIRE FILES FOR CUSTOM ERRORS
const ExpressError = require('../utils/ExpressError.js');
const asyncWrap = require('../utils/asyncWrap.js');


//REQUIRED USER  MODEL : 
const User = require('../models/user.js');


//GET & POST SIGUP FORM ~  '/signup'
router
    .route('/signup')
    .get(userController.renderSignupForm)
    .post(asyncWrap(userController.registerUser));


//GET & POST LOGIN FORM ~  '/login'
router
    .route('/login')
    .get( userController.renderLoginForm)
    .post(
    saveRedirectUrl, 
    passport.authenticate('local', {
        failureFlash : true,
        failureRedirect : '/login',
    }),
    asyncWrap ( userController.loginUser)
    );


//LOGGED OUT ROUTE ~
router.get('/logout',isLoggedIn, userController.logoutUser);


module.exports = router;