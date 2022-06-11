const { Router } = require('express');
const bookTitleController = require('./bookTitleController');

const router = Router();

router
  .route('/')
  .get(bookTitleController.getAllBookTitle)
  .post(bookTitleController.createBookTitle);

router
  .route('/:id')
  .get(bookTitleController.getOneBookTitle)
  .put(bookTitleController.updateBookTitle)
  .delete(bookTitleController.deleteBookTitle);

module.exports = router;