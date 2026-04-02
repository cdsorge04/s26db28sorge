var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sandwich', { title: 'search results sandwiches' });
});

module.exports = router;
