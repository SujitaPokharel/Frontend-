/* 
 * Student Info: Name=Sujita Pokharel, ID=14105
 * Subject: CS557A_HW5_Spring_2016_Quiz03
 * Author: Suju
 * Filename: orders_1.js
 * Date and Time: Mar 26, 2016 9:15:24 PM 
 * Project Name: CS557AQuiz3_14105 
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/', function (req, res, next) {
    if (req.method === 'POST') {
        var item = req.session.cart[0];        
        item.quantity = req.body.quantity;
        console.log(req.session.cart, 'order1');
        res.redirect('/final');
    }
    res.render('page2', {title: 'Last Name'});
});
module.exports = router;

