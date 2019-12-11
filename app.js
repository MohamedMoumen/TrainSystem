const express = require('express')
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const seedDB = require('./seed');
//const Schema = mongoose.Schema();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));

// Requiring routes
const trainRoutes = require('./routes/train');
//Seed the db
seedDB();


//Connect the db
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

//Create schemas here

//Render landing page
app.get('/', function (req, res) {
  res.render('landing')
})

// //Render book page
// app.get('/book', function(req, res){
//   res.render('book')
// })

app.use('/book', trainRoutes);
 
app.listen(3000)