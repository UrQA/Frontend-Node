var express = require('express');
var router = express.Router();

router.get('/sample1', function(req, res) {
  var object = require('./test.json');
  res.json(object);
});

router.get('/sample2', function(req, res) {
  var object = require('./test2.json');
  res.json(object);
});

router.get('/sample3', function(req, res) {
  var object = require('./test3.json');
  res.json(object);
});

router.get('/sample4', function(req, res) {
  var object = require('./test4.json');
  res.json(object);
});

router.get('/user-sample', function(req, res){
  var object = require('./user-sample.json');
  res.json(object);
});


router.get('/dashboard/pie', function(req, res){
  var object = require('./dashboard/graph/error-pie.json');
  res.json(object);
});

router.get('/dashboard/daily', function(req, res){
  var object = require('./dashboard/graph/daily-error.json');
  res.json(object);
});

router.get('/dashboard/info', function(req, res){
  var object = require('./dashboard/dashboard.json');
  res.json(object);
});


router.get('/stat/dau', function(req, res){
  var object = require('./stat/dailyActiveUser.json');
  res.json(object);
});
router.get('/stat/crash', function(req, res) {
  var object = require('./stat/crashRate.json');
  res.json(object);
});
router.get('/stat/os', function(req, res) {
  var object = require('./stat/osVersionList.json');
  res.json(object);
});
router.get('/stat/activity', function(req, res) {
  var object = require('./stat/errorActivityList.json');
  res.json(object);
});
router.get('/stat/device', function(req, res) {
  var object = require('./stat/deviceErrorRate.json');
  res.json(object);
});
router.get('/stat/world', function(req, res) {
  var object = require('./stat/worldMap.json');
  res.json(object);
});

module.exports = router;
