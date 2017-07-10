/* 
 * Student Info: Name=Sujita Pokharel, ID=14105
 * Subject: CS557A_HW5_Spring_2016_Quiz03
 * Author: Suju
 * Filename: orders.js.js
 * Date and Time: Mar 26, 2016 9:14:53 PM 
 * Project Name: CS557AQuiz3_14105 
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/', function (req, res, next) {
    if (req.method === 'POST') {
        req.session.cart = [];
        var item = {};
        item.itemname = req.body.itemname;
        //item.quantity = req.body.quantity;
        req.session.cart.push(item);
        console.log(req.session.cart);
        res.redirect('/page2');
    } else {
        res.render('page1', {title: 'First Name'});
    }
});

module.exports = router;


