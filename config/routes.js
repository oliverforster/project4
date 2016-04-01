var router = require('express').Router();
var authController = require('../controllers/authentications');

router.get('/', function (req, res) {
  res.render('index')
})

router.post('/auth/facebook', authController.facebook);

module.exports = router;
