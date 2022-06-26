const { Router } = require('express');
const borrowCardController = require('./borrowCardController');
const authMiddleware = require('../auth/authMiddleware');
const router = Router();

router.route('/')
  .get(authMiddleware.isLibrarian, borrowCardController.getAllBorrowCard)
  .post(authMiddleware.isLibrarian, borrowCardController.createBorrowCard)

router
  .route('/:id', authMiddleware.isLibrarian)
  .get(borrowCardController.getBorrowCard)
  .patch(borrowCardController.updateBorrowCard)
  .delete(borrowCardController.deleteBorrowCard);

router
  .route('/top-borrowed-book/:year')
  .get(borrowCardController.getTopBorrowedBook)

module.exports = router;