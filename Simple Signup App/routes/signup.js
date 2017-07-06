/* 
 * Student Info: Name=Sujita Pokharel, ID=14105
 * Subject: CS557A_HW6_Spring_2016
 * Author: Suju
 * Filename: signup.js
 * Date and Time: Apr 8, 2016 9:54:00 AM 
 * Project Name: CS557_HW06_Spring2016 
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/', function (req, res, next) {

//   if (req.method === 'POST') {
//      
//         // Set our internal DB variable
//    var db = req.db;
//
//    // Get our form values. These rely on the "name" attributes
//   
//
//    // Set our collection
//    var collection = db.get('user_list');
//
//    // Submit to the DB
//    collection.insert(req.body.user, function (err, doc) {
//        if (err) {
//            // If it failed, return error
//            res.send("There was a problem adding the information to the database.");
//        }
//        else {
//            // And forward to success page
//            res.redirect("userlist");
//        }
//    });
//    } else {
//         res.render('signup',{ title : 'Home' } )
//    }

     res.render("signup", {userApp: "signup"});
});


module.exports = router;


