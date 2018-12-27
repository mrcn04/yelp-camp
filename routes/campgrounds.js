var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
// we dont need to require middleware/index.js because index.js is a home dir
var middleware = require("../middleware");

// INDEX Route - show all campgrounds
router.get('/', function(req, res){
    // get all campgrounds form DB
    Campground.find({}, function(err, allCampgrounds){
       if(err){
           console.log(err);
       } else {
           res.render('campgrounds/index', 
           {
               campgrounds: allCampgrounds
           });  //first campgrounds is the name we gave and second one is the data we want to pass in
       }
    });
});

// CREATE Route - add new campground to DB
router.post('/', middleware.isLoggedIn, function(req, res){
   //get data from form and add to campgrounds array
   var name = req.body.name;
   var price = req.body.price;
   var image = req.body.image;
   var desc = req.body.description;
   var author = {
       id: req.user._id,
       username: req.user.username
   }
   var newCampground = {name: name, price: price, image: image, description: desc, author: author}
   //Create a new campground and save it to DB
   Campground.create(newCampground, function(err, newlyCreated){
      if(err){
          console.log(err);
      } else {
          //redirect back to campgrounds page
          res.redirect('/campgrounds');
      }
   });
});

// NEW Route - show form to create new campground
router.get('/new', middleware.isLoggedIn, function(req, res){
   res.render('campgrounds/new'); 
});

// SHOW Route - shows info about one campground
router.get('/:id', function(req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
       if(err){
           console.log(err);
       } else {
           console.log(foundCampground);
           //render show template with that campground
           res.render('campgrounds/show', {campground: foundCampground});
       }
    });
});

// EDIT ROUTE
router.get('/:id/edit', middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            req.flash("error", "Please make sure you logged in");
        } else {
            res.render('campgrounds/edit', {campground: foundCampground});
        }
    });
});

// UPDATE ROUTE
router.put('/:id', middleware.checkCampgroundOwnership, function(req, res){
   // find and update the correct campground
   // instead of getting data into campground[], you can create var named data and pass all data into it
   Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
       if(err){
           res.redirect('/campgrounds');
       } else {
           // redirect to show page
           req.flash("success", "Changes are saved");
           res.redirect('/campgrounds/' + req.params.id);
       }
   });
});

// DESTROY ROUTE
router.delete('/:id', middleware.checkCampgroundOwnership, function(req, res){
   Campground.findByIdAndRemove(req.params.id, function(err){
       if(err){
           res.redirect('/campgrounds');
       } else {
           req.flash("success", "You deleted the campground");
           res.redirect('/campgrounds');
       }
   });
});

module.exports = router;