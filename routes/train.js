var express = require('express');
var router = express.Router();
var Train = require('../models/train');

//Shows the booking screen
router.get('/', function(req, res){
    res.render('book');
});

//Book a ticket
router.post('/', function(req, res) {
    //here you take the data from the request and query it in the db.
    var departure = req.body.departure;
    var destination = req.body.destination;
    var date = req.body.date;

    //The variable that decides what data we will query in the db
    var book = {departure: departure, destination:destination, date:date}

    Train.findOne(book,function(err, foundOne){
        if(err) {
            console.log(err)
        } else {// Could use some simplicity ...
            if(foundOne == null){
                res.send("Seat not available <a href=\"/\">Home</a>")
            } else {
                //Updating the db 
                
                var cart = foundOne.cart;
                cart[req.body.cart - 1].seats[req.body.seat - 1].isBooked = true;
                Train.findOneAndUpdate(book, {cart:cart}, function(err, train) {
                    if(err){
                        console.log(err)
                    } else {
                        if(train.cart[req.body.cart - 1].seats[req.body.seat - 1].isBooked) {
                            res.send("Seat not available <a href=\"/\">Home</a>")
                        } else {
                            var data = {
                                cart: req.body.cart,
                                seat:req.body.seat,
                                id: train.id
                            }
                            res.render('confirm',{train:data});
                            // res.send("booked successfully\nYour ticket: " + train + " <a href=\"/\">Home Page</a>");
                        }
                    }
                } )
            }
        }
    })
 });

module.exports = router;

