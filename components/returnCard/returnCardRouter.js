const { Router } = require('express');
const authMiddleware = require('../auth/authMiddleware');
const returnCardController = require('./returnCardController');

const router = Router();

router
  .route('/')
  .get(returnCardController.getAllReturnCard)
  .post(authMiddleware.isLibrarian, returnCardController.createReturnCard);

router
  .route('/:id')
  .get(returnCardController.getReturnCardByID)
  .put(authMiddleware.isLibrarian, returnCardController.updateReturnCard)
  .delete(authMiddleware.isLibrarian, returnCardController.deleteReturnCard);

module.exports = router;