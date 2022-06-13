const { Router } = require('express');

const borrowCardController = require('./borrowCardController');
const router = Router();


router
  .route('/:id')
  .get(borrowCardController.getBorrowedHistory)
router
  .route('/top-borrowed-book/:year')
  .get(borrowCardController.getTopBorrowedBook)



module.exports = router;