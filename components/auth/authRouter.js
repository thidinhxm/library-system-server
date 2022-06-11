const { Router } = require('express');
const authController = require('./authController');
const passport = require('./passport');
const router = Router();

router.get('/', (req, res) => {
  res.send('auth');
});

router.get('/protected', passport.authenticate('jwt', { session: false }), authController.protected);
router.post('/loginLibrarian', authController.loginLibrarian);

module.exports = router;