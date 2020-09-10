var express = require('express');
var app = require("../app");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'killing it' });
});
module.exports = app;
module.exports = router;
