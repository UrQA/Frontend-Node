var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('layout/dashboard/layout', {mainContainer : "../../dashboard/dashboard"});
});

router.get('/error', function(req, res) {
  res.render('layout/dashboard/layout', {mainContainer : "../../dashboard/error"});
});

router.get('/error/:idx?', function(req, res) {
  var id = req.params.id;
  res.render('layout/dashboard/layout', {mainContainer : "../../dashboard/detail"});
});

router.get('/setting', function(req, res) {
  var id = req.params.id;
  res.render('layout/dashboard/layout', {mainContainer : "../../dashboard/setting/general"});
});

router.get('/setting/symbolicate', function(req, res) {
  var id = req.params.id;
  res.render('layout/dashboard/layout', {mainContainer : "../../dashboard/setting/symbolicate"});
});

router.get('/setting/viewer', function(req, res) {
  var id = req.params.id;
  res.render('layout/dashboard/layout', {mainContainer : "../../dashboard/setting/viewer"});
});


module.exports = router;
