var express = require('express');
var router = express.Router();
var Train = require('../models/train');

//Shows the booking screen
router.get('/', function(req, res){
    res.render('book');
});

//Book a ticket
router.post('/', function(req, res) {
    console.log(req.body.departure);
    //here you take the data from the request and query it in the db.
    var departure = req.body.departure;
    var destination = req.body.destination;
    var date = req.body.date;
    var cart = [
        {
            cartNumber: req.body.cart,
            seats: [
                {
                    seatNumber: req.body.seat,
                    isBooked: false
                }
            ]
            
        }
    ]
    
    console.log(req.body.cart)
    console.log(req.body.seat)
    var book = {departure: departure, destination: destination, date:date}
    console.log(book);
    //might be troublesome
    Train.findOne(book, function(err, train) {
        if(err){
            console.log(err)
        } else {
            if(train.cart.seat.isBooked) {
                // tell the user that the seat is not available
                res.send("seat not available")
            } else {
                train.cart.seat.isBooked = true;
                res.send("booked successfully");
                // Train.findOneAndUpdate(book, req.body.train, function(err, updatedTrain) {
                //     //tell the user that the seat is booked
                //     res.send("seat booked successfully")
                // })
            }
        }
    } )
});

module.exports = router;

