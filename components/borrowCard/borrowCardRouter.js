const { Router } = require('express');

const borrowCardController = require('./borrowCardController');
const router = Router();
router
  .route('/')
  .post(borrowCardController.createBorrowCard)

router
  .route('/:id')
  .get(borrowCardController.getBorrowCard)
  .patch(borrowCardController.updateBorrowCard)
  .delete(borrowCardController.deleteBorrowCard);

router
  .route('/top-borrowed-book/:year')
  .get(borrowCardController.getTopBorrowedBook)



module.exports = router;