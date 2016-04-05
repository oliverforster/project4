var router          = require('express').Router();
var authController  = require('../controllers/authentications');
var tasteController = require('../controllers/tastekid');
var usersController = require('../controllers/users')
var foodController  = require('../controllers/food')

router.get('/', function (req, res) {
  res.render('index')
})

router.post('/auth/facebook', authController.facebook);

router.route('/users')
  .get(usersController.index)

router.route('/users/:id')
  .get(usersController.show)
  .put(usersController.update)
  .delete(usersController.delete);

router.post('/api/tastekid', tasteController.get)
router.get('/api/food', foodController.index)

module.exports = router;
