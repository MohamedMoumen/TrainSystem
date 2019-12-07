var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var trainSchema = mongoose.Schema({
    departure: String,
    destination: String,
    dateOfDeparture: Date,
    numberOfCarts: Number,
    seats: [ {cartNo: Number, seatNo: Number, isBooked: Boolean} ],

});
//Making a model in the db
module.exports = mongoose.model('Train', trainSchema);
