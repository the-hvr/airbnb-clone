const Listing = require('../models/listing');


//GET MAP ROUTE ~
module.exports.allMarkersMap = async(req, res) => {
  const listings = await Listing.find({});
  res.render("./listings/map.ejs", { listings });
}


//GET TERMS & CONDITIONS ROUTE ~
module.exports.tAndC = (req, res) => {
    res.render('./listings/t&c.ejs');
}


//GET PRIVACY, TERMS AND COMPANY DETAILS ROUTE ~
module.exports.comapnyDetails = (req, res) => {
    res.render('./listings/company.ejs');
}


//INDEX ROUTE ~
module.exports.getAllListings = async (req, res) => {
    const {category, search} = req.query;
    let allListings;

    if(category){
        allListings = await Listing.find({categories : category});
        
    } else if (search) {
        const regex = new RegExp(search, 'i');
        allListings = await Listing.find({ 
            $or : [
                {title : regex},
                {location : regex},
                {country : regex},
                {description : regex},
        ]});
        
    } else {
        allListings = await Listing.find({}).sort({ createdAt: -1 });
        
    }
    res.render('./listings/index.ejs', {allListings, category, search});
}


//GET NEW LISTING FORM ROUTE ~
module.exports.renderNewForm = (req, res) => {
    console.log(req.user);
    res.render('./listings/new.ejs');
}


//POST NEW ROUTE ~
module.exports.createListing = async (req, res) => {
    let {location} = req.body.listing;

    const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`
        );
    const data = await response.json();
    if(!data.length){
        req.flash("error", "Location not found. Please enter a valid location.");
        return res.redirect("/listings/new");
    }

    let { lat, lon} = data[0];
    let { path : url, filename } = req.file;

    const newListing = new Listing(req.body.listing);
    newListing.image = {url, filename}
    newListing.owner = req.user._id;
    newListing.geometry = {
        type : 'Point',
        coordinates: [Number(lon), Number(lat)]
    };

    await newListing.save();
    req.flash('success', 'Your listing has been published successfully.');
    res.redirect('/listings');
}


//SHOW ROUTE ~
module.exports.showListing = async (req, res) => {
    const {id} = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path : 'reviews', 
            populate : {path : 'author'},
            })
        .populate('owner');
    if(!listing){
        req.flash('error', 'The requested listing does not exist.');
        res.redirect('/listings');
    } else {
        res.render('./listings/show.ejs', {listing});
    }
}


//GET UPDATE ROUTE ~
module.exports.renderEditForm = async(req, res) => {
    const {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash('error', 'The requested listing does not exist.');
        res.redirect('/listings')
    } else {
        let originalImgUrl = listing.image.url;
        originalImgUrl = originalImgUrl.replace('/upload', '/upload/w_200/e_blur:150');
        res.render('./listings/edit.ejs', {listing, originalImgUrl});
    } 
}


//PUT UPDATE ROUTE ~
module.exports.updateListing = async (req, res) => {
    const {id} = req.params;
    let updatedListing = await Listing.findByIdAndUpdate(id, 
        {...req.body.listing}, 
        {runValidators: true, new : true}
    );
    
    if(typeof req.file !== 'undefined'){
       let { path : url, filename } = req.file;
       updatedListing.image = {url, filename};
       await updatedListing.save();
    }

    req.flash('success', 'Changes to your listing have been saved successfully.');
    res.redirect(`/listings/${id}`);
}


//DESTROY ROUTE ~
module.exports.destroyListing = async (req, res) => {
    const {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash('success', 'Your listing has been removed successfully.');
    res.redirect('/listings');
}