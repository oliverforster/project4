var router          = require('express').Router();
var authController  = require('../controllers/authentications');
var tasteController = require('../controllers/tastekid')

router.get('/', function (req, res) {
  res.render('index')
})

router.post('/auth/facebook', authController.facebook);

router.post('/api/tastekid', tasteController.get)

module.exports = router;
