const { Router } = require('express');
const returnCardController = require('./returnCardController');

const router = Router();

router
  .route('/')
  .get(returnCardController.getAllReturnCard)
  .post(returnCardController.createReturnCard);

router
  .route('/:id')
  .get(returnCardController.getOneReturnCard)
  .put(returnCardController.updateReturnCard)
  .delete(returnCardController.deleteReturnCard);

module.exports = router;