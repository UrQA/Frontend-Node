var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('projects/index');
});


/*
 * urqa/project/registration$ url mapping
*/
router.post('/', function(req, res, next) {
  res.render('projects/index');
});

/*
 * urqa/project/(?P<apikey>.{8})/$ url mapping
*/
router.get('/:apikey', function(req, res, next) {
    console.log(req.params.apikey);
  res.render('projects/index');
});

/*
 * ^urqa/project/(?P<apikey>.{8})/delete$' url mapping
*/
router.delete('/:apikey', function(req, res, next) {
    console.log(req.params.apikey);
  res.render('projects/index');
});

/*
 * ^urqa/project/(?P<apikey>.{8})/modify$' url mapping
*/
router.put('/:apikey', function(req, res, next) {
    console.log(req.params.apikey);
  res.render('projects/index');
});

module.exports = router;
