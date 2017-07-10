/* 
 * Student Info: Name=Sujita Pokharel, ID=14105
 * Subject: CS557A_HW5_Spring_2016_Quiz03
 * Author: Suju
 * Filename: carts.js.js
 * Date and Time: Mar 26, 2016 9:14:14 PM 
 * Project Name: CS557AQuiz3_14105 
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/', function (req, res, next) {
    var cartTgt = [];
    if (req.session.cart !== undefined) {
        cartTgt = req.session.cart;
    }
    if (req.method === 'POST') {
        var arrayOfItems = [];
        var itemName = req.body.itemname;
        var itemQuantity = req.body.quantity;
        if (itemName !== 'undefined') {
            if (alterOptions === 'Delete') {
                var arrayOfItems = cartTgt.splice(itemIndex, 1);
            } else {
                cartTgt[itemIndex].itemname = itemName;
                cartTgt[itemIndex].quantity = itemQuantity;
            }
        }
    }
    res.render('final', { cart: cartTgt, });
});
module.exports = router;




