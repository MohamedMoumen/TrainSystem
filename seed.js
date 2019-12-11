var mongoonse = require('mongoose');
var Train = require('./models/train');

//Seeding array

var cc = []

for(var i = 0; i < 6; i++){
    cc.push({
        cartNumber:i + 1,
        seats:[]
    })
}

for(var i = 0; i < 6; i++){
    for(var j = 0; j < 20; j++) {
        cc[i].seats.push({
            seatNumber:j + 1,
            isBooked:false
        })
    }
}

var data = [{
        departure: "Assiut",
        destination: "Cairo",
        date: "2020-01-01",
        cart: cc
}]

function seedDB() {
    Train.remove({}, function(err){
        if(err) {
            console.log(err)
        }
        console.log("removed trains")
        //add few trains
        data.forEach(function(seed) {
            Train.create(seed, function(err, train) {
                if(err){
                    console.log(err);
                }else {
                    console.log('added train')
                }
            })
        })

    })
}

module.exports = seedDB;