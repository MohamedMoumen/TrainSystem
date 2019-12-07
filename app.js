const express = require('express')
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));

//Render landing page
app.get('/', function (req, res) {
  res.render('landing')
})

//Render book page
app.get('/book', function(req, res){
  res.render('book')
})
 
app.listen(3000)