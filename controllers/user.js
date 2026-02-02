//REQUIRED USER  MODEL : 
const User = require('../models/user.js');


//GET SIGUP FORM ~ 
module.exports.renderSignupForm = (req, res) => {
    res.render('./users/signup.ejs');
}


//POST SIGNUP ROUTE ~
module.exports.registerUser = async (req, res, next) => {
    let {username, email, password} = req.body;
    try {
        let newUser = new User({username, email});
        let registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if(err){
                return next(err);
            }
            req.flash('success', `Welcome! ${username}, account created successfully.`);
            res.redirect('/listings');
        })
        
    } catch (err) {
        req.flash('error', `Username should be unique. The username '${username}', already exists.`);
        res.redirect('/signup');
    }
}


//GET LOGIN FORM ~
module.exports.renderLoginForm = (req, res) => {
    res.render('./users/login.ejs');
}


//POST LOGIN ROUTE ~
module.exports.loginUser = async (req, res) => {
        req.flash('success', `Login successful. Welcome back, ${req.body.username} !`);
        let redirectUrl = res.locals.redirectUrl || '/listings';
        res.redirect(redirectUrl);
    }


//LOGGED OUT ROUTE ~
module.exports.logoutUser = (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash('success', 'You have been logged out successfully.');
        res.redirect('/listings');
    });
}    
