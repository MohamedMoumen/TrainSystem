var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var trainSchema = mongoose.Schema({
    departure: String,
    destination: String,
    date: {type: Date, default: Date.now},
    cart: [ mongoose.Schema.Types.Mixed ]
});
//Making a model in the db
module.exports = mongoose.model('train', trainSchema);
