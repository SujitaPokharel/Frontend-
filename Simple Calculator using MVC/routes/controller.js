/* 
 * Student Info: Name=Sujita Pokharel, ID=14105
 * Subject: CS557A_Quiz4_Spring_2016
 * Author: Suju
 * Filename: controller.js
 * Date and Time: Apr 10, 2016 9:21:49 PM 
 * Project Name: CS557A_Quiz04 
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render("controller", {app: "index"});
});

module.exports = router;

