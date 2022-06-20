const { Router } = require('express');
const bookController = require('./bookController');

const router = Router();

router
  .route('/')
  .get(bookController.getAllBook)
  .post(bookController.createBook);

router
  .route('/:id/:no')
  .get(bookController.getBookByIDNo)
  .put(bookController.updateBook)
  .delete(bookController.deleteBook);

router
  .route('/:id')
  .get(bookController.getBookByMongoID);

module.exports = router;