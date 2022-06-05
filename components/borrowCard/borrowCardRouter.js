const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.send('borrowCard');
});

module.exports = router;