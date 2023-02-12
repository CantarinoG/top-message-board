const messages = [
  {
    text: "Wanna see nirvana but don't wanna die.",
    user: "Cristopher Francis",
    added: new Date().toISOString()
  },
  {
    text: "All else fails, I was myself.",
    user: "Mr. Duckworth",
    added: new Date().toISOString()
  }
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function (req, res, next) {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date().toISOString()
  });
  res.redirect('/');
});

module.exports = router;
