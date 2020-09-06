var express = require('express');
var path = require('path');

var app = express();
app.set('views',path.join(__dirname ,'views')); 