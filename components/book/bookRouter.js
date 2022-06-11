const { Router } = require('express');
const bookController = require('./bookController');

const router = Router();

router
  .route('/')
  .get(bookController.getAllBook)
  .post(bookController.createBook);

router
  .route('/:id')
  .get(bookController.getOneBook)
  .put(bookController.updateBook)
  .delete(bookController.deleteBook);

module.exports = router;