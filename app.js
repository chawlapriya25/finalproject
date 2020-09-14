var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var bodyParser = require('body-parser');
var session = require('express-session');

// connect db
mongoose.connect('mongodb://localhost/shop', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("were connected!");
});


var app = express();
app.set('views',path.join(__dirname ,'views')); 
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

// bode parser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
// express session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));

app.use('/', indexRouter);

var port = 5000;

app.listen(port, function(){
    console.log("Server started on port " + port);
});

module.exports = app;