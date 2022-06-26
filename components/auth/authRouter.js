const { Router } = require('express');
const authController = require('./authController');
const router = Router();

router.get('/', (req, res) => {
  res.send('auth');
});

router.post('/login-librarian', authController.loginLibrarian);

router.route('/verify-reader/:token').get(authController.verifyEmailReader);
router.route('/verify-librarian/:token').get(authController.verifyEmailLibrarian);

module.exports = router;