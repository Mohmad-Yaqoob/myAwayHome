const express = require("express");
const router = express.Router({mergeParams: true});
const Listing  = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");



//INdex Route
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
}));

//New Route
router.get("/new", isLoggedIn,(req, res) => {
    res.render("listings/new.ejs");
})

// Show Route
router.get("/:id", 
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        const listing = await Listing.findById(id)
            .populate({
                path: "reviews",
                populate: {
                    path: "author", // Populate author for each review
                    model: "User" // Ensure this matches your User model name
                }
            })
            .populate("owner");

        if (!listing) {
            req.flash("error", "Requested Listing does not Exist!");
            return res.redirect("/listings");
        }

        res.render("listings/show.ejs", { listing, currUser: req.user });
    })
);



//Create Route
router.post("/", validateListing,
    isLoggedIn,
    wrapAsync (async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listings"); 
}));


//Edit Route
router.get("/:id/edit", 
    isLoggedIn,
    isOwner,
    async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
});
  
//Update Route
router.put("/:id",
    isLoggedIn,
    isOwner, 
    validateListing,
    wrapAsync(async (req, res) => {
        let {id} = req.params;
        await Listing.findByIdAndUpdate(id, {...req.body.listing});
        req.flash("success", "Listing Updated!");
        res.redirect(`/listings/${id}`);
    })
);
   
//Delete Route
router.delete("/:id", 
    isLoggedIn, 
    isOwner,
    async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
});

module.exports = router;