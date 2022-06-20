const { Router } = require('express');
const borrowCardController = require('./borrowCardController');

const router = Router();

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