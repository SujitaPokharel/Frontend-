var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/', function (req, res, next) {
    var cartTgt = [];
    if (req.session.cart !== undefined) {
        cartTgt = req.session.cart;
    }

    res.render('cart', {title: 'Your Cart', cart: cartTgt});
});

module.exports = router;
