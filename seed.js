var mongoonse = require('mongoose');
var Train = require('./models/train');

//Seeding array
var data = [
    {//first
        departure: "Assiut",
        destination: "Cairo",
        date: new Date(2020, 1, 1),
        cart:[
            {
                cartNumber: 1,
                seats: [
                    {
                        seatNumber: 1,
                        isBooked: true
                    }

                ]
            }
        ]

    },
    {//second
        departure: "Assiut",
        destination: "Cairo",
        date: new Date(2020, 1, 1),
        cart:[
            {
                cartNumber: 1,
                seats: [
                    {
                        seatNumber: 1,
                        isBooked: true
                    }

                ]
            }
        ]

    },
    {//third
        departure: "Assiut",
        destination: "Cairo",
        date: new Date(2020, 1, 1),
        cart:[
            {
                cartNumber: 1,
                seats: [
                    {
                        seatNumber: 1,
                        isBooked: true
                    }

                ]
            }
        ]

    },
    {//fourth
        departure: "Assiut",
        destination: "Cairo",
        date: new Date(2020, 1, 1),
        cart:[
            {
                cartNumber: 1,
                seats: [
                    {
                        seatNumber: 1,
                        isBooked: true
                    }

                ]
            }
        ]

    }
]

function seedDB() {
    Train.remove({}, function(err){
        if(err) {
            console.log(err)
        }
        console.log("removed trains")

        
    })
}