const { Router } = require('express');
const borrowCardController = require('./borrowCardController');

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


router
  .route('/')
  .get(borrowCardController.getAllBorrowCard)
  .post(borrowCardController.createBorrowCard);

router
  .route('/:id')
  .get(borrowCardController.getBorrowCardByID)
  .put(borrowCardController.updateBorrowCard)
  .delete(borrowCardController.deleteBorrowCard);

module.exports = router;