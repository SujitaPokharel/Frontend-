/* 
 * Student Info: Name=Sujita Pokharel, ID=14105
 * Subject: CS557A_HW5_Spring_2016_Quiz03
 * Author: Suju
 * Filename: users.js
 * Date and Time: Mar 26, 2016 9:15:52 PM 
 * Project Name: CS557AQuiz3_14105 
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

