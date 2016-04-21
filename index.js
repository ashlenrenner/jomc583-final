var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var db = require('./config/db');
var user = require('./controllers/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/users', user.list); //list page

//mongodb function (add if I have time at the end)
db.connect('mongodb://localhost:27017/test', function(err) {
    console.log("MongoDB connected...");
    app.listen(8080, function() {
        console.log("Express started...");
    });
});
