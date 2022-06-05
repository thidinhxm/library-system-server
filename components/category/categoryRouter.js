const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.send('category');
});

module.exports = router;