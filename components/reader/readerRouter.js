const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.send('reader');
});

module.exports = router;