//REQUIRE DOTENV ^
if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
}


//APP & PORT SETUP
const express = require('express');
const app = express();
const PORT =process.env.PORT || 8080;


// MONGOOSE SETUP ;
const mongoose = require('mongoose');
const MONGO_ATLAS_URL = process.env.ATLASDB_URL;  

main()
    .then(() => console.log(`CONNECTION SUCCESSFULL WITH MONGODB-ATLAS `))
    .catch((err) => console.log("CONNECTION FAILED - ERROR :", err));

async function main() {
    await mongoose.connect(MONGO_ATLAS_URL);
}


//REQUIRE DAYJS ^
const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);


//REQUIRE SOME NPM ^
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


//REQUIRED LISITING, REVIEWS & USER MODEL : 
const Listing = require('./models/listing.js');
const Review = require('./models/reviews.js');
const User = require('./models/user.js');


//COOKIE-PARSER --
const cookieParser = require('cookie-parser');
app.use(cookieParser("secretCodeAD456C23"));


//EXPESS-SESSION + CONNECT-MONGO ^
const session = require('express-session');
const MongoStore = require('connect-mongo').default;

const store = MongoStore.create({
    mongoUrl : MONGO_ATLAS_URL,
    crypto : {
        secret : process.env.SESSION_SECRET,
    },
    touchAfter : 24 * 3600,
});

store.on('error', (err)=> {
    console.log('ERROR FROM MONGO-SESSION', err);
});

app.set("trust proxy", 1);

const sessionOptions = {
    store,
    secret : process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized : true,
    cookie : {
        httpOnly : true,
        secure : true,
        sameSite: "none",
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : 7 * 24 * 60 * 60 * 1000,  
    },  
}
app.use(session(sessionOptions));


//PASSPORT CONFIGURATION ^
const passport = require('passport');
const LocalStrategy = require('passport-local');

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//FLASH +
const flash = require('connect-flash');
app.use(flash());
app.use((req, res, next) => {
    res.locals.successMsg = req.flash('success');
    res.locals.errorMsg = req.flash('error');
    res.locals.currUser = req.user;
    res.locals.dayjs = dayjs;
    next();
});


//REQUIRE LISTINGS & REVIEW ROUTE  -- ROUTER
const listingsRouter = require('./routes/listing.js');
const reviewRouter = require('./routes/review.js');
const userRouter = require('./routes/user.js');


//REQUIRE FILES FOR CUSTOM ERRORS
const ExpressError = require('./utils/ExpressError.js');
const asyncWrap = require('./utils/asyncWrap.js');


//LISTING & REVIEW VALIDATE MIDDLEWARE - server side err handling
const {listingSchema, reviewSchema} = require('./schema.js');


//EJS SETUP :
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);


//MIDDLEWARES : 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended : true}));
app.use(express.json());


// ROOT ROUTE ~
app.get('/', (req, res) => {
    res.redirect('/listings')
});


//LISTINGS ROUTER ~
app.use('/listings', listingsRouter);


//REVIEWS ROUTER ~
app.use('/listings/:id/reviews', reviewRouter);


//USER ROUTER ~
app.use('/', userRouter);


// 404 - Not Found (MIDDLEWARE)
app.use((req, res, next) => {
    next(new ExpressError(404, 
        'Page Not Found'
    ));
});


//ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
    let {status=500, message="500 - Oops!Something Went Wrong."} = err;
    console.log(status, err);
    res.status(status).render('./listings/error.ejs', {err});
});


//RUNNING PORT
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON http://localhost:${PORT}`);
});